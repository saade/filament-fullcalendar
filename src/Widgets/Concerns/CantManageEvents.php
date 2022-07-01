<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait CantManageEvents
{
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
