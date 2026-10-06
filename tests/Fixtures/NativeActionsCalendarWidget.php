<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;

class NativeActionsCalendarWidget extends InfolistCalendarWidget
{
    protected function headerActions(): array
    {
        return [
            CreateAction::make(),
            Action::make('archive')
                ->action(fn (?Event $record) => $record?->update(['title' => 'Archived'])),
        ];
    }

    protected function modalActions(): array
    {
        return [
            EditAction::make(),
            DeleteAction::make(),
        ];
    }
}
