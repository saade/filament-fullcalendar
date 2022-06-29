<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait CantManageEvents
{
    protected bool $showCreateButton = false;

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit(?array $event = null): bool
    {
        return false;
    }

    public static function canDelete(?array $event = null): bool
    {
        return false;
    }
}
