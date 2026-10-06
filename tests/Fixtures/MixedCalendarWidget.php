<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\CreateAction;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class MixedCalendarWidget extends FullCalendarWidget
{
    public function fetchEvents(FetchInfo $info): iterable
    {
        return [
            ...Meeting::query()->get(),
            ...Task::query()->get(),
            ['id' => 'holiday', 'title' => 'Holiday', 'start' => '2026-10-12'],
        ];
    }

    public function form(Schema $schema): Schema
    {
        return match ($schema->getModel()) {
            Meeting::class => $schema->components([
                TextInput::make('title')->required(),
            ]),
            default => $schema,
        };
    }

    protected function headerActions(): array
    {
        return [
            CreateAction::make('createTask')->model(Task::class),
        ];
    }
}
