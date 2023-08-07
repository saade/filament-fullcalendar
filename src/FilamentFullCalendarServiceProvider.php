<?php

namespace Saade\FilamentFullCalendar;

use Filament\Support\Facades\FilamentAsset;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Saade\FilamentFullCalendar\Commands\UpgradeFilamentFullCalendarCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentFullCalendarServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-fullcalendar';

    public function packageBooted(): void
    {
        FilamentAsset::register([
            Css::make('filament-fullcalendar-styles', __DIR__ . '/../dist/filament-fullcalendar.css'),
            Js::make('filament-fullcalendar-scripts', __DIR__ . '/../dist/filament-fullcalendar.js'),
        ], 'saade/filament-fullcalendar');
    }

    public function configurePackage(Package $package): void
    {
        $package
            ->name(self::$name)
            ->hasConfigFile()
            ->hasViews()
            ->hasCommand(UpgradeFilamentFullCalendarCommand::class);
    }
}
