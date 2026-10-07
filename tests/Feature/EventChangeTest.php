<?php

use Illuminate\Support\Facades\Gate;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\ConfirmingCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventPolicy;
use Saade\FilamentFullCalendar\Tests\Fixtures\SavingCalendarWidget;

beforeEach(function () {
    EventPolicy::$allows = true;

    $this->event = Event::create([
        'title' => 'Meeting',
        'starts_at' => '2026-10-06 12:00:00',
        'ends_at' => '2026-10-06 13:00:00',
    ]);

    $this->oldEvent = ['id' => $this->event->getKey(), 'start' => '2026-10-06T09:00:00-03:00', 'end' => '2026-10-06T10:00:00-03:00'];
    $this->newEvent = ['id' => $this->event->getKey(), 'start' => '2026-10-07T09:00:00-03:00', 'end' => '2026-10-07T10:00:00-03:00'];

    $this->drop = [$this->newEvent, $this->oldEvent, [], ['days' => 1], null, null];
});

function eventDates(Event $event): array
{
    $event->refresh();

    return [$event->starts_at->toDateTimeString(), $event->ends_at->toDateTimeString()];
}

describe('with the start and end attributes set', function () {
    it('saves a dropped event in the application timezone without opening a modal', function () {
        Livewire::test(SavingCalendarWidget::class)
            ->call('handleEventDrop', ...$this->drop)
            ->assertSet('mountedActions', [])
            ->assertDispatched('filament-fullcalendar--refresh');

        expect(eventDates($this->event))->toBe(['2026-10-07 12:00:00', '2026-10-07 13:00:00']);
    });

    it('does not ask the calendar to put a saved event back', function () {
        $shouldRevert = Livewire::test(SavingCalendarWidget::class)
            ->instance()
            ->handleEventDrop(...$this->drop);

        expect($shouldRevert)->toBeFalse();
    });

    it('saves a resized event', function () {
        $resized = [...$this->oldEvent, 'end' => '2026-10-06T11:30:00-03:00'];

        Livewire::test(SavingCalendarWidget::class)
            ->call('handleEventResize', $resized, $this->oldEvent, [], ['milliseconds' => 0], ['milliseconds' => 5400000])
            ->assertSet('mountedActions', []);

        expect(eventDates($this->event))->toBe(['2026-10-06 12:00:00', '2026-10-06 14:30:00']);
    });

    it('saves an all-day event from the start of its first day to the end of its last day', function (?string $end, string $expectedEnd) {
        $allDay = ['id' => $this->event->getKey(), 'start' => '2026-10-07', 'end' => $end, 'allDay' => true];

        Livewire::test(SavingCalendarWidget::class)
            ->call('handleEventDrop', $allDay, $this->oldEvent, [], ['days' => 1], null, null);

        expect(eventDates($this->event))->toBe(['2026-10-07 00:00:00', $expectedEnd]);
    })->with([
        'several days, where the calendar reports the day after the last one' => ['2026-10-10', '2026-10-09 23:59:59'],
        'a single day, where the calendar reports no end' => [null, '2026-10-07 23:59:59'],
    ]);

    it('gives a timed event without an end the default duration', function () {
        $withoutEnd = ['id' => $this->event->getKey(), 'start' => '2026-10-07T09:00:00-03:00', 'end' => null];

        Livewire::test(SavingCalendarWidget::class)
            ->call('handleEventDrop', $withoutEnd, $this->oldEvent, [], ['days' => 1], null, null);

        expect(eventDates($this->event))->toBe(['2026-10-07 12:00:00', '2026-10-07 13:00:00']);
    });

    it('puts the event back and saves nothing when the policy denies updating', function () {
        Gate::policy(Event::class, EventPolicy::class);
        EventPolicy::$allows = false;

        $shouldRevert = Livewire::test(SavingCalendarWidget::class)
            ->instance()
            ->handleEventDrop(...$this->drop);

        expect($shouldRevert)->toBeTrue()
            ->and(eventDates($this->event))->toBe(['2026-10-06 12:00:00', '2026-10-06 13:00:00']);
    });
});

describe('when changes have to be confirmed', function () {
    it('opens the edit action with the new dates filled in', function () {
        Livewire::test(ConfirmingCalendarWidget::class)
            ->call('handleEventDrop', ...$this->drop)
            ->assertActionMounted('edit')
            ->assertSchemaStateSet([
                'title' => 'Meeting',
                'starts_at' => '2026-10-07 12:00:00',
                'ends_at' => '2026-10-07 13:00:00',
            ], 'mountedActionSchema0');

        expect(eventDates($this->event))->toBe(['2026-10-06 12:00:00', '2026-10-06 13:00:00']);
    });

    it('saves the new dates when the edit action is submitted', function () {
        Livewire::test(ConfirmingCalendarWidget::class)
            ->call('handleEventDrop', ...$this->drop)
            ->callMountedAction()
            ->assertHasNoFormErrors([], 'form')
            ->assertDispatched('filament-fullcalendar--refresh');

        expect(eventDates($this->event))->toBe(['2026-10-07 12:00:00', '2026-10-07 13:00:00']);
    });

    it('fetches the events again when the edit action is cancelled', function () {
        Livewire::test(ConfirmingCalendarWidget::class)
            ->call('handleEventDrop', ...$this->drop)
            ->assertNotDispatched('filament-fullcalendar--refresh')
            ->call('unmountAction', false)
            ->assertSet('mountedActions', [])
            ->assertDispatched('filament-fullcalendar--refresh');

        expect(eventDates($this->event))->toBe(['2026-10-06 12:00:00', '2026-10-06 13:00:00']);
    });
});

describe('without the start attribute', function () {
    it('opens the edit action with the stored dates', function () {
        Livewire::test(EventCalendarWidget::class)
            ->call('handleEventDrop', ...$this->drop)
            ->assertActionMounted('edit')
            ->assertSchemaStateSet(['starts_at' => '2026-10-06 12:00:00'], 'mountedActionSchema0');
    });

    it('fetches the events again when the edit action is cancelled', function () {
        Livewire::test(EventCalendarWidget::class)
            ->call('handleEventDrop', ...$this->drop)
            ->call('unmountAction', false)
            ->assertDispatched('filament-fullcalendar--refresh');
    });

    it('puts the event back when the edit action cannot be opened', function () {
        Gate::policy(Event::class, EventPolicy::class);
        EventPolicy::$allows = false;

        $shouldRevert = Livewire::test(EventCalendarWidget::class)
            ->instance()
            ->handleEventDrop(...$this->drop);

        expect($shouldRevert)->toBeTrue();
    });
});

it('does not fetch the events again when another action is closed', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->call('unmountAction', false)
        ->assertNotDispatched('filament-fullcalendar--refresh');
});

it('fetches the events once when a dropped event is saved through the edit action', function () {
    $component = Livewire::test(EventCalendarWidget::class)
        ->call('handleEventDrop', ...$this->drop)
        ->callMountedAction();

    $refreshes = collect(data_get($component->effects, 'dispatches', []))
        ->where('name', 'filament-fullcalendar--refresh');

    expect($refreshes)->toHaveCount(1);
});

it('gives an all-day event dragged to a time slot the default duration', function () {
    $event = Event::create(['title' => 'Offsite', 'starts_at' => '2026-10-06 00:00:00', 'ends_at' => '2026-10-08 23:59:59']);

    Livewire::test(SavingCalendarWidget::class)
        ->call(
            'handleEventDrop',
            ['id' => $event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => null, 'allDay' => false],
            ['id' => $event->getKey(), 'start' => '2026-10-06', 'end' => '2026-10-09', 'allDay' => true],
            [],
            ['days' => 1, 'milliseconds' => 32400000],
            null,
            null,
        )
        ->assertReturned(false);

    expect($event->refresh())
        ->starts_at->toDateTimeString()->toBe('2026-10-07 09:00:00')
        ->ends_at->toDateTimeString()->toBe('2026-10-07 10:00:00');
});

it('reads the default duration of a timed event from the config', function (mixed $duration, string $end) {
    $event = Event::create(['title' => 'Offsite', 'starts_at' => '2026-10-06 00:00:00', 'ends_at' => '2026-10-06 23:59:59']);

    filament('filament-fullcalendar')->config(['defaultTimedEventDuration' => $duration]);

    Livewire::test(SavingCalendarWidget::class)
        ->call(
            'handleEventDrop',
            ['id' => $event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => null, 'allDay' => false],
            ['id' => $event->getKey(), 'start' => '2026-10-06', 'end' => '2026-10-07', 'allDay' => true],
            [],
            [],
            null,
            null,
        );

    filament('filament-fullcalendar')->config([]);

    expect($event->refresh()->ends_at->toDateTimeString())->toBe($end);
})->with([
    'hours and minutes' => ['00:30', '2026-10-07 09:30:00'],
    'with seconds' => ['02:15:00', '2026-10-07 11:15:00'],
    'an object' => [['hours' => 1, 'minutes' => 45], '2026-10-07 10:45:00'],
    'milliseconds' => [5400000, '2026-10-07 10:30:00'],
]);

it('keeps the end of a timed event that has one', function () {
    $event = Event::create(['title' => 'Meeting', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);

    Livewire::test(SavingCalendarWidget::class)
        ->call(
            'handleEventDrop',
            ['id' => $event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T11:30:00Z', 'allDay' => false],
            ['id' => $event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z', 'allDay' => false],
            [],
            ['days' => 1],
            null,
            null,
        );

    expect($event->refresh()->ends_at->toDateTimeString())->toBe('2026-10-07 11:30:00');
});

it('does not write the dates of one occurrence to the record of a recurring event', function (string $method, array $deltas) {
    $event = Event::create(['title' => 'Standup', 'starts_at' => '2026-10-05 10:00:00', 'ends_at' => '2026-10-05 11:00:00']);

    $occurrence = ['id' => $event->getKey(), 'start' => '2026-10-08T10:00:00Z', 'end' => '2026-10-08T11:00:00Z', 'isRecurring' => true];
    $before = ['id' => $event->getKey(), 'start' => '2026-10-07T10:00:00Z', 'end' => '2026-10-07T11:00:00Z', 'isRecurring' => true];

    Livewire::test(SavingCalendarWidget::class)
        ->call($method, $occurrence, $before, [], ...$deltas)
        ->assertReturned(true)
        ->assertSet('mountedActions', []);

    expect($event->refresh())
        ->starts_at->toDateTimeString()->toBe('2026-10-05 10:00:00')
        ->ends_at->toDateTimeString()->toBe('2026-10-05 11:00:00');
})->with([
    'drop' => ['handleEventDrop', [['days' => 1], null, null]],
    'resize' => ['handleEventResize', [['days' => 0], ['days' => 1]]],
]);

it('still opens the edit action for a recurring event when the widget does not save dates itself', function () {
    $event = Event::create(['title' => 'Standup', 'starts_at' => '2026-10-05 10:00:00', 'ends_at' => '2026-10-05 11:00:00']);

    $occurrence = ['id' => $event->getKey(), 'start' => '2026-10-08T10:00:00Z', 'end' => '2026-10-08T11:00:00Z', 'isRecurring' => true];

    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventDrop', $occurrence, $occurrence, [], ['days' => 1], null, null)
        ->assertActionMounted('edit')
        ->assertSchemaStateSet(['starts_at' => '2026-10-05 10:00:00'], 'mountedActionSchema0');
});

it('tells the handlers whether an event is an occurrence of a recurring one', function () {
    $info = Saade\FilamentFullCalendar\Data\EventInfo::fromArray(['id' => 1, 'start' => '2026-10-08T10:00:00Z', 'isRecurring' => true], 'UTC');

    expect($info->isRecurring)->toBeTrue()
        ->and(Saade\FilamentFullCalendar\Data\EventInfo::fromArray(['id' => 1, 'start' => '2026-10-08T10:00:00Z'], 'UTC')->isRecurring)->toBeFalse();
});
