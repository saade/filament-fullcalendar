<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\ColoredCalendarWidget;

const COLORED_RANGE = ['start' => '2026-10-01T00:00:00Z', 'end' => '2026-11-01T00:00:00Z', 'timezone' => 'UTC'];

function coloredEvents(): array
{
    return Livewire::test(ColoredCalendarWidget::class)->instance()->handleFetchEvents(COLORED_RANGE);
}

it('gives an event with a Filament color the classes of a badge of that color', function () {
    [$approved, $rejected] = coloredEvents();

    expect($approved)->not->toHaveKey('color')
        ->and($approved['classNames'])->toContain('fi-color', 'fi-color-success')
        ->and(collect($approved['classNames'])->contains(fn (string $class): bool => str_starts_with($class, 'fi-text-color-')))->toBeTrue()
        ->and(collect($approved['classNames'])->contains(fn (string $class): bool => str_starts_with($class, 'dark:fi-text-color-')))->toBeTrue();

    expect($rejected['classNames'])->toContain('mine', 'fi-color-danger');
});

it('treats gray as the Filament color', function () {
    expect(coloredEvents()[2])->not->toHaveKey('color')
        ->and(coloredEvents()[2]['classNames'])->toBe(['fc-event-gray']);
});

it('leaves an event without a color alone', function () {
    expect(coloredEvents()[3])->toBe(['title' => 'None', 'start' => '2026-10-09']);
});

it('leaves CSS colors as they are, with white text unless one is set', function () {
    [, , , , $filled, $both] = coloredEvents();

    expect($filled)->toMatchArray(['backgroundColor' => '#16a34a', 'textColor' => '#fff'])->not->toHaveKey('classNames')
        ->and($both)->toMatchArray(['backgroundColor' => '#fde047', 'borderColor' => '#000', 'textColor' => '#000']);
});

it('refuses a color that is not a Filament color', function (mixed $color) {
    Livewire::test(ColoredCalendarWidget::class)
        ->set('events', [['title' => 'Wrong', 'start' => '2026-10-06', 'color' => $color]])
        ->instance()
        ->handleFetchEvents(COLORED_RANGE);
})->with(['#16a34a', 'red', 'rgb(0, 0, 0)'])->throws(InvalidArgumentException::class, 'is not a Filament color');

it('does the same for event sources and for resources and their children', function () {
    $widget = Livewire::test(ColoredCalendarWidget::class)->instance();

    [$warning, $black] = $widget->getEventSources();

    expect($warning)->not->toHaveKey('color')
        ->and($warning['className'])->toContain('fi-color-warning')
        ->and($black)->toMatchArray(['backgroundColor' => '#000', 'borderColor' => '#333', 'textColor' => '#fff'])->not->toHaveKey('className');

    [$info, $teal] = $widget->handleFetchResources();

    expect($info['eventClassNames'])->toContain('fi-color-info')
        ->and($info['children'][0]['eventClassNames'])->toContain('fi-color-danger')
        ->and($teal)->toMatchArray(['eventBackgroundColor' => 'teal', 'eventTextColor' => '#fff'])->not->toHaveKey('eventClassNames');
});

it('prints the text shades of a primary badge for events without a color', function () {
    expect(Livewire::test(ColoredCalendarWidget::class)->instance()->getDefaultEventColorStyles())
        ->toMatch('/^--fc-default-event-text: var\(--primary-\d+\); --fc-default-event-dark-text: var\(--primary-\d+\)$/');
});
