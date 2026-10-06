<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class LegacyFormCalendarWidget extends FullCalendarWidget
{
    public Model | string | null $model = Event::class;

    public function getFormSchema(): array
    {
        return [
            TextInput::make('title')->required(),
            DateTimePicker::make('starts_at')->required(),
            DateTimePicker::make('ends_at')->required(),
        ];
    }
}
