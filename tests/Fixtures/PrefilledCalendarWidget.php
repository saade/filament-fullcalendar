<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\CreateAction;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class PrefilledCalendarWidget extends FullCalendarWidget
{
    public Model | string | null $model = Event::class;

    public bool $usesMountUsing = false;

    protected ?string $startAttribute = 'starts_at';

    protected ?string $endAttribute = 'ends_at';

    protected ?string $resourceAttribute = 'team_id';

    public function fetchEvents(FetchInfo $info): array
    {
        return [
            ['title' => 'Holiday', 'start' => '2026-10-12'],
        ];
    }

    public function form(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('title')->required()->default('Untitled'),
            TextInput::make('team_id'),
            DateTimePicker::make('starts_at')->required(),
            DateTimePicker::make('ends_at')->required(),
            Repeater::make('attendees')
                ->relationship()
                ->schema([
                    TextInput::make('name')->required(),
                ])
                ->defaultItems(0),
        ]);
    }

    protected function headerActions(): array
    {
        return [
            CreateAction::make()
                ->when($this->usesMountUsing, fn (CreateAction $action) => $action->mountUsing(function (Schema $schema, array $arguments): void {
                    $schema->fill();
                    $schema->fillPartially(['title' => 'From ' . ($arguments['type'] ?? 'the button')], ['title']);
                })),
        ];
    }
}
