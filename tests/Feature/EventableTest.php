<?php

use Filament\Forms\Components\DateTimePicker;
use Filament\Infolists\Components\TextEntry;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Gate;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventPolicy;
use Saade\FilamentFullCalendar\Tests\Fixtures\Meeting;
use Saade\FilamentFullCalendar\Tests\Fixtures\MixedCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Task;
use Saade\FilamentFullCalendar\Tests\Fixtures\TaskQueryCalendarWidget;

const OCTOBER = ['start' => '2026-10-01T00:00:00Z', 'end' => '2026-11-01T00:00:00Z', 'timezone' => 'UTC'];

function createMeetingRecord(string $title = 'Standup'): Meeting
{
    return Meeting::create(['title' => $title, 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);
}

function createTaskRecord(string $name = 'Ship it', string $dueAt = '2026-10-08 00:00:00'): Task
{
    return Task::create(['name' => $name, 'due_at' => $dueAt]);
}

function fetchMixedEvents(): array
{
    return json_decode(json_encode(Livewire::test(MixedCalendarWidget::class)->instance()->handleFetchEvents(OCTOBER)), associative: true);
}

it('turns models into events', function () {
    $meeting = createMeetingRecord();
    $task = createTaskRecord();

    [$meetingEvent, $taskEvent, $holiday] = fetchMixedEvents();

    expect($meetingEvent)
        ->toMatchArray(['title' => 'Standup', 'id' => Meeting::class . '-' . $meeting->getKey()])
        ->and($meetingEvent['extendedProps']['kind'])->toBe('meeting')
        ->and($meetingEvent['extendedProps']['calendarRecord'])->toMatchArray(['model' => Meeting::class, 'key' => $meeting->getKey()])
        ->and($taskEvent)->toMatchArray(['title' => 'Ship it', 'allDay' => true, 'id' => Task::class . '-' . $task->getKey()])
        ->and($holiday)->toBe(['id' => 'holiday', 'title' => 'Holiday', 'start' => '2026-10-12']);
});

it('gives events of different models with the same key different ids', function () {
    createMeetingRecord();
    createTaskRecord();

    [$meetingEvent, $taskEvent] = fetchMixedEvents();

    expect($meetingEvent['id'])->not->toBe($taskEvent['id']);
});

it('runs a query returned from fetchEvents', function () {
    createTaskRecord('In range');
    createTaskRecord('Out of range', '2026-12-01 00:00:00');

    $events = Livewire::test(TaskQueryCalendarWidget::class)->instance()->handleFetchEvents(OCTOBER);

    expect($events)->toHaveCount(1)
        ->and($events[0]['title'])->toBe('In range');
});

it('resolves the clicked record from its model', function () {
    createMeetingRecord();
    $task = createTaskRecord();

    [, $taskEvent] = fetchMixedEvents();

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventClick', $taskEvent)
        ->assertSet('eventRecord', fn (Task $record): bool => $record->is($task));
});

it('refuses an identity that was changed in the browser', function (Closure $tamper) {
    createMeetingRecord();
    createTaskRecord();
    createTaskRecord('Secret');

    [, $taskEvent] = fetchMixedEvents();

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventClick', $tamper($taskEvent))
        ->assertForbidden();
})->with([
    'another key' => [fn (array $event) => array_replace_recursive($event, ['extendedProps' => ['calendarRecord' => ['key' => 2]]])],
    'another model' => [fn (array $event) => array_replace_recursive($event, ['extendedProps' => ['calendarRecord' => ['model' => Meeting::class]]])],
    'no signature' => [fn (array $event) => array_replace_recursive($event, ['extendedProps' => ['calendarRecord' => ['signature' => null]]])],
]);

it('does not accept an identity signed for another calendar', function () {
    $task = createTaskRecord();

    [$taskEvent] = Livewire::test(TaskQueryCalendarWidget::class)->instance()->handleFetchEvents(OCTOBER);

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventClick', $taskEvent)
        ->assertForbidden();
});

it('fails when the record behind an event is gone', function () {
    $task = createTaskRecord();

    [$taskEvent] = fetchMixedEvents();

    $task->delete();

    try {
        $component = Livewire::test(MixedCalendarWidget::class)->call('handleEventClick', $taskEvent);
    } catch (ModelNotFoundException) {
        // Livewire 3 lets the exception through; Livewire 4 turns it into a 404 response.
        expect(true)->toBeTrue();

        return;
    }

    $component->assertNotFound();
});

it('uses the form of the widget for the clicked model', function () {
    $meeting = createMeetingRecord();

    [$meetingEvent] = fetchMixedEvents();

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventDrop', $meetingEvent, $meetingEvent, [], ['days' => 0], null, null)
        ->assertActionMounted('edit')
        ->assertSchemaStateSet(['title' => 'Standup'], 'mountedActionSchema0')
        ->fillForm(['title' => 'Retro'])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form');

    expect($meeting->refresh()->title)->toBe('Retro');
});

it('falls back to the form and infolist of the resource', function () {
    $task = createTaskRecord();

    [$taskEvent] = fetchMixedEvents();

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventClick', $taskEvent)
        ->assertActionMounted('view')
        ->assertSchemaComponentExists('name', 'mountedActionSchema0', fn ($component): bool => $component instanceof TextEntry);

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventDrop', $taskEvent, $taskEvent, [], ['days' => 0], null, null)
        ->assertActionMounted('edit')
        ->assertSchemaComponentExists('due_at', 'mountedActionSchema0', fn ($component): bool => $component instanceof DateTimePicker)
        ->fillForm(['name' => 'Shipped'])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form');

    expect($task->refresh()->name)->toBe('Shipped');
});

it('validates with the form of the resource', function () {
    createTaskRecord();

    [$taskEvent] = fetchMixedEvents();

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventDrop', $taskEvent, $taskEvent, [], ['days' => 0], null, null)
        ->fillForm(['name' => null])
        ->callMountedAction()
        ->assertHasFormErrors(['name' => 'required']);
});

it('creates a record of the model given to the action with the form of its resource', function () {
    Livewire::test(MixedCalendarWidget::class)
        ->mountAction('createTask')
        ->fillForm(['name' => 'New', 'due_at' => '2026-10-10 00:00:00'])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form');

    expect(Task::query()->where('name', 'New')->exists())->toBeTrue();
});

it('labels actions after the clicked model', function () {
    createMeetingRecord();
    createTaskRecord();

    [$meetingEvent, $taskEvent] = fetchMixedEvents();

    $component = Livewire::test(MixedCalendarWidget::class)->call('handleEventClick', $taskEvent);

    expect($component->instance()->getMountedAction()->getModelLabel())->toBe('to-do');

    $component = Livewire::test(MixedCalendarWidget::class)->call('handleEventClick', $meetingEvent);

    expect($component->instance()->getMountedAction()->getModelLabel())->toBe('meeting');
});

it('still resolves events without an identity through the model of the widget', function () {
    $event = Event::create(['title' => 'Legacy', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);

    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->assertSet('eventRecord', fn (Event $record): bool => $record->is($event));
});

it('asks the policy of the clicked model', function () {
    Gate::policy(Meeting::class, EventPolicy::class);
    EventPolicy::$allows = false;

    createMeetingRecord();
    createTaskRecord();

    [$meetingEvent, $taskEvent] = fetchMixedEvents();

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventClick', $meetingEvent)
        ->assertSet('mountedActions', []);

    Livewire::test(MixedCalendarWidget::class)
        ->call('handleEventClick', $taskEvent)
        ->assertActionMounted('view');

    EventPolicy::$allows = true;
});
