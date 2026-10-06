<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;

class DroppableCalendarWidget extends PrefilledCalendarWidget
{
    public Model | string | null $model = Meeting::class;

    public function config(): array
    {
        return ['droppable' => true];
    }
}
