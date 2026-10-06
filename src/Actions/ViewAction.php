<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\ViewAction as BaseViewAction;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

/**
 * @deprecated Use `Filament\Actions\ViewAction` instead.
 */
class ViewAction extends BaseViewAction
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->modalFooterActions(
            fn (ViewAction $action, FullCalendarWidget $livewire) => [
                ...$livewire->getCachedFormActions(),
                $action->getModalCancelAction(),
            ]
        );

        $this->cancelParentActions();
    }
}
