<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Carbon\CarbonImmutable;
use Carbon\CarbonInterval;
use DateTimeInterface;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use LogicException;
use Saade\FilamentFullCalendar\Contracts\Eventable;
use Saade\FilamentFullCalendar\Data\DateClickInfo;
use Saade\FilamentFullCalendar\Data\DateSelectInfo;
use Saade\FilamentFullCalendar\Data\EventClickInfo;
use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Data\EventDropInfo;
use Saade\FilamentFullCalendar\Data\EventInfo;
use Saade\FilamentFullCalendar\Data\EventResizeInfo;
use Saade\FilamentFullCalendar\Data\FetchInfo;

trait InteractsWithEvents
{
    /**
     * The model attribute that holds when an event starts. When it is set,
     * dragging or resizing an event saves its new dates.
     */
    protected ?string $startAttribute = null;

    protected ?string $endAttribute = null;

    /**
     * Whether a dragged or resized event opens the edit action with its new
     * dates filled in, instead of being saved straight away.
     */
    protected bool $shouldConfirmEventChanges = false;

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
        return $this->changeEventDates($info->event, [
            'type' => 'drop',
            'event' => $info->event->toArray(),
            'oldEvent' => $info->oldEvent->toArray(),
            'relatedEvents' => array_map(fn (EventInfo $event): array => $event->toArray(), $info->relatedEvents),
            'delta' => $info->delta->toArray(),
            'oldResource' => $info->oldResource,
            'newResource' => $info->newResource,
        ]);
    }

    /**
     * Called when an event was resized. Opens the edit action.
     *
     * @return bool Whether to resize the event back to what it was.
     */
    protected function onEventResize(EventResizeInfo $info): bool
    {
        return $this->changeEventDates($info->event, [
            'type' => 'resize',
            'event' => $info->event->toArray(),
            'oldEvent' => $info->oldEvent->toArray(),
            'relatedEvents' => array_map(fn (EventInfo $event): array => $event->toArray(), $info->relatedEvents),
            'startDelta' => $info->startDelta->toArray(),
            'endDelta' => $info->endDelta->toArray(),
        ]);
    }

    /**
     * @param  array<string, mixed>  $arguments  Passed to the edit action when it is opened.
     * @return bool Whether to put the event back where it was.
     */
    protected function changeEventDates(EventInfo $event, array $arguments): bool
    {
        $record = $this->getEventRecord();

        $canSaveDates = $record && filled($this->getStartAttribute());

        if ($canSaveDates) {
            foreach ($this->getEventRecordDates($event) as $attribute => $date) {
                $record->setAttribute($attribute, $date);
            }
        }

        if ((! $canSaveDates) || $this->shouldConfirmEventChanges()) {
            $this->mountAction('edit', $arguments);

            return blank($this->mountedActions);
        }

        if ($this->getAuthorizationResponse('update', $record)->denied()) {
            return true;
        }

        $record->save();

        $this->refreshRecords();

        return false;
    }

    /**
     * The dates to store for an event as the calendar reports it. An all-day
     * event is stored from the start of its first day to the end of its last
     * day, where FullCalendar reports the day after the last one as its end.
     *
     * @return array<string, CarbonImmutable>
     */
    protected function getEventRecordDates(EventInfo $event): array
    {
        $timezone = config('app.timezone');

        if ($event->allDay) {
            $start = CarbonImmutable::parse($event->start->toDateString(), $timezone);

            $end = $event->end
                ? CarbonImmutable::parse($event->end->toDateString(), $timezone)->subDay()->endOfDay()
                : $start->endOfDay();
        } else {
            $start = $event->start->setTimezone($timezone);
            $end = $event->end?->setTimezone($timezone);
        }

        return array_filter([
            $this->getStartAttribute() => $start,
            $this->getEndAttribute() ?? '' => $end,
        ], fn (?CarbonImmutable $date, string $attribute): bool => filled($attribute) && $date, ARRAY_FILTER_USE_BOTH);
    }

    protected function getStartAttribute(): ?string
    {
        return $this->startAttribute;
    }

    protected function getEndAttribute(): ?string
    {
        return $this->endAttribute;
    }

    protected function shouldConfirmEventChanges(): bool
    {
        return $this->shouldConfirmEventChanges;
    }

    /**
     * Called when a single date or time slot is clicked or tapped. Treats it
     * as a selection of that day or slot.
     */
    protected function onDateClick(DateClickInfo $info): void
    {
        $this->onDateSelect($info->selection);
    }

    /**
     * Called when a range of dates is selected by dragging. Opens the create action.
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

    /**
     * Fetch the events again.
     */
    public function refreshRecords(): void
    {
        $this->dispatchCalendarEvent('refresh');
    }

    public function goToDate(DateTimeInterface | string $date): void
    {
        $this->dispatchCalendarEvent('goto', [
            'date' => $date instanceof DateTimeInterface ? $date->format(DateTimeInterface::ATOM) : $date,
        ]);
    }

    /**
     * @param  string  $view  A FullCalendar view name, such as `dayGridMonth` or `timeGridWeek`.
     */
    public function changeView(string $view): void
    {
        $this->dispatchCalendarEvent('view', ['view' => $view]);
    }

    public function next(): void
    {
        $this->dispatchCalendarEvent('next');
    }

    public function previous(): void
    {
        $this->dispatchCalendarEvent('prev');
    }

    public function today(): void
    {
        $this->dispatchCalendarEvent('today');
    }

    /**
     * Tell this calendar, and no other one on the page, to do something.
     *
     * @param  array<string, mixed>  $detail
     */
    protected function dispatchCalendarEvent(string $name, array $detail = []): void
    {
        $this->dispatch("filament-fullcalendar--{$name}", ...$detail, calendar: $this->getId());
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array{start: string, end: string, timezone?: string}  $info
     * @return array<mixed>
     */
    public function handleFetchEvents(array $info): array
    {
        $events = $this->fetchEvents(FetchInfo::fromArray($info, $this->getTimezone()));

        if (($events instanceof Builder) || ($events instanceof Relation)) {
            $events = $events->get();
        }

        return collect($events)
            ->map($this->normalizeEvent(...))
            ->values()
            ->all();
    }

    /**
     * @return array<string, mixed>
     */
    protected function normalizeEvent(mixed $event): array
    {
        if ($event instanceof Eventable) {
            return $this->getEventFromRecord($event);
        }

        if ($event instanceof Arrayable) {
            return $event->toArray();
        }

        return $event;
    }

    /**
     * @return array<string, mixed>
     */
    protected function getEventFromRecord(Eventable $record): array
    {
        if (! $record instanceof Model) {
            throw new LogicException('[' . $record::class . '] implements Eventable but is not an Eloquent model.');
        }

        $event = $record->toCalendarEvent();

        if ($event instanceof EventData) {
            $event = $event->toArray();
        }

        $identity = $this->getEventRecordIdentity($record);

        return [
            ...$event,
            'id' => $event['id'] ?? "{$identity['model']}-{$identity['key']}",
            'extendedProps' => [
                ...($event['extendedProps'] ?? []),
                'calendarRecord' => $identity,
            ],
        ];
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
        $this->onDateSelect(DateSelectInfo::make($start, $end, $allDay, $view, $resource, $this->getTimezone()));
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array<string, mixed> | null  $view
     * @param  array<string, mixed> | null  $resource
     */
    public function handleDateClick(string $date, bool $allDay, ?array $view = null, ?array $resource = null, ?string $selectionEnd = null): void
    {
        $this->onDateClick(DateClickInfo::make($date, $allDay, $view, $resource, $selectionEnd, $this->getTimezone()));
    }

    /**
     * @param  array<string, mixed>  $event
     */
    protected function makeEventInfo(array $event): EventInfo
    {
        return EventInfo::fromArray($event, $this->getTimezone());
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
        $identity = $event->extendedProps['calendarRecord'] ?? null;

        if (is_array($identity)) {
            $this->eventRecord = $this->resolveEventRecordFromIdentity($identity);

            return;
        }

        if (blank($this->getModel())) {
            return;
        }

        if (blank($event->id)) {
            throw new LogicException('The event has no [id], so its [' . $this->getModel() . '] record cannot be found. Return an [id] for each event from fetchEvents().');
        }

        $this->eventRecord = $this->resolveEventRecord($event->id);
    }
}
