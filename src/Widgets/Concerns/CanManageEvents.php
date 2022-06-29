<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Saade\FilamentFullCalendar\Widgets\Forms\CreateEventForm;
use Saade\FilamentFullCalendar\Widgets\Forms\EditEventForm;

trait CanManageEvents
{
    use AuthorizesActions;
    use CreateEventForm;
    use EditEventForm;

    public ?int $record_id = null;

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

        $this->record_id = $event['id'] ?? null;

        $this->dispatchBrowserEvent('open-modal', ['id' => 'fullcalendar--edit-event-modal']);
    }

    public function onCreateEventClick(): void
    {
        if (! static::canCreate()) {
            return;
        }

        $this->dispatchBrowserEvent('open-modal', ['id' => 'fullcalendar--create-event-modal']);
    }
}
