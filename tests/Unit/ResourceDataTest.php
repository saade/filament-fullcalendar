<?php

use Saade\FilamentFullCalendar\Data\ResourceData;

it('only serializes what was set', function () {
    expect(ResourceData::make()->id(1)->title('Room A')->toArray())
        ->toBe(['id' => '1', 'title' => 'Room A']);
});

it('serializes ids as strings, as FullCalendar compares them to the resourceId of events', function () {
    expect(ResourceData::make()->id(7)->parentId(3)->toArray())
        ->toMatchArray(['id' => '7', 'parentId' => '3']);
});

it('serializes children, colors and extra data', function () {
    $resource = ResourceData::make()
        ->id('building')
        ->title('Building')
        ->children([
            ResourceData::make()->id('room')->title('Room'),
            ['id' => 'hall', 'title' => 'Hall'],
        ])
        ->eventColor('red')
        ->eventBackgroundColor('green')
        ->eventBorderColor('blue')
        ->eventTextColor('white')
        ->extendedProps(['capacity' => 10])
        ->extraProperties(['eventOverlap' => false]);

    expect(json_decode(json_encode($resource), associative: true))->toBe([
        'id' => 'building',
        'title' => 'Building',
        'children' => [
            ['id' => 'room', 'title' => 'Room'],
            ['id' => 'hall', 'title' => 'Hall'],
        ],
        'eventColor' => 'red',
        'eventBackgroundColor' => 'green',
        'eventBorderColor' => 'blue',
        'eventTextColor' => 'white',
        'extendedProps' => ['capacity' => 10],
        'eventOverlap' => false,
    ]);
});
