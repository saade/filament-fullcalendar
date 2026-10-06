<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class LisbonCalendarWidget extends EventCalendarWidget
{
    public function getTimezone(): string
    {
        return 'Europe/Lisbon';
    }

    public function getLocale(): string
    {
        return 'pt';
    }

    public function getPlugins(): array
    {
        return ['dayGrid', 'resourceTimeline'];
    }

    public function getSchedulerLicenseKey(): ?string
    {
        return 'widget-license-key';
    }
}
