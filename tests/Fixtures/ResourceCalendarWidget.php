<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Data\ResourceData;

class ResourceCalendarWidget extends EventCalendarWidget
{
    public bool $shouldRefetchResourcesOnNavigate = false;

    protected ?string $startAttribute = 'starts_at';

    protected ?string $endAttribute = 'ends_at';

    protected ?string $resourceAttribute = 'team_id';

    public function config(): array
    {
        return [
            'refetchResourcesOnNavigate' => $this->shouldRefetchResourcesOnNavigate,
        ];
    }

    public function fetchResources(?FetchInfo $info = null): array
    {
        return [
            ...Team::query()
                ->get()
                ->map(fn (Team $team): ResourceData => ResourceData::make()->id($team->getKey())->title($team->name))
                ->all(),
            ['id' => 'range', 'title' => $info ? $info->start->toDateString() : 'No range'],
        ];
    }
}
