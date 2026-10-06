<?php

use Illuminate\Support\Facades\Gate;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventPolicy;
use Saade\FilamentFullCalendar\Tests\Fixtures\SavingCalendarWidget;

beforeEach(function () {
    EventPolicy::$allows = true;

    $this->event = Event::create([
        'title' => 'Meeting',
        'starts_at' => '2026-10-06 09:00:00',
        'ends_at' => '2026-10-06 10:00:00',
    ]);
});

it('renders without any panel', function () {
    $component = Livewire::test(EventCalendarWidget::class)
        ->assertOk()
        ->assertSeeHtml('filament-fullcalendar');

    expect($component->instance()->getTimezone())->toBe('UTC');
});

it('opens and runs the actions without any panel', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->assertActionMounted('view')
        ->callAction('edit', ['title' => 'Renamed']);

    expect($this->event->refresh()->title)->toBe('Renamed');
});

it('follows the policy without any panel', function () {
    Gate::policy(Event::class, EventPolicy::class);
    EventPolicy::$allows = false;

    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->assertSet('mountedActions', []);

    $shouldRevert = Livewire::test(SavingCalendarWidget::class)
        ->instance()
        ->handleEventDrop(
            ['id' => $this->event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T10:00:00Z'],
            ['id' => $this->event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'],
            [],
            ['days' => 1],
        );

    expect($shouldRevert)->toBeTrue();
});
