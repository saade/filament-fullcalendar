<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait CanFetchEvents
{
    /**
     * FullCalendar will call this function whenever it needs new event data. This is triggered when the user clicks prev/next or switches views.
     *
     * Commented out so we can save some requests :) Feel free to extend it.
     *
     * @see https://fullcalendar.io/docs/events-function
     * @param array $fetchInfo start and end date of the current view
     * @param array $ignorableIds ids of the events that are already loaded and should be ignored
     */
    // public function fetchEvents(array $fetchInfo, array $ignorableIds): array
    // {
    //     return [];
    // }

    public static function canFetchEvents(): bool
    {
        return method_exists(static::class, 'fetchEvents');
    }
}
