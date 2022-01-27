<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait UsesConfig
{
    public function getConfig(): array
    {
        return config('filament-fullcalendar');
    }
}
