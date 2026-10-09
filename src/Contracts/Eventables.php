<?php

namespace Saade\FilamentFullCalendar\Contracts;

use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Data\FetchInfo;

interface Eventables
{
    /**
     * @return array<EventData | array<string, mixed>>
     */
    public function toCalendarEvents(FetchInfo $info): array;
}
