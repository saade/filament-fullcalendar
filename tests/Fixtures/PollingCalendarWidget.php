<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class PollingCalendarWidget extends EventCalendarWidget
{
    public string $interval = '30s';

    protected function getPollingInterval(): ?string
    {
        return $this->interval;
    }
}
