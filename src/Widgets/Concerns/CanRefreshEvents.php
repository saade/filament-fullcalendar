<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait CanRefreshEvents
{
    protected function refreshEvents(): void
    {
        $this->dispatchBrowserEvent('fullcalendar::refresh', ['data' => $this->getViewData()]);
    }
}
