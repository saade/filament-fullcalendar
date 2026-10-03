<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;

it('can read the record before an event was clicked', function () {
    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->record)->toBeNull()
        ->and($widget->getRecord())->toBeNull();
});
