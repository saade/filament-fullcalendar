<?php

namespace Saade\FilamentFullCalendar;

use Saade\FilamentFullCalendar\Commands\UpgradeFilamentFullCalendarCommand;
use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Css;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentFullCalendarServiceProvider extends PackageServiceProvider
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

    public function packageBooted(): void
    {
        FilamentAsset::register([
            Css::make('filament-fullcalendar-styles', __DIR__ . '/../dist/filament-fullcalendar.css')->loadedOnRequest(),
            AlpineComponent::make('filament-fullcalendar-scripts', __DIR__ . '/../dist/filament-fullcalendar.js'),
        ], 'saade/filament-fullcalendar');
    }
}
