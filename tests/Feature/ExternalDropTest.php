<?php

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Gate;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\DroppableCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventPolicy;
use Saade\FilamentFullCalendar\Tests\Fixtures\Meeting;
use Saade\FilamentFullCalendar\Tests\Fixtures\MixedCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\PrefilledCalendarWidget;

function createUnscheduledMeeting(): Meeting
{
    return Meeting::create(['title' => 'Unscheduled', 'starts_at' => '2026-01-01 00:00:00', 'ends_at' => '2026-01-01 00:00:00']);
}

function draggableItem(string $blade, array $data = []): array
{
    preg_match('/data-filament-fullcalendar-draggable="([^"]*)"/', Blade::render($blade, $data), $matches);

    return json_decode(html_entity_decode($matches[1]), associative: true);
}

it('only accepts drops when the calendar is droppable', function () {
    expect(Livewire::test(DroppableCalendarWidget::class)->instance()->isDroppable())->toBeTrue()
        ->and(Livewire::test(PrefilledCalendarWidget::class)->instance()->isDroppable())->toBeFalse();

    Livewire::test(PrefilledCalendarWidget::class)
        ->call('handleExternalDrop', ['data' => []], '2026-10-06', true, null)
        ->assertForbidden();
});

it('renders a draggable item with its data', function () {
    $item = draggableItem('<x-filament-fullcalendar::draggable title="Review" duration="02:00" :data="[\'kind\' => \'review\']" class="p-2">Review</x-filament-fullcalendar::draggable>');

    expect($item)->toBe([
        'calendar' => null,
        'title' => 'Review',
        'duration' => '02:00',
        'data' => ['kind' => 'review'],
        'record' => null,
    ]);
});

it('opens the create action with the dropped dates and the data of the item', function () {
    Livewire::test(DroppableCalendarWidget::class)
        ->call('handleExternalDrop', ['data' => ['kind' => 'review'], 'duration' => '02:30'], '2026-10-06T09:00:00-03:00', false, ['id' => '4'])
        ->assertActionMounted('create')
        ->assertSet('mountedActions.0.arguments.data.kind', 'review')
        ->assertSchemaStateSet([
            'title' => 'Untitled',
            'team_id' => '4',
            'starts_at' => '2026-10-06 12:00:00',
            'ends_at' => '2026-10-06 14:30:00',
        ], 'mountedActionSchema0');
});

it('saves a dropped record with the dates it was dropped on', function () {
    $meeting = createUnscheduledMeeting();

    $item = draggableItem(
        '<x-filament-fullcalendar::draggable :calendar="$calendar" :record="$record">Meeting</x-filament-fullcalendar::draggable>',
        ['calendar' => DroppableCalendarWidget::class, 'record' => $meeting],
    );

    $component = Livewire::test(DroppableCalendarWidget::class);

    $component
        ->call('handleExternalDrop', $item, '2026-10-06T09:00:00-03:00', false, null)
        ->assertSet('mountedActions', [])
        ->assertDispatched('filament-fullcalendar--refresh', calendar: $component->instance()->getId());

    expect($meeting->refresh())
        ->starts_at->toDateTimeString()->toBe('2026-10-06 12:00:00')
        ->ends_at->toDateTimeString()->toBe('2026-10-06 13:00:00');
});

it('gives a record dropped on a day the whole day', function () {
    $meeting = createUnscheduledMeeting();

    $item = ['record' => DroppableCalendarWidget::getDraggableRecordIdentity($meeting)];

    Livewire::test(DroppableCalendarWidget::class)
        ->call('handleExternalDrop', $item, '2026-10-06', true, null);

    expect($meeting->refresh())
        ->starts_at->toDateTimeString()->toBe('2026-10-06 00:00:00')
        ->ends_at->toDateTimeString()->toBe('2026-10-06 23:59:59');
});

it('does not save a dropped record the user may not update', function () {
    Gate::policy(Meeting::class, EventPolicy::class);
    EventPolicy::$allows = false;

    $meeting = createUnscheduledMeeting();

    Livewire::test(DroppableCalendarWidget::class)
        ->call('handleExternalDrop', ['record' => DroppableCalendarWidget::getDraggableRecordIdentity($meeting)], '2026-10-06', true, null);

    EventPolicy::$allows = true;

    expect($meeting->refresh()->starts_at->toDateString())->toBe('2026-01-01');
});

it('refuses a record that was made draggable for another calendar or changed in the browser', function (Closure $item) {
    $meeting = createUnscheduledMeeting();

    Livewire::test(DroppableCalendarWidget::class)
        ->call('handleExternalDrop', ['record' => $item($meeting)], '2026-10-06', true, null)
        ->assertForbidden();

    expect($meeting->refresh()->starts_at->toDateString())->toBe('2026-01-01');
})->with([
    'another calendar' => [fn (Meeting $meeting) => MixedCalendarWidget::getDraggableRecordIdentity($meeting)],
    'another key' => [fn (Meeting $meeting) => [...DroppableCalendarWidget::getDraggableRecordIdentity($meeting), 'key' => 999]],
]);

it('needs the calendar to make a record draggable', function () {
    Blade::render(
        '<x-filament-fullcalendar::draggable :record="$record">Meeting</x-filament-fullcalendar::draggable>',
        ['record' => createUnscheduledMeeting()],
    );
})->throws(Exception::class, 'has to be made by the widget it can be dropped on');

it('makes any element draggable without the component', function () {
    $meeting = createUnscheduledMeeting();

    $item = draggableItem('<tr {{ $calendar::getDraggableAttributes(record: $record, duration: "00:30") }}></tr>', [
        'calendar' => DroppableCalendarWidget::class,
        'record' => $meeting,
    ]);

    expect($item)->toMatchArray(['calendar' => DroppableCalendarWidget::class, 'duration' => '00:30'])
        ->and($item['record'])->toBe(DroppableCalendarWidget::getDraggableRecordIdentity($meeting));

    Livewire::test(DroppableCalendarWidget::class)
        ->call('handleExternalDrop', $item, '2026-10-06T09:00:00-03:00', false, null);

    expect($meeting->refresh()->ends_at->toDateTimeString())->toBe('2026-10-06 12:30:00');
});

it('accepts an item written by hand, with only the data it needs', function () {
    Livewire::test(DroppableCalendarWidget::class)
        ->call('handleExternalDrop', ['data' => ['kind' => 'review']], '2026-10-06', true, null)
        ->assertActionMounted('create')
        ->assertSet('mountedActions.0.arguments.data.kind', 'review');

    Livewire::test(DroppableCalendarWidget::class)
        ->call('handleExternalDrop', [], '2026-10-06', true, null)
        ->assertActionMounted('create');
});

it('addresses an item made by the base widget to every calendar', function () {
    $item = draggableItem('<li {{ \Saade\FilamentFullCalendar\Widgets\FullCalendarWidget::getDraggableAttributes(data: ["kind" => "review"]) }}></li>');

    expect($item['calendar'])->toBeNull()
        ->and($item['data'])->toBe(['kind' => 'review']);
});
