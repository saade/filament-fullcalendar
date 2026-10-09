<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Saade\FilamentFullCalendar\Contracts\Eventables;
use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Data\FetchInfo;

class Rental extends Event implements Eventables
{
    protected $table = 'events';

    public function toCalendarEvents(FetchInfo $info): array
    {
        return array_values(array_filter([
            $this->starts_at->betweenIncluded($info->start, $info->end)
                ? EventData::make()->title("Pickup: {$this->title}")->start($this->starts_at)->color('success')
                : null,
            $this->ends_at->betweenIncluded($info->start, $info->end)
                ? ['title' => "Return: {$this->title}", 'start' => $this->ends_at, 'extendedProps' => ['kind' => 'return']]
                : null,
        ]));
    }
}
