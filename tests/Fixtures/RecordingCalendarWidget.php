<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Saade\FilamentFullCalendar\Data\DateClickInfo;
use Saade\FilamentFullCalendar\Data\DateSelectInfo;
use Saade\FilamentFullCalendar\Data\EventClickInfo;
use Saade\FilamentFullCalendar\Data\EventDropInfo;
use Saade\FilamentFullCalendar\Data\EventResizeInfo;
use Saade\FilamentFullCalendar\Data\FetchInfo;

class RecordingCalendarWidget extends EventCalendarWidget
{
    /** @var array<string, object> */
    public static array $received = [];

    public function fetchEvents(FetchInfo $info): array
    {
        static::$received['fetch'] = $info;

        return $info->overlapping(Event::query(), 'starts_at', 'ends_at')
            ->get()
            ->map(fn (Event $event): array => ['id' => $event->getKey(), 'title' => $event->title])
            ->all();
    }

    protected function onEventClick(EventClickInfo $info): void
    {
        static::$received['click'] = $info;
    }

    protected function onEventDrop(EventDropInfo $info): bool
    {
        static::$received['drop'] = $info;

        return true;
    }

    protected function onEventResize(EventResizeInfo $info): bool
    {
        static::$received['resize'] = $info;

        return false;
    }

    protected function onDateClick(DateClickInfo $info): void
    {
        static::$received['dateClick'] = $info;
    }

    protected function onDateSelect(DateSelectInfo $info): void
    {
        static::$received['select'] = $info;
    }
}
