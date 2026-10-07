<?php

namespace Saade\FilamentFullCalendar\Data;

use Carbon\CarbonImmutable;
use Carbon\CarbonInterval;
use Illuminate\Database\Eloquent\Model;

final readonly class ExternalDropInfo
{
    /**
     * @param  CarbonImmutable  $date  Where the item was dropped, in the calendar's timezone.
     * @param  bool  $allDay  Whether it was dropped on a whole day and not on a time slot.
     * @param  DateSelectInfo  $selection  The dates the item takes up: from where it was dropped for as long as its duration.
     * @param  array<string, mixed>  $data  The `data` given to the draggable item.
     * @param  Model | null  $record  The `record` given to the draggable item.
     * @param  CarbonInterval | null  $duration  The `duration` given to the draggable item.
     * @param  array<string, mixed> | null  $resource
     */
    public function __construct(
        public CarbonImmutable $date,
        public bool $allDay,
        public DateSelectInfo $selection,
        public array $data = [],
        public ?Model $record = null,
        public ?CarbonInterval $duration = null,
        public ?array $resource = null,
    ) {
    }
}
