<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Team;
use Saade\FilamentFullCalendar\Tests\Fixtures\TeamCalendarWidget;

function createTeamEvent(Team $team, string $title = 'Meeting'): Event
{
    return Event::create([
        'team_id' => $team->getKey(),
        'title' => $title,
        'starts_at' => '2026-10-06 09:00:00',
        'ends_at' => '2026-10-06 10:00:00',
    ]);
}

it('has no event record before an event was clicked', function () {
    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->eventRecord)->toBeNull()
        ->and($widget->getEventRecord())->toBeNull();
});

it('keeps the clicked event in its own property', function () {
    $event = createTeamEvent(Team::create(['name' => 'Ours']));

    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->assertSet('eventRecord', fn (Event $eventRecord): bool => $eventRecord->is($event));
});

it('leaves the record of a resource page alone when an event is clicked, dropped or resized', function () {
    $team = Team::create(['name' => 'Ours']);
    $event = createTeamEvent($team);

    $newEvent = ['id' => $event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T10:00:00Z'];
    $oldEvent = ['id' => $event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'];

    Livewire::test(TeamCalendarWidget::class, ['record' => $team])
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->assertSet('record', fn (Team $record): bool => $record->is($team))
        ->assertSet('eventRecord', fn (Event $eventRecord): bool => $eventRecord->is($event))
        ->call('handleEventDrop', $newEvent, $oldEvent, [], ['days' => 1], null, null)
        ->assertSet('record', fn (Team $record): bool => $record->is($team))
        ->call('handleEventResize', $newEvent, $oldEvent, [], ['days' => 0], ['days' => 1])
        ->assertSet('record', fn (Team $record): bool => $record->is($team));
});

it('can still fetch events for the record of a resource page after an event was clicked', function () {
    $team = Team::create(['name' => 'Ours']);
    $event = createTeamEvent($team, 'Ours');
    createTeamEvent(Team::create(['name' => 'Theirs']), 'Theirs');

    $info = ['start' => '2026-10-01T00:00:00Z', 'end' => '2026-11-01T00:00:00Z', 'timezone' => 'UTC'];

    $component = Livewire::test(TeamCalendarWidget::class, ['record' => $team])
        ->call('handleEventClick', ['id' => $event->getKey()]);

    expect($component->instance()->handleFetchEvents($info))
        ->toHaveCount(1)
        ->and($component->instance()->handleFetchEvents($info)[0]['title'])->toBe('Ours');
});

it('clears the event record after deleting it', function () {
    $event = createTeamEvent(Team::create(['name' => 'Ours']));

    Livewire::test(EventCalendarWidget::class)
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->callAction('delete')
        ->assertSet('eventRecord', null);

    expect(Event::find($event->getKey()))->toBeNull();
});
