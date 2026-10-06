<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class InfolistCalendarWidget extends EventCalendarWidget
{
    public function infolist(Schema $schema): Schema
    {
        return $schema->components([
            TextEntry::make('title'),
            TextEntry::make('starts_at')->dateTime(),
        ]);
    }
}
