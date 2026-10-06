<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\Action;
use Filament\Actions\ViewAction;

class NativeViewActionCalendarWidget extends NativeActionsCalendarWidget
{
    protected function viewAction(): Action
    {
        return ViewAction::make();
    }
}
