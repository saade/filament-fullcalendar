<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class ConfigTimezoneCalendarWidget extends PrefilledCalendarWidget
{
    public function config(): array
    {
        return ['timeZone' => 'Europe/Lisbon', 'selectable' => true];
    }
}
