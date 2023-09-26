<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Carbon\Carbon;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

trait InteractsWithEvents
{
    /**
     * Triggered when the user clicks an event.
     * @param array $event An Event Object that holds information about the event (date, title, etc).
     * @return void
     */
    public function onEventClick(array $event): void
    {
        if ($this->getModel()) {
            $this->record = $this->resolveRecord($event['id']);
        }

        $this->mountAction('view', [
            'type' => 'click',
            'event' => $event,
        ]);
    }

    /**
     * Triggered when dragging stops and the event has moved to a different day/time.
     * @param array $event An Event Object that holds information about the event (date, title, etc) after the drop.
     * @param array $oldEvent An Event Object that holds information about the event before the drop.
     * @param array $relatedEvents An array of other related Event Objects that were also dropped. An event might have other recurring event instances or might be linked to other events with the same groupId
     * @param array $delta A Duration Object that represents the amount of time the event was moved by.
     * @return bool Wether to revert the drop action.
     */
    public function onEventDrop(array $event, array $oldEvent, array $relatedEvents, array $delta): bool
    {
        if ($this->getModel()) {
            $this->record = $this->resolveRecord($event['id']);
        }

        $this->mountAction('edit', [
            'type' => 'drop',
            'event' => $event,
            'oldEvent' => $oldEvent,
            'relatedEvents' => $relatedEvents,
            'delta' => $delta,
        ]);

        return false;
    }

    /**
     * Triggered when resizing stops and the event has changed in duration.
     * @param array $event An Event Object that holds information about the event (date, title, etc) after the drop.
     * @param array $oldEvent An Event Object that holds information about the event before the drop.
     * @param array $relatedEvents An array of other related Event Objects that were also dropped. An event might have other recurring event instances or might be linked to other events with the same groupId
     * @param array $startDelta A Duration Object that represents the amount of time the event’s start date was moved by.
     * @param array $endDelta A Duration Object that represents the amount of time the event’s end date was moved by.
     * @return mixed Wether to revert the resize action.
     */
    public function onEventResize(array $event, array $oldEvent, array $relatedEvents, array $startDelta, array $endDelta): bool
    {
        if ($this->getModel()) {
            $this->record = $this->resolveRecord($event['id']);
        }

        $this->mountAction('edit', [
            'type' => 'resize',
            'event' => $event,
            'oldEvent' => $oldEvent,
            'relatedEvents' => $relatedEvents,
            'startDelta' => $startDelta,
            'endDelta' => $endDelta,
        ]);

        return false;
    }

    /**
     * Triggered when a date/time selection is made (single or multiple days).
     * @param string $start An ISO8601 string representation of the start date. It will have a timezone offset similar to the calendar’s timeZone. If selecting all-day cells, it won’t have a time nor timezone part.
     * @param string $end An ISO8601 string representation of the end date. It will have a timezone offset similar to the calendar’s timeZone. If selecting all-day cells, it won’t have a time nor timezone part.
     * @param bool $allDay Whether the selection happened on all-day cells.
     * @return void
     */
    public function onDateSelect(string $start, ?string $end, bool $allDay): void
    {
        [$start, $end] = $this->calculateTimezoneOffset($start, $end, $allDay);

        $this->mountAction('create', [
            'type' => 'select',
            'start' => $start,
            'end' => $end,
            'allDay' => $allDay,
        ]);
    }

    public function refreshRecords(): void
    {
        $this->dispatch('filament-fullcalendar--refresh');
    }

    protected function calculateTimezoneOffset(string $start, ?string $end, bool $allDay): array
    {
        $timezone = FilamentFullCalendarPlugin::make()->getTimezone();

        $start = Carbon::parse($start, $timezone);

        if ($end) {
            $end = Carbon::parse($end, $timezone);
        }

        if (! is_null($end) && $allDay) {
            /**
             * date is exclusive, read more https://fullcalendar.io/docs/select-callback
             * For example, if the selection is all-day and the last day is a Thursday, end will be Friday.
             */
            $end->subDay()->endOfDay();
        }

        return [$start, $end, $allDay];
    }
}
