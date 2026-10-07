<?php

namespace Saade\FilamentFullCalendar\Data;

use Carbon\CarbonInterval;

final readonly class EventResizeInfo
{
    /**
     * @param  EventInfo  $event  The event after it was resized.
     * @param  EventInfo  $oldEvent  The event before it was resized.
     * @param  array<EventInfo>  $relatedEvents  Other events that were resized with it, such as the rest of its group.
     * @param  CarbonInterval  $startDelta  How far the start was moved.
     * @param  CarbonInterval  $endDelta  How far the end was moved.
     */
    public function __construct(
        public EventInfo $event,
        public EventInfo $oldEvent,
        public array $relatedEvents,
        public CarbonInterval $startDelta,
        public CarbonInterval $endDelta,
    ) {
    }
}
