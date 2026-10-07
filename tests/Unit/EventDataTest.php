<?php

use Illuminate\Support\Carbon;
use Saade\FilamentFullCalendar\Data\EventData;

it('serialises dates as ISO 8601 strings', function () {
    $event = EventData::make()
        ->id(1)
        ->title('Meeting')
        ->start(new DateTime('2026-10-06 09:00:00', new DateTimeZone('Europe/Zurich')))
        ->end(Carbon::parse('2026-10-06 10:00:00', 'UTC'));

    expect($event->toArray())->toMatchArray([
        'start' => '2026-10-06T09:00:00+02:00',
        'end' => '2026-10-06T10:00:00+00:00',
    ]);
});

it('keeps string dates untouched', function () {
    $event = EventData::make()->id(1)->title('Day off')->start('2026-10-06')->end('2026-10-08');

    expect($event->toArray())->toMatchArray([
        'start' => '2026-10-06',
        'end' => '2026-10-08',
    ]);
});

it('can be json encoded without calling toArray', function () {
    $events = [EventData::make()->id(7)->title('Meeting')->start('2026-10-06')];

    expect(json_decode(json_encode($events), true))->toBe([
        ['id' => 7, 'start' => '2026-10-06', 'end' => null, 'title' => 'Meeting'],
    ]);
});

it('does not require a start for recurring events', function () {
    $event = EventData::make()->id(1)->title('Standup')->extraProperties(['rrule' => ['freq' => 'weekly']]);

    expect($event->toArray())->toBe([
        'id' => 1,
        'end' => null,
        'title' => 'Standup',
        'rrule' => ['freq' => 'weekly'],
    ]);
});

it('does not require an id or a title', function () {
    $event = EventData::make()->start('2026-10-06')->extraProperties(['display' => 'background']);

    expect($event->toArray())->toBe([
        'start' => '2026-10-06',
        'end' => null,
        'display' => 'background',
    ]);
});

it('puts the tooltip with the extended props', function () {
    expect(EventData::make()->tooltip('Room 2')->toArray()['extendedProps'])
        ->toBe(['tooltip' => 'Room 2']);

    expect(EventData::make()->extendedProps(['kind' => 'review'])->tooltip(['Room 2', '<b>Ada</b>'])->toArray()['extendedProps'])
        ->toBe(['kind' => 'review', 'tooltip' => ['Room 2', '<b>Ada</b>']]);
});

it('marks a tooltip as HTML only when asked', function () {
    expect(EventData::make()->tooltip('<b>Room 2</b>', html: true)->toArray()['extendedProps'])
        ->toBe(['tooltip' => '<b>Room 2</b>', 'isTooltipHtml' => true]);
});

it('says whether an event is all-day only when told', function () {
    expect(EventData::make()->start('2026-10-06')->toArray())->not->toHaveKey('allDay')
        ->and(EventData::make()->start('2026-10-06')->allDay()->toArray()['allDay'])->toBeTrue()
        ->and(EventData::make()->start('2026-10-06')->allDay(false)->toArray()['allDay'])->toBeFalse();
});

it('marks a title as HTML only when asked', function () {
    expect(EventData::make()->title('<b>Standup</b>')->toArray())->not->toHaveKey('extendedProps');

    expect(EventData::make()->title('<b>Standup</b>', html: true)->extendedProps(['kind' => 'daily'])->toArray())
        ->toMatchArray(['title' => '<b>Standup</b>', 'extendedProps' => ['kind' => 'daily', 'isTitleHtml' => true]]);
});
