<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Saade\FilamentFullCalendar\Data\FetchInfo;

class FilteredArrayCalendarWidget extends FilteredCalendarWidget
{
    protected bool $persistsFiltersInSession = false;

    public function fetchEvents(FetchInfo $info): array
    {
        return $this->modifyQueryWithActiveTab(Meeting::query())
            ->get()
            ->map(fn (Meeting $meeting): array => ['id' => $meeting->getKey(), 'title' => $meeting->title, 'start' => $meeting->starts_at])
            ->all();
    }
}
