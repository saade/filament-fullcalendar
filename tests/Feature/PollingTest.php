<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\PollingCalendarWidget;

it('does not poll unless asked', function () {
    Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml('pollingInterval: null');

    expect(Livewire::test(EventCalendarWidget::class)->instance()->getPollingIntervalInMilliseconds())->toBeNull();
});

it('tells the browser how often to fetch the events again', function (string $interval, int $milliseconds) {
    $component = Livewire::test(PollingCalendarWidget::class, ['interval' => $interval]);

    expect($component->instance()->getPollingIntervalInMilliseconds())->toBe($milliseconds);

    $component->assertSeeHtml("pollingInterval: {$milliseconds}");
})->with([
    ['30s', 30_000],
    ['5m', 300_000],
    ['500ms', 500],
]);

it('explains an interval it cannot read', function () {
    Livewire::test(PollingCalendarWidget::class, ['interval' => 'often']);
})->throws(Exception::class, '[often] is not a polling interval');
