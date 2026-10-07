<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\Action;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Enums\FiltersResetActionPosition;

class LaidOutFiltersCalendarWidget extends FilteredCalendarWidget
{
    public static FiltersLayout $layout = FiltersLayout::Dropdown;

    public static bool $deferred = true;

    public static bool $hasFooterReset = false;

    public function getFiltersLayout(): FiltersLayout
    {
        return static::$layout;
    }

    public function hasDeferredFilters(): bool
    {
        return static::$deferred;
    }

    public function getFiltersResetActionPosition(): FiltersResetActionPosition
    {
        return static::$hasFooterReset ? FiltersResetActionPosition::Footer : FiltersResetActionPosition::Header;
    }

    public function filtersTriggerAction(Action $action): Action
    {
        return $action->label('Narrow down');
    }
}
