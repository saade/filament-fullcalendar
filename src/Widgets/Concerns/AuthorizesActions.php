<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait AuthorizesActions
{
    public static function canView(?array $event = null): bool
    {
        // If we want to prevent breaking changes, we need to "fallback"
        // to "canEdit(Event)". Not doing that since the new behaviour
        // is likely the desired one. The fallback would be:
        // return static::canEdit($event);

        return true;
    }

    public static function canCreate(): bool
    {
        return true;
    }

    public static function canEdit(?array $event = null): bool
    {
        return true;
    }

    public static function canDelete(?array $event = null): bool
    {
        return true;
    }
}
