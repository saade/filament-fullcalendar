<?php

use Illuminate\Support\Carbon;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;

it('addresses its own calendar when it controls it', function (string $method, array $arguments, string $event, array $detail) {
    $component = Livewire::test(EventCalendarWidget::class);

    $component
        ->call($method, ...$arguments)
        ->assertDispatched("filament-fullcalendar--{$event}", ...$detail, calendar: $component->instance()->getId());
})->with([
    'refreshRecords()' => ['refreshRecords', [], 'refresh', []],
    'next()' => ['next', [], 'next', []],
    'previous()' => ['previous', [], 'prev', []],
    'today()' => ['today', [], 'today', []],
    'changeView()' => ['changeView', ['timeGridWeek'], 'view', ['view' => 'timeGridWeek']],
    'goToDate() with a string' => ['goToDate', ['2026-12-01'], 'goto', ['date' => '2026-12-01']],
    'scrollToTime()' => ['scrollToTime', ['08:00'], 'scroll', ['time' => '08:00']],
    'setOption() with a value' => ['setOption', ['weekends', false], 'option', ['option' => 'weekends', 'value' => false]],
    'setOption() with an array' => ['setOption', ['businessHours', ['daysOfWeek' => [1, 2], 'startTime' => '09:00']], 'option', ['option' => 'businessHours', 'value' => ['daysOfWeek' => [1, 2], 'startTime' => '09:00']]],
]);

it('accepts a date object in goToDate()', function () {
    $component = Livewire::test(EventCalendarWidget::class);

    $component
        ->call('goToDate', Carbon::parse('2026-12-01 10:00:00', 'America/Sao_Paulo'))
        ->assertDispatched('filament-fullcalendar--goto', date: '2026-12-01T10:00:00-03:00', calendar: $component->instance()->getId());
});

it('gives every calendar a different id to listen for', function () {
    $first = Livewire::test(EventCalendarWidget::class);
    $second = Livewire::test(EventCalendarWidget::class);

    expect($first->instance()->getId())->not->toBe($second->instance()->getId());

    $first->assertSeeHtml($first->instance()->getId());
});

it('goes to a date while changing the view', function () {
    $component = Livewire::test(EventCalendarWidget::class);

    $component
        ->call('changeView', 'timeGridWeek', '2026-12-01')
        ->assertDispatched('filament-fullcalendar--view', view: 'timeGridWeek', date: '2026-12-01', calendar: $component->instance()->getId());
});

it('refuses to change an option the server has to know about', function (string $option) {
    Livewire::test(EventCalendarWidget::class)->instance()->setOption($option, true);
})->with(['editable', 'selectable', 'droppable', 'timeZone', 'events'])->throws(LogicException::class, 'Set it in config().');
