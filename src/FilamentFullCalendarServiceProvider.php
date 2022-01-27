<?php

namespace Saade\FilamentFullCalendar;

use Saade\FilamentFullCalendar\Commands\UpgradeFilamentFullCalendarCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentFullCalendarServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package
            ->name('filament-fullcalendar')
            ->hasConfigFile()
            ->hasViews()
            ->hasCommand(UpgradeFilamentFullCalendarCommand::class);
    }
}
