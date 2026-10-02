<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait InteractsWithCustomButtons
{
    /**
     * Add custom buttons to the calendar.
     * https://fullcalendar.io/docs/customButtons
     *
     * @return array
     */
    public function customButtons(): array
    {
        return [];
    }

    /**
     * Get button action function by key.
     *
     * @param string $key
     *
     * @return string
     */
    public function getCustomButtonJsFunction(string $key): string
    {
        return $this->customButtons()[$key]['click'] ?? '';
    }
}