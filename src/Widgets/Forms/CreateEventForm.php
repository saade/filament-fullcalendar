<?php

namespace Saade\FilamentFullCalendar\Widgets\Forms;

use Filament\Forms;
use Illuminate\Database\Eloquent\Model;

trait CreateEventForm
{
    public $createEventFormState = [];

    public function onCreateEventSubmit()
    {
        $eventModel = $this->createEvent($this->createEventForm->getState());
        if ($eventModel) {
            $this->createEventForm->model($eventModel);
            $this->createEventForm->saveRelationships();
        }

        $this->dispatchBrowserEvent('close-modal', ['id' => 'fullcalendar--create-event-modal']);
    }

    public function createEvent(array $data): ?Model
    {
        // Override this function and do whatever you want with $data
        return null;
    }

    protected static function getCreateEventFormSchema(): array
    {
        return [
            Forms\Components\TextInput::make('title')
                ->required(),
            Forms\Components\DatePicker::make('start')
                ->required(),
            Forms\Components\DatePicker::make('end')
                ->default(null),
        ];
    }

    protected function getCreateEventForm(): array
    {
        return [
            'createEventForm' => $this->makeForm()
                ->model($this->getFormModel()::getModel())
                ->schema(static::getCreateEventFormSchema())
                ->statePath('createEventFormState'),
        ];
    }
}
