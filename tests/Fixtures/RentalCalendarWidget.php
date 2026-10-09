<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Data\FetchInfo;

class RentalCalendarWidget extends SavingCalendarWidget
{
    public Model | string | null $model = Rental::class;

    public function fetchEvents(FetchInfo $info): Builder
    {
        return Rental::query();
    }
}
