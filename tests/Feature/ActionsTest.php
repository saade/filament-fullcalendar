<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;

beforeEach(function () {
    $this->event = Event::create([
        'title' => 'Meeting',
        'starts_at' => '2026-10-06 09:00:00',
        'ends_at' => '2026-10-06 10:00:00',
    ]);
});

it('opens the view action when an event is clicked', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->assertActionMounted('view');
});

it('opens the edit action when an event is dropped', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call(
            'handleEventDrop',
            ['id' => $this->event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T10:00:00Z'],
            ['id' => $this->event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'],
            [],
            ['days' => 1],
            null,
            null,
        )
        ->assertActionMounted('edit');
});

it('opens the edit action when an event is resized', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call(
            'handleEventResize',
            ['id' => $this->event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T11:00:00Z'],
            ['id' => $this->event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'],
            [],
            ['days' => 0],
            ['milliseconds' => 3600000],
        )
        ->assertActionMounted('edit');
});

it('opens the create action when a date is selected', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertActionMounted('create');
});
