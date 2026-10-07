<?php

namespace Saade\FilamentFullCalendar\Toolbar;

use BackedEnum;
use Illuminate\Contracts\Support\Htmlable;

/**
 * Several tools behind one button, in a dropdown.
 *
 * @phpstan-consistent-constructor
 */
class ToolbarButtonGroup
{
    protected string | BackedEnum | Htmlable | null $icon = null;

    /**
     * @var array<CalendarTool>
     */
    protected array $resolvedButtons = [];

    /**
     * @param  array<string>  $buttons
     */
    public function __construct(protected string $label, protected array $buttons = []) {}

    /**
     * @param  array<string>  $buttons
     */
    public static function make(string $label, array $buttons = []): static
    {
        return new static($label, $buttons);
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    /**
     * @param  array<string>  $buttons
     */
    public function buttons(array $buttons): static
    {
        $this->buttons = $buttons;

        return $this;
    }

    /**
     * @return array<string>
     */
    public function getButtons(): array
    {
        return $this->buttons;
    }

    public function icon(string | BackedEnum | Htmlable | null $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function getIcon(): string | BackedEnum | Htmlable | null
    {
        return $this->icon;
    }

    /**
     * @param  array<CalendarTool>  $buttons
     */
    public function resolvedButtons(array $buttons): static
    {
        $this->resolvedButtons = $buttons;

        return $this;
    }

    /**
     * @return array<CalendarTool>
     */
    public function getResolvedButtons(): array
    {
        return $this->resolvedButtons;
    }
}
