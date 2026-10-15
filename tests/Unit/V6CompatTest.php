<?php

use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Data\EventSourceData;
use Saade\FilamentFullCalendar\Data\ResourceData;
use Saade\FilamentFullCalendar\Support\V6Compat\V6CompatOptions;

it('passes the deprecated color methods on to color() and contrastColor()', function () {
    expect(EventData::make()->backgroundColor('#fde047')->borderColor('#000')->textColor('#111')->toArray())
        ->toMatchArray(['color' => V6CompatOptions::palette('#fde047'), 'contrastColor' => '#111'])
        ->and(EventData::make()->color('success')->borderColor('#000')->toArray())->toMatchArray(['color' => 'success'])
        ->and(EventSourceData::googleCalendar('holidays')->borderColor('#000')->toArray())->toMatchArray(['color' => V6CompatOptions::palette('#000')])
        ->and(ResourceData::make()->eventBorderColor('teal')->eventTextColor('white')->toArray())
        ->toBe(['eventColor' => V6CompatOptions::palette('teal'), 'eventContrastColor' => 'white']);
});

it('renames the classes of an event', function () {
    expect(V6CompatOptions::event(['title' => 'Meeting', 'classNames' => ['a', 'b']]))
        ->toBe(['title' => 'Meeting', 'className' => 'a b']);
});

it('lets a new name win over a legacy one', function () {
    expect(V6CompatOptions::event(['classNames' => 'a', 'className' => 'b']))->toBe(['className' => 'b']);
});

it('leaves an event with the new names alone', function () {
    $event = ['title' => 'Meeting', 'color' => 'success', 'contrastColor' => '#000', 'className' => 'a'];

    expect(V6CompatOptions::event($event))->toBe($event);
});

it('turns the CSS colors of an event into a palette of one color and a contrast color', function () {
    $event = V6CompatOptions::event(['backgroundColor' => '#fde047', 'borderColor' => '#000', 'textColor' => '#111']);

    expect($event)->toHaveKeys(['color', 'contrastColor'])->not->toHaveKeys(['backgroundColor', 'borderColor', 'textColor'])
        ->and(array_unique($event['color']))->toBe([50 => '#fde047'])
        ->and($event['contrastColor'])->toBe('#111');
});

it('keeps a Filament color over the CSS colors of an event', function () {
    expect(V6CompatOptions::event(['color' => 'success', 'borderColor' => '#000']))->toBe(['color' => 'success']);
});

it('turns the CSS colors of a resource into its event colors', function () {
    $resource = V6CompatOptions::resource(['id' => 'a', 'eventBorderColor' => 'teal', 'eventTextColor' => 'white']);

    expect(array_unique($resource['eventColor']))->toBe([50 => 'teal'])
        ->and($resource['eventContrastColor'])->toBe('white')
        ->and($resource)->not->toHaveKeys(['eventBorderColor', 'eventTextColor']);
});

it('renames the event classes of a resource and of its children', function () {
    expect(V6CompatOptions::resource([
        'id' => 'a',
        'eventClassNames' => 'w',
        'children' => [['id' => 'b', 'eventClassNames' => ['x', 'y']]],
    ]))->toBe([
        'id' => 'a',
        'children' => [['id' => 'b', 'eventClass' => 'x y']],
        'eventClass' => 'w',
    ]);
});

it('renames options and moves button texts to the buttons', function () {
    expect(V6CompatOptions::config([
        'initialView' => 'dayGridMonth',
        'customButtons' => ['mine' => ['text' => 'Mine']],
        'buttonText' => ['today' => 'Now'],
        'slotLabelFormat' => ['hour' => 'numeric'],
        'resourceAreaWidth' => '20%',
        'views' => [
            'dayGridThreeDay' => ['type' => 'dayGrid', 'duration' => ['days' => 3], 'buttonText' => '3 days', 'classNames' => ['wide']],
        ],
    ]))->toBe([
        'initialView' => 'dayGridMonth',
        'views' => [
            'dayGridThreeDay' => ['type' => 'dayGrid', 'duration' => ['days' => 3], 'className' => 'wide'],
        ],
        'buttons' => [
            'mine' => ['text' => 'Mine'],
            'today' => ['text' => 'Now'],
            'dayGridThreeDay' => ['text' => '3 days'],
        ],
        'slotHeaderFormat' => ['hour' => 'numeric'],
        'resourceColumnsWidth' => '20%',
    ]);
});

it('moves the button texts of a unit to its text option and the button hints to the buttons', function () {
    expect(V6CompatOptions::config([
        'buttonText' => ['month' => 'Mois', 'week' => 'Semaine', 'prev' => '<'],
        'buttonHints' => ['today' => 'This $0'],
    ]))->toBe([
        'monthText' => 'Mois',
        'weekTextLong' => 'Semaine',
        'buttons' => [
            'prev' => ['text' => '<'],
            'today' => ['hint' => 'This $0'],
        ],
    ]);
});

it('renames callbacks', function () {
    expect(V6CompatOptions::callbacks(['eventClassNames' => 'a', 'dayCellContent' => 'b', 'selectAllow' => 'c'], new stdClass))
        ->toBe(['selectAllow' => 'c', 'eventClass' => 'a', 'dayCellTopContent' => 'b']);
});

it('passes on the eventClassNames method of a widget as eventClass', function () {
    $widget = new class
    {
        public function eventClassNames(): string
        {
            return "() => 'legacy';";
        }
    };

    expect(V6CompatOptions::callbacks([], $widget))->toBe(['eventClass' => "() => 'legacy'"])
        ->and(V6CompatOptions::callbacks(['eventClass' => "() => 'new'"], $widget))->toBe(['eventClass' => "() => 'new'"]);
});
it('drops the plugins FullCalendar 7 has built in and joins arrays of classes', function () {
    expect(V6CompatOptions::config([
        'plugins' => ['moment', 'rrule', 'resource'],
        'dayCellClass' => ['a', 'b'],
        'slotLaneClassNames' => ['c'],
    ]))->toBe([
        'plugins' => ['rrule'],
        'dayCellClass' => 'a b',
        'slotLaneClass' => 'c',
    ]);
});

it('turns a resource column width into something FullCalendar 7 can read', function (mixed $width, array $expected) {
    expect(V6CompatOptions::config(['resourceAreaWidth' => $width]))->toBe($expected);
})->with([
    'rem' => ['16rem', ['resourceColumnsWidth' => '256px']],
    'em' => ['1.5em', ['resourceColumnsWidth' => '24px']],
    'pixels' => ['200px', ['resourceColumnsWidth' => '200px']],
    'a percentage' => ['30%', ['resourceColumnsWidth' => '30%']],
    'a number' => [240, ['resourceColumnsWidth' => 240]],
    'anything else' => ['calc(100% - 1px)', []],
]);
