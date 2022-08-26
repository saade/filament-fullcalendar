<?php

namespace Saade\FilamentFullCalendar\Widgets\Forms;

use Filament\Forms;

trait EditEventForm
{
    public $editEventFormState = [];

    public function onEditEventSubmit(): void
    {
        $this->editEvent($this->editEventForm->getState());

        $this->dispatchBrowserEvent('close-modal', ['id' => 'fullcalendar--edit-event-modal']);
    }

    public function editEvent(array $data): void
    {
        // Override this function and do whatever you want with $data
    }

    protected static function getEditEventFormSchema(): array
    {
        return [
            Forms\Components\TextInput::make('title')
                ->required(),
            Forms\Components\DateTimePicker::make('start')
                ->required(),
            Forms\Components\DateTimePicker::make('end')
                ->default(null),
        ];
    }

    protected function getEditEventForm(): array
    {
        return [
            'editEventForm' => $this->makeForm()
                ->model($this->getFormModel())
                ->schema(static::getEditEventFormSchema())
                ->statePath('editEventFormState'),
        ];
    }
}
