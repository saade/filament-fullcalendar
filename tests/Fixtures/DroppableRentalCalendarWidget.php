<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class DroppableRentalCalendarWidget extends RentalCalendarWidget
{
    public function config(): array
    {
        return ['droppable' => true];
    }
}
