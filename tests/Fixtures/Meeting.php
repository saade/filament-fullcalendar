<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Saade\FilamentFullCalendar\Contracts\Eventable;

class Meeting extends Event implements Eventable
{
    protected $table = 'events';

    public function toCalendarEvent(): array
    {
        return [
            'title' => $this->title,
            'start' => $this->starts_at,
            'end' => $this->ends_at,
            'extendedProps' => ['kind' => 'meeting'],
        ];
    }
}
