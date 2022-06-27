<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Saade\FilamentFullCalendar\Widgets\Forms\CreateEventForm;
use Saade\FilamentFullCalendar\Widgets\Forms\EditEventForm;

trait CanManageEvents
{
    use CreateEventForm;
    use EditEventForm;

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

        $this->createEventForm->fill();

        $this->dispatchBrowserEvent('open-modal', ['id' => 'fullcalendar--create-event-modal']);
    }
}
