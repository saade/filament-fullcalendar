<?php

use Carbon\CarbonInterface;
use Filament\Facades\Filament;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;
use Saade\FilamentFullCalendar\Tests\Fixtures\ConfigTimezoneCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\LisbonCalendarWidget;

it('takes its settings from the panel plugin by default', function () {
    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->getTimezone())->toBe('America/Sao_Paulo')
        ->and($widget->getLocale())->toBe('en')
        ->and($widget->getPlugins())->toBe(['dayGrid', 'timeGrid', 'interaction', 'list'])
        ->and($widget->getSchedulerLicenseKey())->toBeNull()
        ->and($widget->isEditable())->toBeTrue()
        ->and($widget->isSelectable())->toBeTrue();
});

it('lets a widget override the timezone, locale, plugins and license key', function () {
    $component = Livewire::test(LisbonCalendarWidget::class)
        ->assertSeeHtml('Europe\/Lisbon')
        ->assertSeeHtml('resourceTimeline')
        ->assertSeeHtml('widget-license-key');

    expect($component->instance()->getLocale())->toBe('pt');
});

it('uses the timezone of the widget for date selections', function () {
    Livewire::test(LisbonCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertSet('mountedActions.0.arguments.start', fn (CarbonInterface $start): bool => $start->timezoneName === 'Europe/Lisbon');
});

it('accepts closures for the panel plugin settings', function () {
    $plugin = FilamentFullCalendarPlugin::make()
        ->editable(fn (): bool => true)
        ->selectable(fn (): bool => false)
        ->schedulerLicenseKey(fn (): string => 'from-closure')
        ->config(fn (): array => ['firstDay' => 1]);

    expect($plugin->isEditable())->toBeTrue()
        ->and($plugin->isSelectable())->toBeFalse()
        ->and($plugin->getSchedulerLicenseKey())->toBe('from-closure')
        ->and($plugin->getConfig())->toBe(['firstDay' => 1]);
});

it('draws the calendar with the Filament theme unless another is chosen', function () {
    Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml("theme: 'filament'")
        ->assertSeeHtml('palette: null');

    FilamentFullCalendarPlugin::current()->theme('monarch');

    Livewire::test(EventCalendarWidget::class)->assertSeeHtml("theme: 'monarch'");
});

it('takes the name of a theme of your own and leaves its palette to the browser', function () {
    FilamentFullCalendarPlugin::current()->theme('brutalist')->palette('purple');

    Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml("theme: 'brutalist'")
        ->assertSeeHtml("palette: 'purple'")
        ->assertDontSeeHtml('fi-fc-palette-');
});

it('hands the address of each registered theme to the calendar', function () {
    FilamentFullCalendarPlugin::current()
        ->registerTheme('brutalist', '/js/brutalist.js')
        ->registerTheme('soft', fn (): string => '/js/soft.js')
        ->theme('brutalist');

    $widget = Livewire::test(EventCalendarWidget::class)
        ->assertSeeHtml("theme: 'brutalist'")
        ->assertSeeHtml('registeredThemes:');

    expect($widget->instance()->getRegisteredThemes())->toBe(['brutalist' => '/js/brutalist.js', 'soft' => '/js/soft.js']);
});

it('refuses to register a theme under the name of a built-in one', function () {
    FilamentFullCalendarPlugin::make()->registerTheme('monarch', '/js/monarch.js');
})->throws(InvalidArgumentException::class, '[monarch] is the name of a built-in theme');

it('refuses a blank theme', function () {
    FilamentFullCalendarPlugin::make()->theme('')->getTheme();
})->throws(InvalidArgumentException::class, 'The calendar theme cannot be blank');

it('gives a FullCalendar theme its first palette unless another is chosen', function () {
    FilamentFullCalendarPlugin::current()->theme('monarch');

    Livewire::test(EventCalendarWidget::class)->assertSeeHtml('fi-fc-palette-monarch-blue');

    FilamentFullCalendarPlugin::current()->palette('yellow');

    Livewire::test(EventCalendarWidget::class)->assertSeeHtml('fi-fc-palette-monarch-yellow');
});

it('refuses a palette the theme does not have', function () {
    FilamentFullCalendarPlugin::current()->theme('breezy')->palette('yellow');

    Livewire::test(EventCalendarWidget::class);
})->throws(Exception::class, '[yellow] is not a palette of the [breezy] theme');

it('refuses a palette for the Filament theme', function () {
    FilamentFullCalendarPlugin::current()->palette('blue');

    Livewire::test(EventCalendarWidget::class);
})->throws(Exception::class, 'The [filament] theme has no palettes');

it('works on a panel that does not register the plugin', function () {
    Filament::setCurrentPanel(Filament::getPanel('bare'));

    $component = Livewire::test(EventCalendarWidget::class)
        ->assertOk()
        ->mountAction('create')
        ->assertActionMounted('create');

    expect($component->instance()->getTimezone())->toBe('UTC')
        ->and($component->instance()->isEditable())->toBeFalse()
        ->and($component->instance()->isSelectable())->toBeFalse();
});

it('uses a timeZone set in config() on the server as well as in the browser', function () {
    $component = Livewire::test(ConfigTimezoneCalendarWidget::class);

    expect($component->instance()->getTimezone())->toBe('Europe/Lisbon');

    $component
        ->assertSeeHtml('Europe\/Lisbon')
        ->assertDontSeeHtml('America\/Sao_Paulo')
        ->call('handleDateSelect', '2026-10-06T09:00:00', '2026-10-06T10:00:00', false, null, null)
        ->assertSchemaStateSet(['starts_at' => '2026-10-06 08:00:00', 'ends_at' => '2026-10-06 09:00:00'], 'mountedActionSchema0');
});
