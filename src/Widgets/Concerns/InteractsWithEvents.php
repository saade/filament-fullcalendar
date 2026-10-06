<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Carbon\CarbonInterval;
use LogicException;
use Saade\FilamentFullCalendar\Data\DateSelectInfo;
use Saade\FilamentFullCalendar\Data\EventClickInfo;
use Saade\FilamentFullCalendar\Data\EventDropInfo;
use Saade\FilamentFullCalendar\Data\EventInfo;
use Saade\FilamentFullCalendar\Data\EventResizeInfo;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

trait InteractsWithEvents
{
    /**
     * Called when an event is clicked. Opens the view action.
     */
    protected function onEventClick(EventClickInfo $info): void
    {
        $this->mountAction('view', [
            'type' => 'click',
            'event' => $info->event->toArray(),
        ]);
    }

    /**
     * Called when an event was dragged to another date or resource. Opens the edit action.
     *
     * @return bool Whether to move the event back to where it was.
     */
    protected function onEventDrop(EventDropInfo $info): bool
    {
        $this->mountAction('edit', [
            'type' => 'drop',
            'event' => $info->event->toArray(),
            'oldEvent' => $info->oldEvent->toArray(),
            'relatedEvents' => array_map(fn (EventInfo $event): array => $event->toArray(), $info->relatedEvents),
            'delta' => $info->delta->toArray(),
            'oldResource' => $info->oldResource,
            'newResource' => $info->newResource,
        ]);

        return false;
    }

    /**
     * Called when an event was resized. Opens the edit action.
     *
     * @return bool Whether to resize the event back to what it was.
     */
    protected function onEventResize(EventResizeInfo $info): bool
    {
        $this->mountAction('edit', [
            'type' => 'resize',
            'event' => $info->event->toArray(),
            'oldEvent' => $info->oldEvent->toArray(),
            'relatedEvents' => array_map(fn (EventInfo $event): array => $event->toArray(), $info->relatedEvents),
            'startDelta' => $info->startDelta->toArray(),
            'endDelta' => $info->endDelta->toArray(),
        ]);

        return false;
    }

    /**
     * Called when a date is clicked or a range of dates is selected. Opens the create action.
     */
    protected function onDateSelect(DateSelectInfo $info): void
    {
        $this->mountAction('create', [
            'type' => 'select',
            'start' => $info->start,
            'end' => $info->end,
            'allDay' => $info->allDay,
            'resource' => $info->resource,
        ]);
    }

    public function refreshRecords(): void
    {
        $this->dispatch('filament-fullcalendar--refresh');
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array{start: string, end: string, timezone?: string}  $info
     * @return array<mixed>
     */
    public function handleFetchEvents(array $info): array
    {
        return $this->fetchEvents(FetchInfo::fromArray($info, $this->getCalendarTimezone()));
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array<string, mixed>  $event
     */
    public function handleEventClick(array $event): void
    {
        $info = new EventClickInfo($this->makeEventInfo($event));

        $this->resolveClickedEventRecord($info->event);

        $this->onEventClick($info);
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array<string, mixed>  $event
     * @param  array<string, mixed>  $oldEvent
     * @param  array<array<string, mixed>>  $relatedEvents
     * @param  array<string, int | float>  $delta
     * @param  array<string, mixed> | null  $oldResource
     * @param  array<string, mixed> | null  $newResource
     */
    public function handleEventDrop(array $event, array $oldEvent, array $relatedEvents, array $delta, ?array $oldResource = null, ?array $newResource = null): bool
    {
        $info = new EventDropInfo(
            event: $this->makeEventInfo($event),
            oldEvent: $this->makeEventInfo($oldEvent),
            relatedEvents: array_map($this->makeEventInfo(...), $relatedEvents),
            delta: $this->makeInterval($delta),
            oldResource: $oldResource,
            newResource: $newResource,
        );

        $this->resolveClickedEventRecord($info->event);

        return $this->onEventDrop($info);
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array<string, mixed>  $event
     * @param  array<string, mixed>  $oldEvent
     * @param  array<array<string, mixed>>  $relatedEvents
     * @param  array<string, int | float>  $startDelta
     * @param  array<string, int | float>  $endDelta
     */
    public function handleEventResize(array $event, array $oldEvent, array $relatedEvents, array $startDelta, array $endDelta): bool
    {
        $info = new EventResizeInfo(
            event: $this->makeEventInfo($event),
            oldEvent: $this->makeEventInfo($oldEvent),
            relatedEvents: array_map($this->makeEventInfo(...), $relatedEvents),
            startDelta: $this->makeInterval($startDelta),
            endDelta: $this->makeInterval($endDelta),
        );

        $this->resolveClickedEventRecord($info->event);

        return $this->onEventResize($info);
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array<string, mixed> | null  $view
     * @param  array<string, mixed> | null  $resource
     */
    public function handleDateSelect(string $start, ?string $end, bool $allDay, ?array $view = null, ?array $resource = null): void
    {
        $this->onDateSelect(DateSelectInfo::make($start, $end, $allDay, $view, $resource, $this->getCalendarTimezone()));
    }

    protected function getCalendarTimezone(): string
    {
        return FilamentFullCalendarPlugin::get()->getTimezone();
    }

    /**
     * @param  array<string, mixed>  $event
     */
    protected function makeEventInfo(array $event): EventInfo
    {
        return EventInfo::fromArray($event, $this->getCalendarTimezone());
    }

    /**
     * @param  array<string, int | float>  $duration  A FullCalendar duration: years, months, days and milliseconds.
     */
    protected function makeInterval(array $duration): CarbonInterval
    {
        return CarbonInterval::create(
            years: (int) ($duration['years'] ?? 0),
            months: (int) ($duration['months'] ?? 0),
            days: (int) ($duration['days'] ?? 0),
            microseconds: (int) (($duration['milliseconds'] ?? 0) * 1000),
        );
    }

    protected function resolveClickedEventRecord(EventInfo $event): void
    {
        if (blank($this->getModel())) {
            return;
        }

        if (blank($event->id)) {
            throw new LogicException('The event has no [id], so its [' . $this->getModel() . '] record cannot be found. Return an [id] for each event from fetchEvents().');
        }

        $this->eventRecord = $this->resolveEventRecord($event->id);
    }
}
