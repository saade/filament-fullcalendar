<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\CallbacksCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\FilteredCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\ToolbarCalendarWidget;
use Saade\FilamentFullCalendar\Toolbar\CalendarTool;
use Saade\FilamentFullCalendar\Toolbar\ToolbarButtonGroup;

afterEach(function () {
    ToolbarCalendarWidget::$buttons = null;
    ToolbarCalendarWidget::$footerButtons = null;
    ToolbarCalendarWidget::$calendarConfig = [];
});

function toolbarNames(string $widget): array
{
    return array_map(
        fn (array $groups): array => array_map(
            fn (array $group): array => array_map(
                fn (CalendarTool | ToolbarButtonGroup $button): string => $button instanceof CalendarTool ? $button->getName() : $button->getLabel(),
                $group,
            ),
            $groups,
        ),
        Livewire::test($widget)->instance()->getToolbarButtons(),
    );
}

it('has navigation, a title and the day grid views by default', function () {
    expect(toolbarNames(EventCalendarWidget::class))->toBe([
        'start' => [['prev', 'next'], ['today']],
        'center' => [['title']],
        'end' => [['dayGridMonth', 'dayGridWeek', 'dayGridDay']],
    ]);
});

it('adds the filters tool by default when the calendar has filters to open', function () {
    expect(toolbarNames(FilteredCalendarWidget::class)['end'])->toBe([['dayGridMonth', 'dayGridWeek', 'dayGridDay'], ['filters']]);
});

it('draws the toolbar itself and turns off the one of FullCalendar', function () {
    Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml(['fi-fc-toolbar', 'data-tool="prev"', 'data-tool="dayGridMonth"', 'fi-fc-toolbar-heading'])
        ->assertSeeHtml('x-on:click="calendar?.changeView(\'dayGridMonth\')"');
});

it('places tools where toolbarButtons() says, joining the ones in an array', function () {
    ToolbarCalendarWidget::$buttons = [
        'start' => ['today', ['prev', 'next']],
        'end' => ['weekends', 'goToDate', ['timeGridWeek', 'listWeek']],
    ];

    expect(toolbarNames(ToolbarCalendarWidget::class))->toBe([
        'start' => [['today'], ['prev', 'next']],
        'center' => [],
        'end' => [['weekends'], ['goToDate'], ['timeGridWeek', 'listWeek']],
    ]);
});

it('refuses a button that no tool, action or view has the name of', function () {
    ToolbarCalendarWidget::$buttons = ['start' => ['nope']];

    Livewire::test(ToolbarCalendarWidget::class);
})->throws(Exception::class, 'Toolbar button [nope] cannot be found.');

it('leaves out a hidden tool', function () {
    ToolbarCalendarWidget::$buttons = ['start' => ['secret', 'today']];

    expect(toolbarNames(ToolbarCalendarWidget::class)['start'])->toBe([['today']]);
});

it('does not show a tool that is not placed', function () {
    Livewire::test(ToolbarCalendarWidget::class)->assertDontSeeHtml('data-tool="weekends"');
});

it('renders a custom tool with its handler and active state', function () {
    ToolbarCalendarWidget::$buttons = ['start' => ['weekends', 'pickDate']];

    Livewire::test(ToolbarCalendarWidget::class)
        ->assertSeeHtml('data-tool="weekends"')
        ->assertSeeHtml('aria-pressed')
        ->assertSeeHtml("\$wire.mountAction('goToDate', { source: 'toolbar' })");
});

it('shows a group of tools as a dropdown', function () {
    ToolbarCalendarWidget::$buttons = ['end' => [ToolbarCalendarWidget::group()]];

    $group = Livewire::test(ToolbarCalendarWidget::class)
        ->assertSeeHtml('fi-fc-tool-group')
        ->assertSee('Views')
        ->instance()
        ->getToolbarButtons()['end'][0][0];

    expect(array_map(fn (CalendarTool $tool): string => $tool->getName(), $group->getResolvedButtons()))->toBe(['dayGridMonth', 'listWeek']);
});

it('reads the layout from the headerToolbar option when toolbarButtons() is not defined', function () {
    ToolbarCalendarWidget::$calendarConfig = [
        'headerToolbar' => ['left' => 'prev,next today goToDate', 'center' => 'title', 'right' => 'timeGridWeek,fourDays'],
        'views' => ['fourDays' => ['type' => 'timeGrid', 'duration' => ['days' => 4]]],
    ];

    expect(toolbarNames(ToolbarCalendarWidget::class))->toBe([
        'start' => [['prev', 'next'], ['today'], ['goToDate']],
        'center' => [['title']],
        'end' => [['timeGridWeek', 'fourDays']],
    ]);
});

it('has no toolbar when headerToolbar is false', function () {
    ToolbarCalendarWidget::$calendarConfig = ['headerToolbar' => false];

    Livewire::test(ToolbarCalendarWidget::class)->assertDontSeeHtml('fi-fc-toolbar');
});

it('gives a FullCalendar custom button a tool that clicks it', function () {
    ToolbarCalendarWidget::$calendarConfig = [
        'headerToolbar' => ['left' => 'legacy'],
        'customButtons' => ['legacy' => ['text' => 'Legacy']],
    ];

    $tool = Livewire::test(ToolbarCalendarWidget::class)->instance()->getTool('legacy');

    expect($tool->getLabel())->toBe('Legacy')
        ->and($tool->getJsHandler())->toBe("clickCustomButton('legacy', \$event, \$el)");
});

it('lets a tool with the name of an action replace the button of that action', function () {
    $tool = Livewire::test(ToolbarCalendarWidget::class)->instance()->getTool('pickDate');

    expect($tool->getJsHandler())->toBe("\$wire.mountAction('goToDate', { source: 'toolbar' })")
        ->and(Livewire::test(ToolbarCalendarWidget::class)->instance()->getTools())->toHaveKeys(['goToDate', 'pickDate', 'prev']);
});

it('takes the tooltips of its own tools from the button hints of FullCalendar', function () {
    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->getTool('prev')->getLabelJsExpression())->toBe("getToolHint('prev')")
        ->and($widget->getTool('today')->getTooltipJsExpression())->toBe("getToolHint('today')")
        ->and($widget->getTool('dayGridMonth')->getTooltipJsExpression())->toBe("getToolHint('dayGridMonth')");

    Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml('x-tooltip="{ content: getToolHint(\'prev\'), theme: $store.theme }"')
        ->assertSeeHtml('x-tooltip="{ content: getToolHint(\'dayGridMonth\'), theme: $store.theme }"');
});

it('has no footer toolbar by default', function () {
    $component = Livewire::test(EventCalendarWidget::class)->assertDontSeeHtml('fi-fc-footer-toolbar');

    expect($component->instance()->getFooterToolbarButtons())->toBe([]);
});

it('lays out a footer toolbar with the same tools', function () {
    ToolbarCalendarWidget::$footerButtons = [
        'start' => ['weekends', 'goToDate'],
        'end' => [['prev', 'next'], ToolbarCalendarWidget::group()],
    ];

    $component = Livewire::test(ToolbarCalendarWidget::class)
        ->assertSeeHtml(['fi-fc-footer-toolbar', 'data-tool="weekends"', 'fi-fc-tool-group']);

    $footer = $component->instance()->getFooterToolbarButtons();

    expect(array_map(fn (array $group): string => $group[0]->getName(), $footer['start']))->toBe(['weekends', 'goToDate'])
        ->and($footer['end'][0])->toHaveCount(2);
});

it('reads the footer layout from the footerToolbar option when footerToolbarButtons() is not defined', function () {
    ToolbarCalendarWidget::$calendarConfig = ['footerToolbar' => ['left' => 'today', 'right' => 'prev,next']];

    $footer = Livewire::test(ToolbarCalendarWidget::class)->instance()->getFooterToolbarButtons();

    expect($footer['start'][0][0]->getName())->toBe('today')
        ->and($footer['end'][0])->toHaveCount(2);
});

it('refuses a footer button that cannot be found', function () {
    ToolbarCalendarWidget::$footerButtons = ['start' => ['nope']];

    Livewire::test(ToolbarCalendarWidget::class);
})->throws(Exception::class, 'Toolbar button [nope] cannot be found.');

it('leaves the toolbars to Livewire and only keeps the calendar itself out of its updates', function () {
    $html = Livewire::test(EventCalendarWidget::class)->html();

    expect($html)->toContain('wire:ignore.self')
        ->and($html)->not->toContain('x-ignore')
        ->and(substr_count($html, 'wire:ignore'))->toBe(2);
});

it('takes a name for a view when the views are defined in JavaScript', function () {
    $tool = Livewire::test(CallbacksCalendarWidget::class, ['callbackName' => 'views'])
        ->instance()
        ->getTool('aroundToday');

    expect($tool->getJsHandler())->toBe("calendar?.changeView('aroundToday')");
});
