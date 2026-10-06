<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Illuminate\Database\Eloquent\Model;

class TeamCalendarWidget extends EventCalendarWidget
{
    public ?Model $record = null;

    protected static bool $isScopedToTenant = false;

    public function fetchEvents(array $info): array
    {
        return Event::query()
            ->whereBelongsTo($this->record, 'team')
            ->get()
            ->map(fn (Event $event): array => [
                'id' => $event->getKey(),
                'title' => $event->title,
                'start' => $event->starts_at,
                'end' => $event->ends_at,
            ])
            ->all();
    }
}
