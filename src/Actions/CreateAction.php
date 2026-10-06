<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\CreateAction as BaseCreateAction;
use Filament\Schemas\Schema;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class CreateAction extends BaseCreateAction
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->model(
            fn (FullCalendarWidget $livewire) => $livewire->getModel()
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
