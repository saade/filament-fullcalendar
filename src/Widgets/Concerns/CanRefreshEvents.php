<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait CanRefreshEvents
{
    protected function refreshEvents(): void
    {
        $this->dispatchBrowserEvent('filament-fullcalendar:refresh', ['data' => $this->getViewData()]);
    }
}
