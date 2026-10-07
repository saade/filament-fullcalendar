<?php

namespace Saade\FilamentFullCalendar\Toolbar;

use BackedEnum;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Js;
use Illuminate\Support\Str;

/**
 * A button of the calendar's toolbar. `toolbarButtons()` places it by name.
 *
 * @phpstan-consistent-constructor
 */
class CalendarTool
{
    protected ?string $label = null;

    protected bool $isLabelHidden = true;

    protected string | BackedEnum | Htmlable | null $icon = null;

    protected string $color = 'gray';

    protected ?string $jsHandler = null;

    protected ?string $activeJsExpression = null;

    protected ?string $disabledJsExpression = null;

    protected ?string $labelJsExpression = null;

    protected ?string $badgeJsExpression = null;

    protected bool $isToggle = false;

    protected bool $isHeading = false;

    protected bool $isVisible = true;

    public function __construct(protected string $name) {}

    public static function make(string $name): static
    {
        return new static($name);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function label(?string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getLabel(): string
    {
        return $this->label ?? Str::headline($this->name);
    }

    public function hiddenLabel(bool $condition = true): static
    {
        $this->isLabelHidden = $condition;

        return $this;
    }

    public function isLabelHidden(): bool
    {
        return $this->isLabelHidden;
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

    public function color(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getColor(): string
    {
        return $this->color;
    }

    /**
     * Opens an action from `toolbarActions()`, the one with the tool's name
     * unless another is given.
     */
    public function action(?string $action = null, ?string $arguments = null): static
    {
        return $this->jsHandler('$wire.mountAction(' . Js::from($action ?? $this->name) . ', ' . ($arguments ?? '{}') . ')');
    }

    /**
     * JavaScript run in the browser when the tool is clicked. `calendar` is
     * the FullCalendar instance and `$wire` the widget.
     */
    public function jsHandler(?string $handler): static
    {
        $this->jsHandler = $handler;

        return $this;
    }

    public function getJsHandler(): ?string
    {
        return $this->jsHandler;
    }

    public function activeJsExpression(?string $expression): static
    {
        $this->activeJsExpression = $expression;

        return $this;
    }

    public function getActiveJsExpression(): ?string
    {
        return $this->activeJsExpression;
    }

    public function disabledJsExpression(?string $expression): static
    {
        $this->disabledJsExpression = $expression;

        return $this;
    }

    public function getDisabledJsExpression(): ?string
    {
        return $this->disabledJsExpression;
    }

    /**
     * JavaScript that gives the label in the browser, where FullCalendar's
     * translations are.
     */
    public function labelJsExpression(?string $expression): static
    {
        $this->labelJsExpression = $expression;

        return $this;
    }

    public function getLabelJsExpression(): ?string
    {
        return $this->labelJsExpression;
    }

    public function badgeJsExpression(?string $expression): static
    {
        $this->badgeJsExpression = $expression;

        return $this;
    }

    public function getBadgeJsExpression(): ?string
    {
        return $this->badgeJsExpression;
    }

    public function toggle(bool $condition = true): static
    {
        $this->isToggle = $condition;

        return $this;
    }

    public function isToggle(): bool
    {
        return $this->isToggle;
    }

    /**
     * Shows the label as the toolbar's heading and not as a button.
     */
    public function heading(bool $condition = true): static
    {
        $this->isHeading = $condition;

        return $this;
    }

    public function isHeading(): bool
    {
        return $this->isHeading;
    }

    public function visible(bool $condition = true): static
    {
        $this->isVisible = $condition;

        return $this;
    }

    public function hidden(bool $condition = true): static
    {
        return $this->visible(! $condition);
    }

    public function isVisible(): bool
    {
        return $this->isVisible;
    }
}
