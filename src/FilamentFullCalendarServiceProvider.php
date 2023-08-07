<?php

namespace Saade\FilamentFullCalendar;

use Filament\Support\Facades\FilamentAsset;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Saade\FilamentFullCalendar\Commands\UpgradeFilamentFullCalendarCommand;
use Spatie\LaravelPackageTools\Package;
use Filament\PluginServiceProvider;

class FilamentFullCalendarServiceProvider extends PluginServiceProvider
{
    public static string $name = 'filament-fullcalendar';

    public function configurePackage(Package $package): void
    {
        $package
            ->name(self::$name)
            ->hasConfigFile()
            ->hasViews()
            ->hasCommand(UpgradeFilamentFullCalendarCommand::class);
    }

    protected function getStyles(): array
    {
        return [
            'filament-fullcalendar-styles' => __DIR__ . '/../dist/filament-fullcalendar.css',
        ];
    }

    protected function getBeforeCoreScripts(): array
    {
        return [
            'filament-fullcalendar-scripts' => __DIR__ . '/../dist/filament-fullcalendar.js',
        ];
    }
}
