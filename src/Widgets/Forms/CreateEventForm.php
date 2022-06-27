<?php

namespace Saade\FilamentFullCalendar\Widgets\Forms;

use Filament\Forms;

trait CreateEventForm
{
    public $createEventFormState = [];

    public function onCreateEventSubmit()
    {
        $this->createEvent($this->createEventForm->getState());

        $this->dispatchBrowserEvent('close-modal', ['id' => 'fullcalendar--create-event-modal']);
    }

    public function createEvent(array $data): void
    {
        // Override this function and do whatever you want with $data
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
                ->schema(
                    array_map(
                        fn ($component) => $component->statePath('createEventFormState'),
                        static::getCreateEventFormSchema()
                    )
                ),
        ];
    }
}
