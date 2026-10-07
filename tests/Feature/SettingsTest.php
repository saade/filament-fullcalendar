<?php

use Carbon\CarbonInterface;
use Filament\Facades\Filament;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\LisbonCalendarWidget;

it('takes its settings from the panel plugin by default', function () {
    $widget = Livewire::test(EventCalendarWidget::class)->instance();

    expect($widget->getTimezone())->toBe('America/Sao_Paulo')
        ->and($widget->getLocale())->toBe('en')
        ->and($widget->getPlugins())->toBe(['dayGrid', 'timeGrid', 'interaction', 'list', 'moment', 'momentTimezone'])
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
