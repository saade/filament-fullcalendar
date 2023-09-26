<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\DeleteAction as BaseDeleteAction;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class DeleteAction extends BaseDeleteAction
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->model(
            fn (FullCalendarWidget $livewire) => $livewire->getModel()
        );

        $this->record(
            fn (FullCalendarWidget $livewire) => $livewire->getRecord()
        );

        $this->after(
            fn (FullCalendarWidget $livewire) => $livewire->refreshRecords()
        );

        $this->cancelParentActions();
    }
}
