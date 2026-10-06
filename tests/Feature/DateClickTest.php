<?php

use Carbon\CarbonInterface;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Data\DateClickInfo;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\RecordingCalendarWidget;

beforeEach(function () {
    RecordingCalendarWidget::$received = [];
});

it('opens the create action for the clicked day', function (?string $selectionEnd) {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleDateClick', '2026-10-06', true, null, null, $selectionEnd)
        ->assertActionMounted('create')
        ->assertSet('mountedActions.0.arguments.start', fn (CarbonInterface $start): bool => $start->toIso8601String() === '2026-10-06T00:00:00-03:00')
        ->assertSet('mountedActions.0.arguments.end', fn (CarbonInterface $end): bool => $end->toIso8601String() === '2026-10-06T23:59:59-03:00')
        ->assertSet('mountedActions.0.arguments.allDay', true);
})->with([
    'a mouse click, which also selects the day' => '2026-10-07',
    'a tap, which selects nothing' => null,
]);

it('opens the create action for the clicked time slot', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleDateClick', '2026-10-06T10:00:00-03:00', false, null, null, '2026-10-06T10:30:00-03:00')
        ->assertActionMounted('create')
        ->assertSet('mountedActions.0.arguments.start', fn (CarbonInterface $start): bool => $start->toIso8601String() === '2026-10-06T10:00:00-03:00')
        ->assertSet('mountedActions.0.arguments.end', fn (CarbonInterface $end): bool => $end->toIso8601String() === '2026-10-06T10:30:00-03:00')
        ->assertSet('mountedActions.0.arguments.allDay', false);
});

it('leaves the end empty when a time slot is tapped', function () {
    Livewire::test(EventCalendarWidget::class)
        ->call('handleDateClick', '2026-10-06T10:00:00-03:00', false)
        ->assertActionMounted('create')
        ->assertSet('mountedActions.0.arguments.end', null);
});

it('passes the click to onDateClick() without calling onDateSelect()', function () {
    Livewire::test(RecordingCalendarWidget::class)
        ->call('handleDateClick', '2026-10-06', true, ['type' => 'dayGridMonth'], ['id' => 'room-a'], '2026-10-07');

    $info = RecordingCalendarWidget::$received['dateClick'];

    expect($info)->toBeInstanceOf(DateClickInfo::class)
        ->and($info->date->toIso8601String())->toBe('2026-10-06T00:00:00-03:00')
        ->and($info->allDay)->toBeTrue()
        ->and($info->view)->toBe(['type' => 'dayGridMonth'])
        ->and($info->resource)->toBe(['id' => 'room-a'])
        ->and($info->selection->end->toIso8601String())->toBe('2026-10-06T23:59:59-03:00')
        ->and(RecordingCalendarWidget::$received)->not->toHaveKey('select');
});

it('does not call onDateClick() for a dragged selection', function () {
    Livewire::test(RecordingCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-09', true, null, null);

    expect(RecordingCalendarWidget::$received)->toHaveKey('select')
        ->and(RecordingCalendarWidget::$received)->not->toHaveKey('dateClick');
});
