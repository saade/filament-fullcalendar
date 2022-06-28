<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Saade\FilamentFullCalendar\Widgets\Forms\CreateEventForm;
use Saade\FilamentFullCalendar\Widgets\Forms\EditEventForm;

trait CanManageEvents
{
    use AuthorizesActions;
    use CreateEventForm;
    use EditEventForm;

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

    public function onCreateEventClick(): void
    {
        if (! static::canCreate()) {
            return;
        }

        $this->dispatchBrowserEvent('open-modal', ['id' => 'fullcalendar--create-event-modal']);
    }

    public function onEventSelect(string $start, string $end, bool $allDay): void
    {
        if (! static::canSelect()) {
            return;
        }

        $this->createEventForm->fill(['start' => $start, 'end' => $end, 'allDay' => $allDay]);

        $this->dispatchBrowserEvent('open-modal', ['id' => 'fullcalendar--create-event-modal']);
    }
}
