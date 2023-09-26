<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\ViewAction as BaseViewAction;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class ViewAction extends BaseViewAction
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

        $this->form(
            fn (FullCalendarWidget $livewire) => $livewire->getFormSchema()
        );

        $this->modalFooterActions(
            fn (ViewAction $action, FullCalendarWidget $livewire) => [
                ...$livewire->getCachedModalActions(),
                $action->getModalCancelAction(),
            ]
        );

        $this->after(
            fn (FullCalendarWidget $livewire) => $livewire->refreshRecords()
        );

        $this->cancelParentActions();
    }
}
