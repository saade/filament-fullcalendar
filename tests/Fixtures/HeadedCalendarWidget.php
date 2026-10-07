<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\Action;

class HeadedCalendarWidget extends EventCalendarWidget
{
    protected ?string $heading = 'Meetings in :title';

    protected ?string $description = '<b>All</b> rooms';

    protected function headerActions(): array
    {
        return [
            Action::make('book')->label('Book a room'),
        ];
    }
}
