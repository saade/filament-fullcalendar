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

    public function isListeningClickEvent(): bool
    {
        return method_exists($this, 'onEventClick');
    }

    /**
     * Triggered when dragging stops and the event has moved to a different day/time.
     *
     * Commented out so we can save some requests :) Feel free to extend it.
     * @see https://fullcalendar.io/docs/eventDrop
     */
    // public function onEventDrop($oldEvent, $newEvent, $relatedEvents): void
    // {
    //     //
    // }

    public function isListeningDropEvent(): bool
    {
        return method_exists($this, 'onEventClick');
    }
}
