<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\ReadOnlyCalendarWidget;

it('uses selectable and editable from the panel plugin by default', function () {
    $widget = Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml('selectable: true')
        ->assertSeeHtml('editable: true')
        ->instance();

    expect($widget->isSelectable())->toBeTrue()
        ->and($widget->isEditable())->toBeTrue();
});

it('lets the widget config override selectable and editable', function () {
    $widget = Livewire::test(ReadOnlyCalendarWidget::class)
        ->assertSeeHtml('selectable: false')
        ->assertSeeHtml('editable: false')
        ->instance();

    expect($widget->isSelectable())->toBeFalse()
        ->and($widget->isEditable())->toBeFalse();
});
