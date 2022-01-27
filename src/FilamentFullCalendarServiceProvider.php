<?php

namespace Saade\FilamentFullCalendar;

use Filament\PluginServiceProvider;
use Saade\FilamentFullCalendar\Commands\UpgradeFilamentFullCalendarCommand;
use Spatie\LaravelPackageTools\Package;

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
            self::$name . '-styles' => __DIR__ . '/../dist/fullcalendar/lib/main.min.css',
        ];
    }

    protected function getScripts(): array
    {
        return [
            self::$name . '-fullcalendar' => __DIR__ . '/../dist/fullcalendar/lib/main.min.js',
            self::$name . '-fullcalendar-locales' => __DIR__ . '/../dist/fullcalendar/lib/locales-all.min.js',
        ];
    }
}
