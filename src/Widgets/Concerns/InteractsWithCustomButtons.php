<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait InteractsWithCustomButtons
{
    /**
     * Add custom buttons to the calendar.
     *
     * @see https://fullcalendar.io/docs/customButtons
     *
     * The `click` key of each button holds raw JavaScript, the remaining keys are
     * forwarded to FullCalendar as they are.
     *
     * @return array<string, array<string, mixed>>
     */
    public function customButtons(): array
    {
        return [];
    }

    /**
     * Get the raw JavaScript click handler of a custom button.
     *
     * @return string
     */
    public function getCustomButtonJsFunction(string $key): string
    {
        return $this->customButtons()[$key]['click'] ?? '';
    }
}
