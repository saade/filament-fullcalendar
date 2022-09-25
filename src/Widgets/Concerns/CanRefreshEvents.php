<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait CanRefreshEvents
{
    protected function refreshEvents(): void
    {
        $this->dispatchBrowserEvent('filament-fullcalendar--refresh', $this::canFetchEvents() ? null : ['data' => $this->getViewData()]);
    }
}
