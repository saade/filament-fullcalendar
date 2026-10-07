<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class FormlessCalendarWidget extends FullCalendarWidget
{
    public Model | string | null $model = Event::class;
}
