<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait FiresEvents
{
    /**
     * Triggered when the user clicks an event.
     *
     * Commented out so we can save some requests :) Feel free to extend it.
     * @see https://fullcalendar.io/docs/eventClick
     */
    // public function onEventClick($event): void
    // {
    //     //
    // }

    public static function isListeningClickEvent(): bool
    {
        return method_exists(static::class, 'onEventClick');
    }

    /**
     * Triggered when dragging stops and the event has moved to a different day/time.
     *
     * Commented out so we can save some requests :) Feel free to extend it.
     * @see https://fullcalendar.io/docs/eventDrop
     */
    // public function onEventDrop($newEvent, $oldEvent, $relatedEvents): void
    // {
    //     //
    // }

    public static function isListeningDropEvent(): bool
    {
        return method_exists(static::class, 'onEventDrop');
    }

    /**
     * Triggered when event's resize stops .
     *
     * Commented out so we can save some requests :) Feel free to extend it.
     * @see https://fullcalendar.io/docs/eventResize
     */
    // public function onEventResize($event, $oldEvent, $relatedEvents): void
    // {
    //     //
    // }

    public static function isListeningResizeEvent(): bool
    {
        return method_exists(static::class, 'onEventResize');
    }
}
