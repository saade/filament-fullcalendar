<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Saade\FilamentFullCalendar\Data\EventSourceData;

class SourcesCalendarWidget extends EventCalendarWidget
{
    public function eventSources(): array
    {
        return [
            EventSourceData::googleCalendar('holidays@group.v.calendar.google.com')->id('holidays')->color('gray'),
            EventSourceData::iCalendar('https://example.com/private/token-123/team.ics')->cacheFor(5),
            EventSourceData::iCalendar('https://example.com/public.ics')->fetchedByBrowser(),
            ['url' => '/feeds/custom.json', 'color' => 'red'],
        ];
    }
}
