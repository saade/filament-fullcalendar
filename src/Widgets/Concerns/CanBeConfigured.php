<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use function Saade\FilamentFullCalendar\array_merge_recursive_unique;

use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

trait CanBeConfigured
{
    /**
     * FullCalendar options for this calendar, merged over the ones set on the panel plugin.
     *
     * @return array<string, mixed>
     */
    public function config(): array
    {
        return [];
    }

    /**
     * @return array<string, mixed>
     */
    protected function getConfig(): array
    {
        return array_merge_recursive_unique(
            FilamentFullCalendarPlugin::current()->getConfig(),
            $this->config(),
        );
    }

    public function getTimezone(): string
    {
        return FilamentFullCalendarPlugin::current()->getTimezone();
    }

    public function getLocale(): string
    {
        return FilamentFullCalendarPlugin::current()->getLocale();
    }

    /**
     * @return array<string>
     */
    public function getPlugins(): array
    {
        return FilamentFullCalendarPlugin::current()->getPlugins();
    }

    public function getSchedulerLicenseKey(): ?string
    {
        return FilamentFullCalendarPlugin::current()->getSchedulerLicenseKey();
    }

    public function isEditable(): bool
    {
        return (bool) (data_get($this->config(), 'editable') ?? FilamentFullCalendarPlugin::current()->isEditable());
    }

    public function isSelectable(): bool
    {
        return (bool) (data_get($this->config(), 'selectable') ?? FilamentFullCalendarPlugin::current()->isSelectable());
    }
}
