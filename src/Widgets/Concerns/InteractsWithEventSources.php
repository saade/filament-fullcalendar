<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Saade\FilamentFullCalendar\Data\EventSourceData;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

trait InteractsWithEventSources
{
    /**
     * Calendars from elsewhere to show next to the widget's own events.
     *
     * @return array<EventSourceData | array<string, mixed>>
     */
    public function eventSources(): array
    {
        return [];
    }

    /**
     * @return array<array<string, mixed>>
     */
    public function getEventSources(): array
    {
        return array_map(
            fn (mixed $source): array => $this->normalizeEvent(is_string($source) ? ['url' => $source] : $source),
            [...array_values((array) ($this->getConfig()['eventSources'] ?? [])), ...array_values($this->eventSources())],
        );
    }

    public function getGoogleCalendarApiKey(): ?string
    {
        return FilamentFullCalendarPlugin::current()->getGoogleCalendarApiKey();
    }
}
