<?php

use Filament\Forms\Components\TextInput;
use Filament\Infolists\Components\TextEntry;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\InfolistCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\LegacyFormCalendarWidget;

function createMeeting(): Event
{
    return Event::create([
        'title' => 'Meeting',
        'starts_at' => '2026-10-06 09:00:00',
        'ends_at' => '2026-10-06 10:00:00',
    ]);
}

function dropMeeting(Event $event): array
{
    return [
        ['id' => $event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T10:00:00Z'],
        ['id' => $event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'],
        [],
        ['days' => 1],
        null,
        null,
    ];
}

it('creates an event with the fields from form()', function (string $widget) {
    Livewire::test($widget)
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertSchemaComponentExists('title', 'mountedActionSchema0', fn ($component): bool => $component instanceof TextInput)
        ->fillForm([
            'title' => 'Planning',
            'starts_at' => '2026-10-06 09:00:00',
            'ends_at' => '2026-10-06 10:00:00',
        ])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form');

    expect(Event::where('title', 'Planning')->exists())->toBeTrue();
})->with([
    'form()' => EventCalendarWidget::class,
    'deprecated getFormSchema()' => LegacyFormCalendarWidget::class,
]);

it('validates the fields from form()', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->fillForm(['title' => null])
        ->callMountedAction()
        ->assertHasFormErrors(['title' => 'required']);
});

it('edits an event with the fields from form()', function (string $widget) {
    $event = createMeeting();

    Livewire::test($widget)
        ->call('handleEventDrop', ...dropMeeting($event))
        ->assertActionMounted('edit')
        ->assertSchemaStateSet(['title' => 'Meeting'], 'mountedActionSchema0')
        ->fillForm(['title' => 'Renamed'])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form');

    expect($event->refresh()->title)->toBe('Renamed');
})->with([
    'form()' => EventCalendarWidget::class,
    'deprecated getFormSchema()' => LegacyFormCalendarWidget::class,
]);

it('views an event with the entries from infolist()', function () {
    $event = createMeeting();

    Livewire::test(InfolistCalendarWidget::class)
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->assertActionMounted('view')
        ->assertSchemaComponentExists('title', 'mountedActionSchema0', fn ($component): bool => $component instanceof TextEntry && $component->getState() === 'Meeting');
});

it('views an event with the disabled form when there is no infolist', function (string $widget) {
    $event = createMeeting();

    Livewire::test($widget)
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->assertActionMounted('view')
        ->assertSchemaComponentExists('title', 'mountedActionSchema0', fn ($component): bool => $component instanceof TextInput && $component->isDisabled());
})->with([
    'form()' => EventCalendarWidget::class,
    'deprecated getFormSchema()' => LegacyFormCalendarWidget::class,
]);

it('still edits with the form when the widget has an infolist', function () {
    $event = createMeeting();

    Livewire::test(InfolistCalendarWidget::class)
        ->call('handleEventDrop', ...dropMeeting($event))
        ->assertActionMounted('edit')
        ->assertSchemaComponentExists('title', 'mountedActionSchema0', fn ($component): bool => $component instanceof TextInput);
});
