<?php

namespace Saade\FilamentFullCalendar;

use Filament\Contracts\Plugin;
use Filament\Panel;

class FilamentFullCalendarPlugin implements Plugin
{

    public function getId(): string
    {
        return 'filament-fullcalendar';
    }

    public function register(Panel $panel): void
    {
        //
    }

    public function boot(Panel $panel): void
    {
        //
    }

    public static function make(): static
    {
        return app(static::class);
    }

    public static function get(): static
    {
        return filament(app(static::class)->getId());
    }
}
