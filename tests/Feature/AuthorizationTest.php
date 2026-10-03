<?php

use Illuminate\Support\Facades\Gate;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventPolicy;

function createEvent(array $attributes = []): Event
{
    return Event::create([
        'title' => 'Meeting',
        'starts_at' => '2026-10-06 09:00:00',
        'ends_at' => '2026-10-06 10:00:00',
        ...$attributes,
    ]);
}

function dropPayload(Event $event): array
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

beforeEach(function () {
    EventPolicy::$allows = true;
});

it('lets every action through when the model has no policy', function () {
    $event = createEvent();

    Livewire::test(EventCalendarWidget::class)
        ->call('onEventClick', ['id' => $event->getKey()])
        ->assertActionMounted('view');

    Livewire::test(EventCalendarWidget::class)
        ->call('onEventDrop', ...dropPayload($event))
        ->assertActionMounted('edit');

    Livewire::test(EventCalendarWidget::class)
        ->call('onDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertActionMounted('create');
});

it('lets every action through when the policy allows it', function () {
    Gate::policy(Event::class, EventPolicy::class);

    $event = createEvent();

    Livewire::test(EventCalendarWidget::class)
        ->call('onEventClick', ['id' => $event->getKey()])
        ->assertActionMounted('view');

    Livewire::test(EventCalendarWidget::class)
        ->call('onEventDrop', ...dropPayload($event))
        ->assertActionMounted('edit');
});

it('does not open the view modal when the policy denies viewing', function () {
    Gate::policy(Event::class, EventPolicy::class);
    EventPolicy::$allows = false;

    $event = createEvent();

    Livewire::test(EventCalendarWidget::class)
        ->call('onEventClick', ['id' => $event->getKey()])
        ->assertSet('mountedActions', []);
});

it('does not open the edit modal on drop or resize when the policy denies updating', function () {
    Gate::policy(Event::class, EventPolicy::class);
    EventPolicy::$allows = false;

    $event = createEvent();

    Livewire::test(EventCalendarWidget::class)
        ->call('onEventDrop', ...dropPayload($event))
        ->assertSet('mountedActions', []);

    [$newEvent, $oldEvent] = dropPayload($event);

    Livewire::test(EventCalendarWidget::class)
        ->call('onEventResize', $newEvent, $oldEvent, [], ['days' => 0], ['days' => 1])
        ->assertSet('mountedActions', []);
});

it('does not open the create modal when the policy denies creating', function () {
    Gate::policy(Event::class, EventPolicy::class);
    EventPolicy::$allows = false;

    Livewire::test(EventCalendarWidget::class)
        ->call('onDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertSet('mountedActions', []);
});

it('hides the create header action when the policy denies creating', function () {
    Gate::policy(Event::class, EventPolicy::class);
    EventPolicy::$allows = false;

    Livewire::test(EventCalendarWidget::class)
        ->assertActionHidden('create');
});
