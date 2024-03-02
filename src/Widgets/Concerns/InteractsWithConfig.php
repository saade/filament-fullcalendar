<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

trait CanBeConfigured
{  
	public function config(): array
	{
		return [];
	}

	private static function mergeArraysRecursive($initial, $custom) {
		foreach ($custom as $key => $value) {
			if (is_array($value) && isset($initial[$key]) && is_array($initial[$key])) {
				// If both are arrays, recursively merge them
				$initial[$key] = mergeArraysRecursive($initial[$key], $value);
			} else {
				// Otherwise, overwrite the value
				$initial[$key] = $value;
			}
		}
		return $initial;
	}


	  protected function getConfig(): array
    {
        return [];
    }
}
