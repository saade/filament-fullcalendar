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
use Saade\FilamentFullCalendar\Data\DatesSetInfo;
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
        if (! $this->getEventRecord()) {
            return;
        }

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

        if (! $record) {
            return true;
        }

        // The dates of an occurrence say nothing about where its series
        // starts, so they are never written to the record.
        if ($event->isRecurring && filled($this->getStartAttribute())) {
            return true;
        }

        $canSaveDates = filled($this->getStartAttribute());

        if ($canSaveDates) {
            foreach ($this->getEventRecordDates($event) as $attribute => $date) {
                $record->setAttribute($attribute, $date);
            }

            $resourceId = $arguments['newResource']['id'] ?? null;

            if (filled($this->getResourceAttribute()) && filled($resourceId)) {
                $record->setAttribute($this->getResourceAttribute(), $resourceId);
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

            // An event dragged from the all-day section to a time slot arrives
            // without an end and is shown with the default duration.
            $end = $event->end?->setTimezone($timezone) ?? $start->add($this->getDefaultTimedEventDuration());
        }

        return array_filter([
            $this->getStartAttribute() => $start,
            $this->getEndAttribute() ?? '' => $end,
        ], fn (?CarbonImmutable $date, string $attribute): bool => filled($attribute) && $date, ARRAY_FILTER_USE_BOTH);
    }

    protected function getDefaultTimedEventDuration(): CarbonInterval
    {
        $duration = data_get($this->getConfig(), 'defaultTimedEventDuration', '01:00');

        if (is_numeric($duration)) {
            return CarbonInterval::milliseconds((int) $duration)->cascade();
        }

        if (is_array($duration)) {
            return $this->makeInterval($duration)->add(CarbonInterval::create(
                years: 0,
                weeks: (int) ($duration['weeks'] ?? $duration['week'] ?? 0),
                hours: (int) ($duration['hours'] ?? $duration['hour'] ?? 0),
                minutes: (int) ($duration['minutes'] ?? $duration['minute'] ?? 0),
                seconds: (int) ($duration['seconds'] ?? $duration['second'] ?? 0),
            ));
        }

        [$hours, $minutes, $seconds] = array_map(intval(...), [...explode(':', (string) $duration), 0, 0]);

        return CarbonInterval::hours($hours)->minutes($minutes)->seconds($seconds);
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

        $this->fillMountedActionFromSelection($info);
    }

    /**
     * Written into the form after the action has filled it, so the fields'
     * `default()` values are kept.
     */
    protected function fillMountedActionFromSelection(DateSelectInfo $info): void
    {
        $index = array_key_last($this->mountedActions);

        if ($index === null) {
            return;
        }

        foreach ($this->getSelectionRecordAttributes($info) as $attribute => $value) {
            data_set($this->mountedActions[$index]['data'], $attribute, $value);
        }
    }

    /**
     * @return array<string, int | string>
     */
    protected function getSelectionRecordAttributes(DateSelectInfo $info): array
    {
        if (blank($this->getStartAttribute())) {
            return [];
        }

        $timezone = config('app.timezone');

        $toApplicationTime = fn (CarbonImmutable $date): string => $info->allDay
            ? $date->toDateTimeString()
            : $date->setTimezone($timezone)->toDateTimeString();

        return array_filter([
            $this->getStartAttribute() => $toApplicationTime($info->start),
            $this->getEndAttribute() ?? '' => $info->end ? $toApplicationTime($info->end) : null,
            $this->getResourceAttribute() ?? '' => $info->resource['id'] ?? null,
        ], fn (mixed $value, string $attribute): bool => filled($attribute) && filled($value), ARRAY_FILTER_USE_BOTH);
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
     * @param  DateTimeInterface | string | null  $date  A date to go to at the same time.
     */
    public function changeView(string $view, DateTimeInterface | string | null $date = null): void
    {
        $this->dispatchCalendarEvent('view', [
            'view' => $view,
            ...filled($date) ? ['date' => $date instanceof DateTimeInterface ? $date->format(DateTimeInterface::ATOM) : $date] : [],
        ]);
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
     * @param  string  $time  A time of day, as in `08:00`.
     */
    public function scrollToTime(string $time): void
    {
        $this->dispatchCalendarEvent('scroll', ['time' => $time]);
    }

    /**
     * The change lasts until the page is loaded again. An option the
     * calendar should start with belongs in `config()`.
     */
    public function setOption(string $option, mixed $value): void
    {
        if (in_array($option, ['editable', 'selectable', 'droppable', 'timeZone', 'plugins', 'locales', 'events', 'eventSources', 'resources'], strict: true)) {
            throw new LogicException("[{$option}] cannot be changed with setOption(), because the server has to know about it as well. Set it in config().");
        }

        $this->dispatchCalendarEvent('option', ['option' => $option, 'value' => $value]);
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

        if ($events instanceof Relation) {
            $this->modifyQueryWithActiveTab($events->getQuery());
        }

        if ($events instanceof Builder) {
            $events = $this->modifyQueryWithActiveTab($events);
        }

        if (($events instanceof Builder) || ($events instanceof Relation)) {
            $events = $events->get();
        }

        return collect($events)
            ->map($this->normalizeEvent(...))
            ->values()
            ->all();
    }

    /**
     * Only called by the browser when the widget defines `onDatesSet()`.
     *
     * @param  array{view: string, title: string, start: string, end: string, currentStart: string, currentEnd: string}  $info
     */
    public function handleDatesSet(array $info): void
    {
        if (! method_exists($this, 'onDatesSet')) {
            return;
        }

        $this->onDatesSet(DatesSetInfo::fromArray($info, $this->getTimezone()));
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
        if (! $this->isEditable()) {
            return true;
        }

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
        if (! $this->isEditable()) {
            return true;
        }

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
        if (! $this->isSelectable()) {
            return;
        }

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
        if (! $this->isSelectable()) {
            return;
        }

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
        $this->eventRecord = null;

        $identity = $event->extendedProps['calendarRecord'] ?? null;

        if (is_array($identity)) {
            $this->eventRecord = $this->resolveEventRecordFromIdentity($identity);

            return;
        }

        // An id from another source, such as a feed, is not a key of the model.
        if (blank($this->getModel()) || blank($event->id) || ($event->source !== EventInfo::OWN_SOURCE)) {
            return;
        }

        $this->eventRecord = $this->resolveEventRecord($event->id);
    }
}
