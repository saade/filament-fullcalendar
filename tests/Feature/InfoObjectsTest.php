<?php

use Carbon\CarbonImmutable;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Data\DateSelectInfo;
use Saade\FilamentFullCalendar\Data\EventClickInfo;
use Saade\FilamentFullCalendar\Data\EventDropInfo;
use Saade\FilamentFullCalendar\Data\EventResizeInfo;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\RecordingCalendarWidget;

beforeEach(function () {
    RecordingCalendarWidget::$received = [];

    $this->event = Event::create([
        'title' => 'Meeting',
        'starts_at' => '2026-10-06 09:00:00',
        'ends_at' => '2026-10-06 10:00:00',
    ]);

    $this->newEvent = [
        'id' => (string) $this->event->getKey(),
        'title' => 'Meeting',
        'start' => '2026-10-07T09:00:00-03:00',
        'end' => '2026-10-07T10:00:00-03:00',
        'extendedProps' => ['status' => 'confirmed'],
    ];

    $this->oldEvent = [
        'id' => (string) $this->event->getKey(),
        'title' => 'Meeting',
        'start' => '2026-10-06T09:00:00-03:00',
        'end' => '2026-10-06T10:00:00-03:00',
    ];
});

it('passes the visible range to fetchEvents() in the application timezone', function () {
    $events = Livewire::test(RecordingCalendarWidget::class)
        ->instance()
        ->handleFetchEvents(['start' => '2026-10-01T00:00:00-03:00', 'end' => '2026-11-01T00:00:00-03:00', 'timezone' => 'America/Sao_Paulo']);

    $info = RecordingCalendarWidget::$received['fetch'];

    expect($info)->toBeInstanceOf(FetchInfo::class)
        ->and($info->start->toIso8601String())->toBe('2026-10-01T03:00:00+00:00')
        ->and($info->end->toIso8601String())->toBe('2026-11-01T03:00:00+00:00')
        ->and($info->timezone)->toBe('America/Sao_Paulo')
        ->and($info['start'])->toBe('2026-10-01T00:00:00-03:00')
        ->and($events)->toBe([['id' => $this->event->getKey(), 'title' => 'Meeting']]);
});

it('finds events that overlap the edges of the visible range', function () {
    Event::query()->delete();

    Event::create(['title' => 'Starts before', 'starts_at' => '2026-09-28 00:00:00', 'ends_at' => '2026-10-02 00:00:00']);
    Event::create(['title' => 'Ends after', 'starts_at' => '2026-10-30 00:00:00', 'ends_at' => '2026-11-03 00:00:00']);
    Event::create(['title' => 'Before', 'starts_at' => '2026-09-01 00:00:00', 'ends_at' => '2026-09-02 00:00:00']);
    Event::create(['title' => 'After', 'starts_at' => '2026-11-02 00:00:00', 'ends_at' => '2026-11-03 00:00:00']);

    $info = FetchInfo::fromArray(['start' => '2026-10-01T00:00:00Z', 'end' => '2026-11-01T00:00:00Z'], 'UTC');

    expect($info->overlapping(Event::query(), 'starts_at', 'ends_at')->pluck('title')->all())
        ->toBe(['Starts before', 'Ends after']);
});

it('passes the clicked event to onEventClick()', function () {
    Livewire::test(RecordingCalendarWidget::class)
        ->call('handleEventClick', $this->newEvent)
        ->assertSet('eventRecord', fn (Event $record): bool => $record->is($this->event));

    $info = RecordingCalendarWidget::$received['click'];

    expect($info)->toBeInstanceOf(EventClickInfo::class)
        ->and($info->event->id)->toBe((string) $this->event->getKey())
        ->and($info->event->title)->toBe('Meeting')
        ->and($info->event->start)->toBeInstanceOf(CarbonImmutable::class)
        ->and($info->event->start->toIso8601String())->toBe('2026-10-07T09:00:00-03:00')
        ->and($info->event->extendedProps)->toBe(['status' => 'confirmed'])
        ->and($info->event['start'])->toBe('2026-10-07T09:00:00-03:00');
});

it('passes the move to onEventDrop() and returns whether to revert it', function () {
    $resource = ['id' => 'room-b'];

    $shouldRevert = Livewire::test(RecordingCalendarWidget::class)
        ->instance()
        ->handleEventDrop($this->newEvent, $this->oldEvent, [$this->oldEvent], ['years' => 0, 'months' => 0, 'days' => 1, 'milliseconds' => 1800000], ['id' => 'room-a'], $resource);

    $info = RecordingCalendarWidget::$received['drop'];

    expect($shouldRevert)->toBeTrue()
        ->and($info)->toBeInstanceOf(EventDropInfo::class)
        ->and($info->event->start->toIso8601String())->toBe('2026-10-07T09:00:00-03:00')
        ->and($info->oldEvent->start->toIso8601String())->toBe('2026-10-06T09:00:00-03:00')
        ->and($info->relatedEvents)->toHaveCount(1)
        ->and($info->delta->totalMinutes)->toEqual(24 * 60 + 30)
        ->and($info->oldResource)->toBe(['id' => 'room-a'])
        ->and($info->newResource)->toBe($resource);
});

it('passes the change to onEventResize()', function () {
    $shouldRevert = Livewire::test(RecordingCalendarWidget::class)
        ->instance()
        ->handleEventResize($this->newEvent, $this->oldEvent, [], ['milliseconds' => 0], ['milliseconds' => 3600000]);

    $info = RecordingCalendarWidget::$received['resize'];

    expect($shouldRevert)->toBeFalse()
        ->and($info)->toBeInstanceOf(EventResizeInfo::class)
        ->and($info->startDelta->totalSeconds)->toEqual(0)
        ->and($info->endDelta->totalHours)->toEqual(1);
});

it('passes the selection to onDateSelect() in the calendar timezone', function () {
    Livewire::test(RecordingCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-08', true, ['type' => 'dayGridMonth'], null);

    $info = RecordingCalendarWidget::$received['select'];

    expect($info)->toBeInstanceOf(DateSelectInfo::class)
        ->and($info->start->toIso8601String())->toBe('2026-10-06T00:00:00-03:00')
        ->and($info->end->toIso8601String())->toBe('2026-10-07T23:59:59-03:00')
        ->and($info->allDay)->toBeTrue()
        ->and($info->view)->toBe(['type' => 'dayGridMonth']);
});

it('keeps the action arguments as plain arrays', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventDrop', $this->newEvent, $this->oldEvent, [], ['days' => 1], null, null)
        ->assertActionMounted('edit')
        ->assertSet('mountedActions.0.arguments.type', 'drop')
        ->assertSet('mountedActions.0.arguments.event.start', '2026-10-07T09:00:00-03:00')
        ->assertSet('mountedActions.0.arguments.oldEvent.start', '2026-10-06T09:00:00-03:00');
});

it('explains what is wrong when a clicked event has no id', function () {
    Livewire::test(EventCalendarWidget::class)
        ->instance()
        ->handleEventClick(['title' => 'Meeting', 'start' => '2026-10-07']);
})->throws(LogicException::class, 'Return an [id] for each event from fetchEvents().');
