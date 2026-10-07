<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Data\EventInfo;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\SavingCalendarWidget;

function widgetEvent(): Event
{
    return Event::create(['title' => 'Meeting', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);
}

it('does not look up an event from another source in the model of the widget', function (?string $source) {
    $event = widgetEvent();

    $foreign = ['id' => $event->getKey(), 'title' => 'Holiday', 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T10:00:00Z', 'source' => $source];

    Livewire::test(SavingCalendarWidget::class)
        ->call('handleEventClick', $foreign)
        ->assertSet('eventRecord', null)
        ->assertSet('mountedActions', [])
        ->call('handleEventDrop', $foreign, $foreign, [], ['days' => 1], null, null)
        ->assertReturned(true);

    expect($event->refresh()->starts_at->toDateTimeString())->toBe('2026-10-06 09:00:00');
})->with([
    'a feed with an id' => ['holidays'],
    'a feed without an id, or an event added in the browser' => [null],
]);

it('does not fail on an event from another source whose id matches no record', function () {
    Livewire::test(SavingCalendarWidget::class)
        ->call('handleEventClick', ['id' => 'abc123@google.com', 'title' => 'Holiday', 'start' => '2026-10-07', 'source' => 'holidays'])
        ->assertOk()
        ->assertSet('mountedActions', []);
});

it('looks up an event of its own source, and one that does not say where it is from', function (array $extra) {
    $event = widgetEvent();

    Livewire::test(SavingCalendarWidget::class)
        ->call('handleEventClick', ['id' => $event->getKey(), ...$extra])
        ->assertSet('eventRecord', fn (Event $record): bool => $record->is($event))
        ->assertActionMounted('view');
})->with([
    'its own source' => [['source' => 'filament-fullcalendar']],
    'no source given' => [[]],
]);

it('gives the handlers the source and the resources of an event', function () {
    $info = EventInfo::fromArray(['id' => 1, 'start' => '2026-10-07', 'source' => 'holidays', 'resourceIds' => ['a', 'b']], 'UTC');

    expect($info->source)->toBe('holidays')
        ->and($info->resourceIds)->toBe(['a', 'b'])
        ->and(EventInfo::fromArray(['id' => 1, 'start' => '2026-10-07'], 'UTC')->resourceIds)->toBe([]);
});
