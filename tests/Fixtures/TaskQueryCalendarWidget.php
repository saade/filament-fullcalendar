<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Illuminate\Database\Eloquent\Builder;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class TaskQueryCalendarWidget extends FullCalendarWidget
{
    public function fetchEvents(FetchInfo $info): Builder
    {
        return Task::query()->whereBetween('due_at', [$info->start, $info->end]);
    }
}
