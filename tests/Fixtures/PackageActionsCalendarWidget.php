<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\Action;
use Saade\FilamentFullCalendar\Actions;

class PackageActionsCalendarWidget extends InfolistCalendarWidget
{
    protected function headerActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function modalActions(): array
    {
        return [
            Actions\EditAction::make(),
            Actions\DeleteAction::make(),
        ];
    }

    protected function viewAction(): Action
    {
        return Actions\ViewAction::make();
    }
}
