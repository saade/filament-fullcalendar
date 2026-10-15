<?php

namespace Saade\FilamentFullCalendar;

use Closure;
use Filament\Contracts\Plugin;
use Filament\Facades\Filament;
use Filament\Panel;
use Filament\Support\Concerns\EvaluatesClosures;
use InvalidArgumentException;
use Throwable;

class FilamentFullCalendarPlugin implements Plugin
{
    use EvaluatesClosures;

    /**
     * @var array<string, array<string>>
     */
    public const THEMES = [
        'filament' => [],
        'breezy' => ['indigo', 'amber', 'emerald', 'rose'],
        'classic' => ['default'],
        'forma' => ['blue', 'green', 'purple', 'red'],
        'monarch' => ['blue', 'green', 'purple', 'red', 'yellow'],
        'pulse' => ['blue', 'green', 'purple', 'red'],
    ];

    protected array $plugins = ['dayGrid', 'timeGrid', 'interaction', 'list'];

    protected string | Closure $theme = 'filament';

    protected string | Closure | null $palette = null;

    /**
     * @var array<string, string | Closure>
     */
    protected array $registeredThemes = [];

    protected bool | Closure $hasNativeToolbar = false;

    protected string | Closure | null $schedulerLicenseKey = null;

    protected string | Closure | null $googleCalendarApiKey = null;

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

    public function theme(string | Closure $theme): static
    {
        $this->theme = $theme;

        return $this;
    }

    public function getTheme(): string
    {
        $theme = $this->evaluate($this->theme);

        if (blank($theme)) {
            throw new InvalidArgumentException('The calendar theme cannot be blank. Use one of [' . implode('], [', array_keys(static::THEMES)) . '], or the name of a theme of your own.');
        }

        return $theme;
    }

    public function registerTheme(string $name, string | Closure $url): static
    {
        if (array_key_exists($name, static::THEMES)) {
            throw new InvalidArgumentException("[{$name}] is the name of a built-in theme. Register your theme under another name.");
        }

        $this->registeredThemes[$name] = $url;

        return $this;
    }

    /**
     * @return array<string, string>
     */
    public function getRegisteredThemes(): array
    {
        return array_map(fn (string | Closure $url): string => $this->evaluate($url), $this->registeredThemes);
    }

    public function palette(string | Closure | null $palette): static
    {
        $this->palette = $palette;

        return $this;
    }

    public function getPalette(): ?string
    {
        return $this->evaluate($this->palette);
    }

    public function nativeToolbar(bool | Closure $condition = true): static
    {
        $this->hasNativeToolbar = $condition;

        return $this;
    }

    public function hasNativeToolbar(): bool
    {
        return (bool) $this->evaluate($this->hasNativeToolbar);
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

    public function googleCalendarApiKey(string | Closure | null $googleCalendarApiKey): static
    {
        $this->googleCalendarApiKey = $googleCalendarApiKey;

        return $this;
    }

    public function getGoogleCalendarApiKey(): ?string
    {
        return $this->evaluate($this->googleCalendarApiKey);
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
