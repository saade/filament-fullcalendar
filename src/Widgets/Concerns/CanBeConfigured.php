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
        return data_get($this->getConfig(), 'timeZone') ?? FilamentFullCalendarPlugin::current()->getTimezone();
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

    /**
     * A read-only calendar shows events and lets them be viewed, and nothing
     * on it can be created, changed, moved or deleted.
     */
    protected bool $isReadOnly = false;

    public function isReadOnly(): bool
    {
        return $this->isReadOnly;
    }

    public function isEditable(): bool
    {
        if ($this->isReadOnly()) {
            return false;
        }

        return (bool) (data_get($this->getConfig(), 'editable') ?? FilamentFullCalendarPlugin::current()->isEditable());
    }

    public function isSelectable(): bool
    {
        if ($this->isReadOnly()) {
            return false;
        }

        return (bool) (data_get($this->getConfig(), 'selectable') ?? FilamentFullCalendarPlugin::current()->isSelectable());
    }
}
