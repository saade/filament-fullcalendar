<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Closure;
use Illuminate\Support\Carbon;
use Saade\FilamentFullCalendar\Widgets\Forms\EditEventForm;
use Saade\FilamentFullCalendar\Widgets\Forms\CreateEventForm;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

trait CanManageEvents
{
    use AuthorizesActions;
    use CreateEventForm;
    use EditEventForm;
    use EvaluateClosures;

    protected bool $showCreateButton = true;

    protected function setUpForms(): void
    {
        if (static::canCreate()) {
            $this->createEventForm->fill();
        }

        if (static::canEdit()) {
            $this->editEventForm->fill();
        }
    }

    protected function getForms(): array
    {
        return [
            ...$this->getCreateEventForm(),
            ...$this->getEditEventForm(),
        ];
    }

    public function onEventClick($event): void
    {
        if (! static::canEdit($event)) {
            return;
        }

        $this->editEventForm->fill($event);

        $this->dispatchBrowserEvent('open-modal', ['id' => 'fullcalendar--edit-event-modal']);
    }

    public function onCreateEventClick($date = null): void
    {
        if (! static::canCreate()) {
            return;
        }

        if ($date) {
            $this->evaluate($this->handleCreateEventClickUsing(), [
                'date' => $date,
            ]);
        } else {
            $this->createEventForm->fill();
        }

        $this->dispatchBrowserEvent('open-modal', ['id' => 'fullcalendar--create-event-modal']);
    }

    protected function handleCreateEventClickUsing(): Closure
    {
        return function ($date, FullCalendarWidget $calendar) {
            $timezone = $this->config('timeZone', config('app.timezone'));

            if (isset($date['date'])) { // for single date click
                $end = $start = Carbon::parse($date['date'], $timezone);
            } else { // for date range select
                $start = Carbon::parse($date['start'], $timezone);
                $end = Carbon::parse($date['end'], $timezone);
                if ($date['allDay']) {
                    /**
                     *
                     * date is exclusive, read more https://fullcalendar.io/docs/select-callback
                     * For example, if the selection is all-day and the last day is a Thursday, end will be Friday.
                     */

                    $end->subDay()->endOfDay();
                }
            }

            $calendar->createEventForm->fill(['start' => $start, 'end' => $end]);
        };
    }
}
