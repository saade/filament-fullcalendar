<?php

use Carbon\CarbonInterface;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;

it('parses selected dates in the timezone configured on the panel plugin', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-08', true, null, null)
        ->assertActionMounted('create')
        ->assertSet('mountedActions.0.arguments.start', fn (CarbonInterface $start): bool => $start->toIso8601String() === '2026-10-06T00:00:00-03:00')
        ->assertSet('mountedActions.0.arguments.end', fn (CarbonInterface $end): bool => $end->toIso8601String() === '2026-10-07T23:59:59-03:00');
});
