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

    it('keeps the end of a timed event that has none', function () {
        $withoutEnd = ['id' => $this->event->getKey(), 'start' => '2026-10-07T09:00:00-03:00', 'end' => null];

        Livewire::test(SavingCalendarWidget::class)
            ->call('handleEventDrop', $withoutEnd, $this->oldEvent, [], ['days' => 1], null, null);

        expect(eventDates($this->event))->toBe(['2026-10-07 12:00:00', '2026-10-06 13:00:00']);
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
