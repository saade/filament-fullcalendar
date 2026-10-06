<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Illuminate\Contracts\Support\Arrayable;
use Saade\FilamentFullCalendar\Data\FetchInfo;

trait InteractsWithResources
{
    /**
     * The attribute that holds the id of an event's resource. When set, an
     * event dragged to another resource is saved with it.
     */
    protected ?string $resourceAttribute = null;

    protected function getResourceAttribute(): ?string
    {
        return $this->resourceAttribute;
    }

    /**
     * Fetch the resources again.
     */
    public function refreshResources(): void
    {
        $this->dispatchCalendarEvent('refresh-resources');
    }

    /**
     * @param  array{start: string, end: string, timezone: string} | null  $info
     * @return array<array<string, mixed>>
     */
    public function handleFetchResources(?array $info = null): array
    {
        return $this->getResources($info ? FetchInfo::fromArray($info, $this->getTimezone()) : null) ?? [];
    }

    /**
     * The resources are sent with the page, so showing them costs no request.
     * A calendar that fetches them again on navigation needs the visible
     * range, which only the browser knows, so it asks for them itself.
     *
     * @return array<array<string, mixed>> | bool `false` when the calendar has no resources from PHP, `true` when the browser has to fetch them.
     */
    public function getInitialResources(): array | bool
    {
        if (data_get($this->getConfig(), 'refetchResourcesOnNavigate')) {
            return true;
        }

        return $this->getResources() ?? false;
    }

    /**
     * @return array<array<string, mixed>> | null
     */
    protected function getResources(?FetchInfo $info = null): ?array
    {
        $resources = $this->fetchResources($info);

        if ($resources === null) {
            return null;
        }

        return collect($resources)
            ->map(fn (mixed $resource): array => $resource instanceof Arrayable ? $resource->toArray() : $resource)
            ->values()
            ->all();
    }
}
