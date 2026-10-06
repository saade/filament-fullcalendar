<?php

namespace Saade\FilamentFullCalendar\Data;

use Carbon\CarbonImmutable;

final readonly class DateSelectInfo
{
    /**
     * @param  CarbonImmutable  $start  Start of the selection, in the calendar's timezone.
     * @param  CarbonImmutable | null  $end  End of the selection, in the calendar's timezone. For an all-day selection this is the end of the last selected day.
     * @param  array<string, mixed> | null  $view
     * @param  array<string, mixed> | null  $resource
     */
    public function __construct(
        public CarbonImmutable $start,
        public ?CarbonImmutable $end,
        public bool $allDay,
        public ?array $view = null,
        public ?array $resource = null,
    ) {}

    /**
     * @param  array<string, mixed> | null  $view
     * @param  array<string, mixed> | null  $resource
     */
    public static function make(string $start, ?string $end, bool $allDay, ?array $view, ?array $resource, string $timezone): self
    {
        $end = filled($end) ? CarbonImmutable::parse($end, $timezone) : null;

        if ($end && $allDay) {
            // FullCalendar reports the day after the last selected one.
            $end = $end->subDay()->endOfDay();
        }

        return new self(
            start: CarbonImmutable::parse($start, $timezone),
            end: $end,
            allDay: $allDay,
            view: $view,
            resource: $resource,
        );
    }
}
