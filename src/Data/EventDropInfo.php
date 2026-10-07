<?php

namespace Saade\FilamentFullCalendar\Data;

use Carbon\CarbonInterval;

final readonly class EventDropInfo
{
    /**
     * @param  EventInfo  $event  The event after it was dropped.
     * @param  EventInfo  $oldEvent  The event before it was dragged.
     * @param  array<EventInfo>  $relatedEvents  Other events that moved with it, such as the rest of its group.
     * @param  CarbonInterval  $delta  How far the event was moved.
     * @param  array<string, mixed> | null  $oldResource
     * @param  array<string, mixed> | null  $newResource
     */
    public function __construct(
        public EventInfo $event,
        public EventInfo $oldEvent,
        public array $relatedEvents,
        public CarbonInterval $delta,
        public ?array $oldResource = null,
        public ?array $newResource = null,
    ) {
    }
}
