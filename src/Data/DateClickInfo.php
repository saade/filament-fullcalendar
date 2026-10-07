<?php

namespace Saade\FilamentFullCalendar\Data;

use Carbon\CarbonImmutable;

final readonly class DateClickInfo
{
    /**
     * @param  CarbonImmutable  $date  The date or time that was clicked, in the calendar's timezone.
     * @param  DateSelectInfo  $selection  The clicked day or time slot as a selection, which is what a click on a selectable calendar also is.
     * @param  array<string, mixed> | null  $view
     * @param  array<string, mixed> | null  $resource
     */
    public function __construct(
        public CarbonImmutable $date,
        public bool $allDay,
        public DateSelectInfo $selection,
        public ?array $view = null,
        public ?array $resource = null,
    ) {
    }

    /**
     * @param  string | null  $selectionEnd  The end FullCalendar reported for the clicked cell, when it reported one.
     * @param  array<string, mixed> | null  $view
     * @param  array<string, mixed> | null  $resource
     */
    public static function make(string $date, bool $allDay, ?array $view, ?array $resource, ?string $selectionEnd, string $timezone): self
    {
        $clickedDate = CarbonImmutable::parse($date, $timezone);

        $selection = filled($selectionEnd)
            ? DateSelectInfo::make($date, $selectionEnd, $allDay, $view, $resource, $timezone)
            : new DateSelectInfo(
                start: $clickedDate,
                end: $allDay ? $clickedDate->endOfDay() : null,
                allDay: $allDay,
                view: $view,
                resource: $resource,
            );

        return new self(
            date: $clickedDate,
            allDay: $allDay,
            selection: $selection,
            view: $view,
            resource: $resource,
        );
    }
}
