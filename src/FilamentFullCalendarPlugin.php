<?php

namespace Saade\FilamentFullCalendar;

use Closure;
use Filament\Contracts\Plugin;
use Filament\Facades\Filament;
use Filament\Panel;
use Filament\Support\Concerns\EvaluatesClosures;
use Throwable;

class FilamentFullCalendarPlugin implements Plugin
{
    use EvaluatesClosures;

    protected array $plugins = ['dayGrid', 'timeGrid', 'interaction', 'list', 'moment', 'momentTimezone'];

    protected string | Closure | null $schedulerLicenseKey = null;

    protected array | Closure $config = [];

    protected string | Closure | null $timezone = null;

    protected string | Closure | null $locale = null;

    protected bool | Closure | null $editable = null;

    protected bool | Closure | null $selectable = null;

    public function getId(): string
    {
        return 'filament-fullcalendar';
    }

    public static function make(): static
    {
        return app(static::class);
    }

    /**
     * The plugin registered on the current panel, or one with the default
     * settings when the calendar is used on a panel that does not register
     * it or outside a panel altogether.
     */
    public static function current(): static
    {
        try {
            $panel = Filament::getCurrentOrDefaultPanel();
        } catch (Throwable) {
            $panel = null;
        }

        $id = app(static::class)->getId();

        if (! $panel?->hasPlugin($id)) {
            return static::make();
        }

        /** @var static $plugin */
        $plugin = $panel->getPlugin($id);

        return $plugin;
    }

    public static function get(): static
    {
        /** @var static $plugin */
        $plugin = filament(app(static::class)->getId());

        return $plugin;
    }

    public function register(Panel $panel): void
    {
        //
    }

    public function boot(Panel $panel): void
    {
        //
    }

    public function plugins(array $plugins, bool $merge = true): static
    {
        $this->plugins = $merge ? array_merge($this->plugins, $plugins) : $plugins;

        return $this;
    }

    public function getPlugins(): array
    {
        return $this->plugins;
    }

    public function schedulerLicenseKey(string | Closure | null $schedulerLicenseKey): static
    {
        $this->schedulerLicenseKey = $schedulerLicenseKey;

        return $this;
    }

    public function getSchedulerLicenseKey(): ?string
    {
        return $this->evaluate($this->schedulerLicenseKey);
    }

    public function config(array | Closure $config): static
    {
        $this->config = $config;

        return $this;
    }

    public function getConfig(): array
    {
        return $this->evaluate($this->config);
    }

    public function timezone(string | Closure $timezone): static
    {
        $this->timezone = $timezone;

        return $this;
    }

    public function getTimezone(): string
    {
        return $this->evaluate($this->timezone) ?? config('app.timezone');
    }

    public function locale(string | Closure $locale): static
    {
        $this->locale = $locale;

        return $this;
    }

    public function getLocale(): string
    {
        return $this->evaluate($this->locale) ?? strtolower(str_replace('_', '-', app()->getLocale()));
    }

    public function editable(bool | Closure $editable = true): static
    {
        $this->editable = $editable;

        return $this;
    }

    public function isEditable(): bool
    {
        return (bool) ($this->evaluate($this->editable) ?? data_get($this->getConfig(), 'editable', false));
    }

    public function selectable(bool | Closure $selectable = true): static
    {
        $this->selectable = $selectable;

        return $this;
    }

    public function isSelectable(): bool
    {
        return (bool) ($this->evaluate($this->selectable) ?? data_get($this->getConfig(), 'selectable', false));
    }
}
