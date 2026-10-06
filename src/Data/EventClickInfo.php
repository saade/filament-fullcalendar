<?php

namespace Saade\FilamentFullCalendar\Data;

final readonly class EventClickInfo
{
    public function __construct(
        public EventInfo $event,
    ) {}
}
