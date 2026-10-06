<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Contracts\Eventable;
use Saade\FilamentFullCalendar\Data\EventData;

class Task extends Model implements Eventable
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'due_at' => 'datetime',
        ];
    }

    public function toCalendarEvent(): EventData
    {
        return EventData::make()
            ->title($this->name)
            ->start($this->due_at)
            ->allDay();
    }
}
