<?php

namespace Saade\FilamentFullCalendar\Contracts;

use Saade\FilamentFullCalendar\Data\EventData;

interface Eventable
{
    /**
     * @return EventData | array<string, mixed>
     */
    public function toCalendarEvent(): EventData | array;
}
