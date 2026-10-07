<?php

namespace Saade\FilamentFullCalendar\Data;

use Carbon\CarbonImmutable;

final readonly class DatesSetInfo
{
    /**
     * @param  string  $view  The type of the view, such as `dayGridMonth`.
     * @param  string  $title  The title the toolbar shows for the view.
     * @param  CarbonImmutable  $start  Start of the visible range, in the application's timezone. A month view starts in the last days of the month before.
     * @param  CarbonImmutable  $end  End of the visible range (exclusive), in the application's timezone.
     * @param  CarbonImmutable  $currentStart  Start of the period the view is about, such as the first day of the month.
     * @param  CarbonImmutable  $currentEnd  End of that period (exclusive).
     * @param  string  $timezone  The calendar's timezone.
     */
    public function __construct(
        public string $view,
        public string $title,
        public CarbonImmutable $start,
        public CarbonImmutable $end,
        public CarbonImmutable $currentStart,
        public CarbonImmutable $currentEnd,
        public string $timezone,
    ) {
    }

    /**
     * @param  array{view: string, title: string, start: string, end: string, currentStart: string, currentEnd: string}  $info
     */
    public static function fromArray(array $info, string $timezone): self
    {
        $parse = fn (string $date): CarbonImmutable => CarbonImmutable::parse($date, $timezone)->setTimezone(config('app.timezone'));

        return new self(
            view: $info['view'],
            title: $info['title'],
            start: $parse($info['start']),
            end: $parse($info['end']),
            currentStart: $parse($info['currentStart']),
            currentEnd: $parse($info['currentEnd']),
            timezone: $timezone,
        );
    }
}
