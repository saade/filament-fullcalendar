<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\ResourceCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Team;

it('has no resources unless fetchResources() returns some', function () {
    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->getInitialResources())->toBeFalse()
        ->and($widget->handleFetchResources())->toBe([]);
});

it('sends the resources with the page', function () {
    $team = Team::create(['name' => 'Room A']);

    $component = Livewire::test(ResourceCalendarWidget::class);

    expect($component->instance()->getInitialResources())->toBe([
        ['id' => (string) $team->getKey(), 'title' => 'Room A'],
        ['id' => 'range', 'title' => 'No range'],
    ]);

    $component->assertSee('Room A');
});

it('lets the browser fetch the resources when they depend on the visible range', function () {
    Team::create(['name' => 'Room A']);

    $component = Livewire::test(ResourceCalendarWidget::class, ['shouldRefetchResourcesOnNavigate' => true]);

    expect($component->instance()->getInitialResources())->toBeTrue();

    $component->assertDontSee('Room A');

    $resources = $component->instance()->handleFetchResources([
        'start' => '2026-10-01T00:00:00-03:00',
        'end' => '2026-11-01T00:00:00-03:00',
        'timezone' => 'America/Sao_Paulo',
    ]);

    expect($resources[1])->toBe(['id' => 'range', 'title' => '2026-10-01']);
});

it('fetches the resources again on its own calendar', function () {
    $component = Livewire::test(ResourceCalendarWidget::class);

    $component
        ->call('refreshResources')
        ->assertDispatched('filament-fullcalendar--refresh-resources', calendar: $component->instance()->getId());
});

it('saves the resource an event was dragged to', function () {
    $from = Team::create(['name' => 'Room A']);
    $to = Team::create(['name' => 'Room B']);

    $event = Event::create(['team_id' => $from->getKey(), 'title' => 'Meeting', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);

    $payload = ['id' => $event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'];

    Livewire::test(ResourceCalendarWidget::class)
        ->call('handleEventDrop', $payload, $payload, [], ['days' => 0], ['id' => (string) $from->getKey()], ['id' => (string) $to->getKey()])
        ->assertSet('mountedActions', []);

    expect($event->refresh()->team_id)->toBe($to->getKey());
});

it('keeps the resource of an event that was only moved in time', function () {
    $team = Team::create(['name' => 'Room A']);

    $event = Event::create(['team_id' => $team->getKey(), 'title' => 'Meeting', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);

    Livewire::test(ResourceCalendarWidget::class)
        ->call(
            'handleEventDrop',
            ['id' => $event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T10:00:00Z'],
            ['id' => $event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'],
            [],
            ['days' => 1],
            null,
            null,
        );

    expect($event->refresh())
        ->team_id->toBe($team->getKey())
        ->starts_at->toDateString()->toBe('2026-10-07');
});
