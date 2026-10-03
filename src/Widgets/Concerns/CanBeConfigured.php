<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use function Saade\FilamentFullCalendar\array_merge_recursive_unique;

use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

trait CanBeConfigured
{
    public function config(): array
    {
        return [];
    }

    protected function getConfig(): array
    {
        return array_merge_recursive_unique(
            FilamentFullCalendarPlugin::get()->getConfig(),
            $this->config(),
        );
    }

    public function isEditable(): bool
    {
        return (bool) (data_get($this->config(), 'editable') ?? FilamentFullCalendarPlugin::get()->isEditable());
    }

    public function isSelectable(): bool
    {
        return (bool) (data_get($this->config(), 'selectable') ?? FilamentFullCalendarPlugin::get()->isSelectable());
    }
}
