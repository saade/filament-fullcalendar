<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\EditAction as BaseEditAction;
use Filament\Schemas\Schema;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class EditAction extends BaseEditAction
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->model(
            fn (FullCalendarWidget $livewire) => $livewire->getModel()
        );

        $this->record(
            fn (FullCalendarWidget $livewire) => $livewire->getEventRecord()
        );

        $this->schema(
            fn (FullCalendarWidget $livewire, Schema $schema) => $livewire->form($schema)
        );

        $this->after(
            fn (FullCalendarWidget $livewire) => $livewire->refreshRecords()
        );

        $this->cancelParentActions();
    }
}
