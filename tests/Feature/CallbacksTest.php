<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\CallbacksCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;

it('has no callbacks unless they are defined', function () {
    expect(Livewire::test(EventCalendarWidget::class)->instance()->getJsCallbacks())->toBe([]);
});

it('collects the render hooks and jsCallbacks() without a trailing semicolon', function () {
    expect(Livewire::test(CallbacksCalendarWidget::class)->instance()->getJsCallbacks())->toBe([
        'eventDidMount' => "function ({ el }) { el.dataset.mounted = 'yes' }",
        'selectAllow' => 'function (info) { return info.start >= new Date() }',
        'dayCellClassNames' => '({ isPast }) => isPast ? ["is-past"] : []',
    ]);
});

it('prints the callbacks as JavaScript', function () {
    Livewire::test(CallbacksCalendarWidget::class)
        ->assertSeeHtml('selectAllow: (function (info) { return info.start &gt;= new Date() }),')
        ->assertSeeHtml('dayCellClassNames: (({ isPast }) =&gt; isPast ? [&quot;is-past&quot;] : []),');
});

it('refuses a callback name that is not an option name', function () {
    Livewire::test(CallbacksCalendarWidget::class, ['callbackName' => 'x: alert(1), y']);
})->throws(Exception::class, 'is not a valid name for a FullCalendar option');

it('makes each toolbar action a tool that opens it', function () {
    $component = Livewire::test(CallbacksCalendarWidget::class);

    $tool = $component->instance()->getTool('export');

    expect($tool->getLabel())->toBe('Export')
        ->and($tool->isLabelHidden())->toBeFalse()
        ->and($tool->getJsHandler())->toBe("\$wire.mountAction('export')");

    $component
        ->callAction('export')
        ->assertSet('exported', 'done');
});

it('hides the tool of an action the user cannot see', function () {
    expect(Livewire::test(CallbacksCalendarWidget::class)->instance()->getTool('print')->isVisible())->toBeFalse()
        ->and(Livewire::test(CallbacksCalendarWidget::class, ['canPrint' => true])->instance()->getTool('print')->isVisible())->toBeTrue();
});

it('runs the JavaScript or opens the URL of a toolbar action that has one', function () {
    $widget = Livewire::test(CallbacksCalendarWidget::class, ['canPrint' => true])->instance();

    expect($widget->getTool('print')->getJsHandler())->toBe('window.print()')
        ->and($widget->getTool('docs')->getJsHandler())->toBe("window.open('https:\/\/example.com\/docs', '_blank')");
});

it('still gives the actions to FullCalendar for its footer toolbar', function () {
    expect(Livewire::test(CallbacksCalendarWidget::class)->instance()->getFooterToolbarButtons())->toBe([
        'export' => ['text' => 'Export', 'hint' => 'Download the month', 'alpineClickHandler' => null, 'url' => null, 'shouldOpenUrlInNewTab' => false],
    ]);
});

it('only asks the browser for the dates when onDatesSet() is defined', function () {
    Livewire::test(CallbacksCalendarWidget::class)->assertSeeHtml('shouldReportDates: true');

    Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml('shouldReportDates: false')
        ->call('handleDatesSet', [
            'view' => 'dayGridMonth',
            'title' => 'October 2026',
            'start' => '2026-09-27T00:00:00-03:00',
            'end' => '2026-11-08T00:00:00-03:00',
            'currentStart' => '2026-10-01T00:00:00-03:00',
            'currentEnd' => '2026-11-01T00:00:00-03:00',
        ])
        ->assertOk();
});

it('passes the view and its dates to onDatesSet() in the application timezone', function () {
    Livewire::test(CallbacksCalendarWidget::class)
        ->call('handleDatesSet', [
            'view' => 'dayGridMonth',
            'title' => 'October 2026',
            'start' => '2026-09-27T00:00:00-03:00',
            'end' => '2026-11-08T00:00:00-03:00',
            'currentStart' => '2026-10-01T00:00:00-03:00',
            'currentEnd' => '2026-11-01T00:00:00-03:00',
        ])
        ->assertSet('lastView', 'dayGridMonth | October 2026 | 2026-10-01 03:00:00 | 2026-09-27 03:00:00');
});
