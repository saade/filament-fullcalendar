<?php

use Filament\Facades\Filament;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Team;

it('resolves records of the current tenant only', function () {
    $team = Team::create(['name' => 'Ours']);
    $otherTeam = Team::create(['name' => 'Theirs']);

    $ours = Event::create(['team_id' => $team->getKey(), 'title' => 'Ours', 'starts_at' => now(), 'ends_at' => now()]);
    $theirs = Event::create(['team_id' => $otherTeam->getKey(), 'title' => 'Theirs', 'starts_at' => now(), 'ends_at' => now()]);

    Filament::getDefaultPanel()->tenant(Team::class, ownershipRelationship: 'team');
    Filament::setTenant($team);

    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->resolveEventRecordRouteBinding($ours->getKey())?->is($ours))->toBeTrue()
        ->and($widget->resolveEventRecordRouteBinding($theirs->getKey()))->toBeNull();

    expect(fn () => $widget->onEventClick(['id' => $theirs->getKey()]))
        ->toThrow(ModelNotFoundException::class);
});

it('does not scope records when there is no tenant', function () {
    $event = Event::create(['team_id' => null, 'title' => 'Global', 'starts_at' => now(), 'ends_at' => now()]);

    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->resolveEventRecordRouteBinding($event->getKey())?->is($event))->toBeTrue();
});
