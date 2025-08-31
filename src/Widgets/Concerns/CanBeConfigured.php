<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use function Saade\FilamentFullCalendar\array_merge_recursive_unique;

use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

trait CanBeConfigured
{
    public function config(): array
    {
        return [];
    }

    public function getConfig(): array
    {
        return array_merge_recursive_unique(
            FilamentFullCalendarPlugin::get()->getConfig(),
            $this->config(),
        );
    }
}
