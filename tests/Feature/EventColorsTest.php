<?php

use Filament\Support\Colors\Color;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;
use Saade\FilamentFullCalendar\Tests\Fixtures\ColoredCalendarWidget;

const COLORED_RANGE = ['start' => '2026-10-01T00:00:00Z', 'end' => '2026-11-01T00:00:00Z', 'timezone' => 'UTC'];

function coloredEvents(): array
{
    return Livewire::test(ColoredCalendarWidget::class)->instance()->handleFetchEvents(COLORED_RANGE);
}

it('gives an event with a Filament color the color of the panel and a class to style it by', function () {
    [$approved, $rejected] = coloredEvents();

    expect($approved)->toMatchArray(['color' => 'var(--success-500)', 'className' => 'fi-color-success']);

    expect($rejected)->toMatchArray(['color' => 'var(--danger-500)', 'className' => 'mine fi-color-danger']);
});

it('picks a darker shade for themes that put white text on the color', function (string $theme, string $color) {
    FilamentFullCalendarPlugin::current()->theme($theme);

    expect(coloredEvents()[0]['color'])->toBe($color);
})->with([
    ['filament', 'var(--success-500)'],
    ['breezy', 'var(--success-500)'],
    ['forma', 'var(--success-500)'],
    ['classic', 'var(--success-600)'],
    ['monarch', 'var(--success-600)'],
    ['pulse', 'var(--success-600)'],
]);

it('puts white text on a Filament color only for themes that fill the event with it', function (string $theme, ?string $contrastColor) {
    FilamentFullCalendarPlugin::current()->theme($theme);

    expect(coloredEvents()[0]['contrastColor'] ?? null)->toBe($contrastColor);
})->with([
    ['filament', null],
    ['breezy', null],
    ['forma', null],
    ['classic', 'white'],
    ['monarch', 'white'],
    ['pulse', 'white'],
]);

it('keeps the text color given with a Filament color', function () {
    FilamentFullCalendarPlugin::current()->theme('monarch');

    $event = Livewire::test(ColoredCalendarWidget::class)
        ->set('events', [['title' => 'Event', 'start' => '2026-10-06', 'color' => 'warning', 'textColor' => '#000']])
        ->instance()
        ->handleFetchEvents(COLORED_RANGE)[0];

    expect($event['contrastColor'])->toBe('#000');
});

it('treats gray as the Filament color', function () {
    expect(coloredEvents()[2])->toMatchArray(['color' => 'var(--gray-500)', 'className' => 'fi-color-gray']);
});

it('leaves an event without a color alone', function () {
    expect(coloredEvents()[3])->toBe(['title' => 'None', 'start' => '2026-10-09']);
});

it('passes CSS colors to FullCalendar under the names version 7 uses', function () {
    [, , , , $filled, $both] = coloredEvents();

    expect($filled)->toMatchArray(['color' => '#16a34a'])->not->toHaveKeys(['backgroundColor', 'contrastColor', 'className'])
        ->and($both)->toMatchArray(['color' => '#fde047', 'contrastColor' => '#000'])->not->toHaveKeys(['borderColor', 'textColor']);
});

it('turns CSS colors into the fields FullCalendar reads', function (array $colors, array $expected) {
    $event = Livewire::test(ColoredCalendarWidget::class)
        ->set('events', [['title' => 'Event', 'start' => '2026-10-06', ...$colors]])
        ->instance()
        ->handleFetchEvents(COLORED_RANGE)[0];

    expect($event)->toBe(['title' => 'Event', 'start' => '2026-10-06', ...$expected]);
})->with([
    'the border color without a background color' => [['borderColor' => '#16a34a'], ['color' => '#16a34a']],
    'the background color over the border color' => [['backgroundColor' => '#fde047', 'borderColor' => '#000'], ['color' => '#fde047']],
    'a Filament color over CSS colors' => [['color' => 'success', 'backgroundColor' => '#fde047'], ['color' => 'var(--success-500)', 'className' => 'fi-color-success']],
    'the classes of a FullCalendar 6 event' => [['color' => 'success', 'classNames' => ['a', 'b']], ['color' => 'var(--success-500)', 'className' => 'a b fi-color-success']],
]);

it('takes a palette as the color, with the shade the theme needs', function (string $theme, int $shade, ?string $contrastColor) {
    FilamentFullCalendarPlugin::current()->theme($theme);

    $palette = Color::hex('#16a34a');

    $event = Livewire::test(ColoredCalendarWidget::class)
        ->set('events', [EventData::make()->title('Event')->start('2026-10-06')->color($palette)->toArray()])
        ->instance()
        ->handleFetchEvents(COLORED_RANGE)[0];

    expect($event['color'])->toBe($palette[$shade])
        ->and($event['contrastColor'] ?? null)->toBe($contrastColor)
        ->and($event)->not->toHaveKey('className');
})->with([
    ['filament', 500, null],
    ['monarch', 600, 'white'],
    'a theme of your own' => ['brutalist', 500, null],
]);

it('keeps the contrast color given with a color', function () {
    FilamentFullCalendarPlugin::current()->theme('monarch');

    $event = Livewire::test(ColoredCalendarWidget::class)
        ->set('events', [EventData::make()->title('Event')->start('2026-10-06')->color('warning')->contrastColor('#000')->toArray()])
        ->instance()
        ->handleFetchEvents(COLORED_RANGE)[0];

    expect($event)->toMatchArray(['color' => 'var(--warning-600)', 'contrastColor' => '#000']);
});

it('refuses a palette without the shade the theme needs', function () {
    Livewire::test(ColoredCalendarWidget::class)
        ->set('events', [['title' => 'Event', 'start' => '2026-10-06', 'color' => [400 => '#16a34a']]])
        ->instance()
        ->handleFetchEvents(COLORED_RANGE);
})->throws(InvalidArgumentException::class, 'has no [500] shade');

it('refuses a color that is not a Filament color', function (mixed $color) {
    Livewire::test(ColoredCalendarWidget::class)
        ->set('events', [['title' => 'Wrong', 'start' => '2026-10-06', 'color' => $color]])
        ->instance()
        ->handleFetchEvents(COLORED_RANGE);
})->with(['#16a34a', 'red', 'rgb(0, 0, 0)'])->throws(InvalidArgumentException::class, 'is not a Filament color');

it('does the same for event sources and for resources and their children', function () {
    $widget = Livewire::test(ColoredCalendarWidget::class)->instance();

    [$warning, $black] = $widget->getEventSources();

    expect($warning)->toMatchArray(['color' => 'var(--warning-500)', 'className' => 'fi-color-warning'])
        ->and($black)->toMatchArray(['color' => '#000'])->not->toHaveKeys(['backgroundColor', 'borderColor', 'className']);

    [$info, $teal] = $widget->handleFetchResources();

    expect($info)->toMatchArray(['eventColor' => 'var(--info-500)', 'eventClass' => 'fi-color-info'])
        ->and($info['children'][0])->toMatchArray(['eventColor' => 'var(--danger-500)', 'eventClass' => 'fi-color-danger'])
        ->and($teal)->toMatchArray(['eventColor' => 'teal'])->not->toHaveKeys(['eventBackgroundColor', 'eventClass']);
});
