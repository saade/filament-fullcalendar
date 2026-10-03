<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\ResourcePageCalendarWidget;

it('can read the record before an event was clicked', function () {
    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->record)->toBeNull()
        ->and($widget->getRecord())->toBeNull();
});

it('keeps the record property compatible with the trait from Filament resource pages', function () {
    expect(class_exists(ResourcePageCalendarWidget::class))->toBeTrue();
});
