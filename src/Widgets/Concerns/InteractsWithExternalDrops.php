<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Carbon\CarbonImmutable;
use Carbon\CarbonInterval;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\HtmlString;
use LogicException;
use Saade\FilamentFullCalendar\Data\DateSelectInfo;
use Saade\FilamentFullCalendar\Data\ExternalDropInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

trait InteractsWithExternalDrops
{
    public function isDroppable(): bool
    {
        return (! $this->isReadOnly()) && data_get($this->getConfig(), 'droppable', false);
    }

    /**
     * The attributes that make any element an item that can be dragged onto
     * the calendar. Called on a widget class, the item is only accepted by
     * that widget; called on `FullCalendarWidget`, by any calendar.
     *
     * @param  array<string, mixed>  $data
     * @param  string | null  $duration  Hours and minutes, as in `02:30`.
     */
    public static function getDraggableAttributes(?Model $record = null, array $data = [], ?string $title = null, ?string $duration = null): HtmlString
    {
        $calendar = static::class === FullCalendarWidget::class ? null : static::class;

        if ($record && blank($calendar)) {
            throw new LogicException('A draggable item with a record has to be made by the widget it can be dropped on, as in [CalendarWidget::getDraggableAttributes(record: $record)].');
        }

        $item = json_encode([
            'calendar' => $calendar,
            'title' => $title,
            'duration' => $duration,
            'data' => $data,
            'record' => $record ? static::getDraggableRecordIdentity($record) : null,
        ]);

        return new HtmlString('data-filament-fullcalendar-draggable="' . e($item) . '"');
    }

    /**
     * @return array{model: string, key: int | string, signature: string}
     */
    public static function getDraggableRecordIdentity(Model $record): array
    {
        $model = $record->getMorphClass();
        $key = $record->getKey();

        return [
            'model' => $model,
            'key' => $key,
            'signature' => static::signEventRecordIdentity($model, $key),
        ];
    }

    /**
     * Called when an item from outside the calendar is dropped on it. An item
     * with a record is saved with the dates it was dropped on, and any other
     * item opens the create action.
     */
    protected function onExternalDrop(ExternalDropInfo $info): void
    {
        if (! $info->record) {
            $this->mountAction('create', [
                'type' => 'drop',
                'start' => $info->selection->start,
                'end' => $info->selection->end,
                'allDay' => $info->allDay,
                'resource' => $info->resource,
                'data' => $info->data,
            ]);

            $this->fillMountedActionFromSelection($info->selection);

            return;
        }

        if ($this->getAuthorizationResponse('update', $info->record)->denied()) {
            return;
        }

        foreach ($this->getSelectionRecordAttributes($info->selection) as $attribute => $value) {
            $info->record->setAttribute($attribute, $value);
        }

        $info->record->save();

        $this->refreshRecords();
    }

    /**
     * @internal Called by the calendar in the browser.
     *
     * @param  array{data?: array<string, mixed>, record?: array<string, mixed> | null, duration?: string | null}  $item
     * @param  array<string, mixed> | null  $resource
     */
    public function handleExternalDrop(array $item, string $date, bool $allDay, ?array $resource = null): void
    {
        abort_unless($this->isDroppable(), 403);

        $timezone = $this->getTimezone();
        $duration = filled($item['duration'] ?? null) ? $this->makeDropDuration($item['duration']) : null;
        $droppedAt = CarbonImmutable::parse($date, $timezone);

        $end = match (true) {
            $allDay => $droppedAt->add($duration?->totalDays >= 1 ? $duration : CarbonInterval::day())->subSecond(),
            default => $droppedAt->add($duration ?? CarbonInterval::hour()),
        };

        $this->eventRecord = is_array($item['record'] ?? null)
            ? $this->resolveEventRecordFromIdentity($item['record'])
            : null;

        $this->onExternalDrop(new ExternalDropInfo(
            date: $droppedAt,
            allDay: $allDay,
            selection: new DateSelectInfo($droppedAt, $end, $allDay, resource: $resource),
            data: $item['data'] ?? [],
            record: $this->eventRecord,
            duration: $duration,
            resource: $resource,
        ));
    }

    /**
     * @param  string  $duration  Hours and minutes, as in `02:30`.
     */
    protected function makeDropDuration(string $duration): CarbonInterval
    {
        [$hours, $minutes] = array_map(intval(...), [...explode(':', $duration), 0]);

        return CarbonInterval::hours($hours)->minutes($minutes);
    }
}
