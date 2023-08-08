<?php

namespace Saade\FilamentFullCalendar;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class FilamentFullCalendarPlugin implements Plugin
{

    const PACKAGE = 'saade/filament-fullcalendar';

    const ID = 'filament-fullcalendar';

    const VERSION = '2.0.0-beta1';

    public static function make(): static
    {
        return app(static::class);
    }

    public function getId(): string
    {
        return static::ID;
    }

    public function register(Panel $panel): void
    {
        FilamentAsset::register(
            assets: [
                Css::make('filament-fullcalendar-styles', __DIR__ . '/../dist/filament-fullcalendar.css'),
                Js::make('filament-fullcalendar', __DIR__ . '/../dist/filament-fullcalendar.js'),
            ],
            package: 'saade/filament-fullcalendar'
        );
    }

    public function boot(Panel $panel): void
    {
        //
    }
}
