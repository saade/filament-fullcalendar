<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait AuthorizesActions
{
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
