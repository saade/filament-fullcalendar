<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Data\EventSourceData;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Data\ResourceData;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class ColoredCalendarWidget extends FullCalendarWidget
{
    /**
     * @var array<int, mixed>
     */
    public array $events = [];

    public function fetchEvents(FetchInfo $info): array
    {
        return $this->events ?: [
            EventData::make()->title('Approved')->start('2026-10-06')->color('success'),
            ['title' => 'Rejected', 'start' => '2026-10-07', 'color' => 'danger', 'classNames' => ['mine']],
            ['title' => 'Neutral', 'start' => '2026-10-08', 'color' => 'gray'],
            ['title' => 'None', 'start' => '2026-10-09'],
            EventData::make()->title('Filled')->start('2026-10-10')->backgroundColor('#16a34a'),
            EventData::make()->title('Both')->start('2026-10-11')->backgroundColor('#fde047')->borderColor('#000')->textColor('#000'),
        ];
    }

    public function eventSources(): array
    {
        return [
            EventSourceData::iCalendar('https://example.com/a.ics')->color('warning'),
            EventSourceData::iCalendar('https://example.com/b.ics')->backgroundColor('#000')->borderColor('#333'),
        ];
    }

    public function fetchResources(?FetchInfo $info = null): array
    {
        return [
            ResourceData::make()->id('a')->eventColor('info')->children([
                ResourceData::make()->id('b')->eventColor('danger'),
            ]),
            ResourceData::make()->id('c')->eventBackgroundColor('teal'),
        ];
    }
}
