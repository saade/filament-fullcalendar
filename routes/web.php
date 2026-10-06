<?php

use Illuminate\Support\Facades\Route;
use Saade\FilamentFullCalendar\Http\Controllers\ICalendarFeedController;

Route::get('filament-fullcalendar/icalendar-feed', ICalendarFeedController::class)
    ->middleware('throttle:60,1')
    ->name('filament-fullcalendar.icalendar-feed');
