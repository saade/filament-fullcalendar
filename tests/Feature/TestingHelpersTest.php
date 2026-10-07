<?php

use Illuminate\Support\Carbon;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Meeting;
use Saade\FilamentFullCalendar\Tests\Fixtures\MixedCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\PrefilledCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\ResourceCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Task;
use Saade\FilamentFullCalendar\Tests\Fixtures\Team;

beforeEach(function () {
    Carbon::setTestNow('2026-10-06 12:00:00');
});

function helperEvent(string $title = 'Meeting'): Event
{
    return Event::create(['title' => $title, 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);
}

it('asserts on the events a calendar shows', function () {
    $meeting = Meeting::create(['title' => 'Standup', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);
    $task = Task::create(['name' => 'Ship it', 'due_at' => '2026-10-08 00:00:00']);

    Livewire::test(MixedCalendarWidget::class)
        ->assertCalendarEventCount(3)
        ->assertCalendarHasEvent('Standup')
        ->assertCalendarHasEvent($task)
        ->assertCalendarHasEvent(['title' => 'Standup', 'extendedProps.kind' => 'meeting'])
        ->assertCalendarHasEvent(fn (array $event): bool => $event['id'] === 'holiday')
        ->assertCalendarDoesNotHaveEvent('Retro')
        ->assertCalendarDoesNotHaveEvent(fn (array $event): bool => ($event['allDay'] ?? false) && $event['title'] === 'Standup');

    expect(fn () => Livewire::test(MixedCalendarWidget::class)->assertCalendarHasEvent('Retro'))
        ->toThrow(PHPUnit\Framework\ExpectationFailedException::class, 'the calendar shows the event');
});

it('clicks an event by record, by id or as the browser sends it', function (Closure $event) {
    $record = helperEvent();

    Livewire::test(EventCalendarWidget::class)
        ->clickCalendarEvent($event($record))
        ->assertActionMounted('view')
        ->assertSet('eventRecord', fn (Event $eventRecord): bool => $eventRecord->is($record));
})->with([
    'record' => [fn (Event $record) => $record],
    'id' => [fn (Event $record) => $record->getKey()],
    'array' => [fn (Event $record) => ['id' => $record->getKey(), 'title' => 'Meeting']],
]);

it('clicks the event of a model that describes its own event', function () {
    Meeting::create(['title' => 'Standup', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);
    $task = Task::create(['name' => 'Ship it', 'due_at' => '2026-10-08 00:00:00']);

    Livewire::test(MixedCalendarWidget::class)
        ->clickCalendarEvent($task)
        ->assertSet('eventRecord', fn (Task $record): bool => $record->is($task));
});

it('drags an event to new dates and another resource', function () {
    $from = Team::create(['name' => 'Room A']);
    $to = Team::create(['name' => 'Room B']);
    $event = Event::create(['team_id' => $from->getKey(), 'title' => 'Meeting', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);

    Livewire::test(ResourceCalendarWidget::class)
        ->dropCalendarEvent($event, Carbon::parse('2026-10-07 14:00:00'), Carbon::parse('2026-10-07 15:00:00'), resource: $to->getKey())
        ->assertReturned(false);

    expect($event->refresh())
        ->starts_at->toDateTimeString()->toBe('2026-10-07 14:00:00')
        ->team_id->toBe($to->getKey());
});

it('resizes an event', function () {
    $event = helperEvent();

    Livewire::test(ResourceCalendarWidget::class)
        ->resizeCalendarEvent($event, '2026-10-06T09:00:00Z', '2026-10-06T12:00:00Z')
        ->assertReturned(false);

    expect($event->refresh()->ends_at->toDateTimeString())->toBe('2026-10-06 12:00:00');
});

it('selects whole days by their first and last day', function () {
    Livewire::test(PrefilledCalendarWidget::class)
        ->selectCalendarDates('2026-10-06', '2026-10-08')
        ->assertActionMounted('create')
        ->assertSchemaStateSet(['starts_at' => '2026-10-06 00:00:00', 'ends_at' => '2026-10-08 23:59:59'], 'mountedActionSchema0');
});

it('selects a time range in a resource', function () {
    Livewire::test(PrefilledCalendarWidget::class)
        ->selectCalendarDates(Carbon::parse('2026-10-06 09:00:00'), Carbon::parse('2026-10-06 10:30:00'), allDay: false, resource: 7)
        ->assertSchemaStateSet(['team_id' => '7', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:30:00'], 'mountedActionSchema0');
});

it('clicks a date', function () {
    Livewire::test(PrefilledCalendarWidget::class)
        ->clickCalendarDate('2026-10-06')
        ->assertActionMounted('create')
        ->assertSchemaStateSet(['starts_at' => '2026-10-06 00:00:00', 'ends_at' => '2026-10-06 23:59:59'], 'mountedActionSchema0');
});
