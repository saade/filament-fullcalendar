<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

use function Saade\FilamentFullCalendar\array_merge_recursive_unique;

trait CanBeConfigured
{  
	public function config(): array
	{
		return [];
	}

    protected function getConfig(): array
    {
        return array_merge_recursive_unique(
            FilamentFullCalendarPlugin::get()->getConfig(),
            $this->config(),
        );
    }
}
