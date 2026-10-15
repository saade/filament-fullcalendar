<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use InvalidArgumentException;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;
use Saade\FilamentFullCalendar\Support\V6Compat\V6CompatOptions;

use function Saade\FilamentFullCalendar\array_merge_recursive_unique;

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
        return V6CompatOptions::config(array_merge_recursive_unique(
            FilamentFullCalendarPlugin::current()->getConfig(),
            $this->config(),
        ));
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

    public function getTheme(): string
    {
        return FilamentFullCalendarPlugin::current()->getTheme();
    }

    public function getPalette(): ?string
    {
        return FilamentFullCalendarPlugin::current()->getPalette();
    }

    public function getPaletteClass(): ?string
    {
        $theme = $this->getTheme();
        $palettes = FilamentFullCalendarPlugin::THEMES[$theme];
        $palette = $this->getPalette();

        if (blank($palettes)) {
            if (filled($palette)) {
                throw new InvalidArgumentException("The [{$theme}] theme has no palettes, so [{$palette}] cannot be used with it.");
            }

            return null;
        }

        $palette ??= $palettes[0];

        if (! in_array($palette, $palettes, true)) {
            throw new InvalidArgumentException("[{$palette}] is not a palette of the [{$theme}] theme. Use one of [" . implode('], [', $palettes) . '].');
        }

        return "fi-fc-palette-{$theme}-{$palette}";
    }

    public function hasNativeToolbar(): bool
    {
        return FilamentFullCalendarPlugin::current()->hasNativeToolbar();
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
