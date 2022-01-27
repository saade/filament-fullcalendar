<?php

namespace Saade\FilamentFullCalendar;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use Saade\FilamentFullCalendar\Commands\UpgradeFilamentFullCalendarCommand;

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
