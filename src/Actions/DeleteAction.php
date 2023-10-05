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
            function (FullCalendarWidget $livewire) {
                $livewire->record = null;
                $livewire->refreshRecords();
            }
        );

        $this->cancelParentActions();
    }
}
