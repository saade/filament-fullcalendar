<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\HeadedCalendarWidget;

it('has no heading unless it is given one', function () {
    $component = Livewire::test(EventCalendarWidget::class);

    expect($component->instance()->getHeadingHtml())->toBeNull()
        ->and($component->instance()->getDescriptionHtml())->toBeNull();

    $component->assertDontSeeHtml(['fi-section-header', 'filament-fullcalendar--title.window']);
});

it('shows the heading with the title of the calendar where :title is', function () {
    $component = Livewire::test(HeadedCalendarWidget::class);

    $heading = $component->instance()->getHeadingHtml()->toHtml();

    expect($heading)->toStartWith('Meetings in <span wire:ignore')
        ->toContain('x-text="title"', 'filament-fullcalendar--title.window', $component->instance()->getId());

    $component->assertSeeHtml('fi-section-header')->assertSee('Meetings in');
});

it('escapes the description', function () {
    Livewire::test(HeadedCalendarWidget::class)
        ->assertSee('<b>All</b> rooms')
        ->assertDontSeeHtml('<b>All</b> rooms');
});

it('puts the header actions in the header', function () {
    $html = Livewire::test(HeadedCalendarWidget::class)->assertSee('Book a room')->html();

    expect(strpos($html, 'Book a room'))->toBeLessThan(strpos($html, 'fi-fc-toolbar'))
        ->and($html)->toContain('fi-section-header');
});

it('has no create button by default, but still opens the create action for a selection', function () {
    Livewire::test(EventCalendarWidget::class)
        ->assertDontSeeHtml('fi-section-header')
        ->selectCalendarDates('2026-10-06', '2026-10-07')
        ->assertActionMounted('create');
});
