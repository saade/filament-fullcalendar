<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Builder;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class FilteredCalendarWidget extends FullCalendarWidget
{
    public function filtersSchema(Schema $schema): Schema
    {
        return $schema->components([
            Select::make('team_id')->options(fn (): array => Team::query()->pluck('name', 'id')->all()),
            TextInput::make('search')->default('Stand'),
        ]);
    }

    public function getTabs(): array
    {
        return [
            'all' => Tab::make(),
            'this_week' => Tab::make()->modifyQueryUsing(fn (Builder $query) => $query->where('starts_at', '<', '2026-10-12')),
            'later' => Tab::make('Coming up')->modifyQueryUsing(fn (Builder $query) => $query->where('starts_at', '>=', '2026-10-12')),
        ];
    }

    public function fetchEvents(FetchInfo $info): iterable | Builder
    {
        return Meeting::query()
            ->when($this->filters['team_id'] ?? null, fn (Builder $query, $team) => $query->where('team_id', $team))
            ->when($this->filters['search'] ?? null, fn (Builder $query, $search) => $query->where('title', 'like', "%{$search}%"));
    }
}
