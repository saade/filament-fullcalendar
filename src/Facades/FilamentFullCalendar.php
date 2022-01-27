<?php

namespace Saade\FilamentFullCalendar\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Saade\FilamentFullCalendar\FilamentFullCalendar
 */
class FilamentFullCalendar extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'filament-fullcalendar';
    }
}
