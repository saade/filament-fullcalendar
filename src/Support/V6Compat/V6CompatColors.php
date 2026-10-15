<?php

namespace Saade\FilamentFullCalendar\Support\V6Compat;

trait V6CompatColors
{
    /**
     * @deprecated Use `color()` instead.
     */
    public function backgroundColor(string $backgroundColor): static
    {
        return $this->color(V6CompatOptions::palette($backgroundColor));
    }

    /**
     * @deprecated Use `color()` instead.
     */
    public function borderColor(string $borderColor): static
    {
        return $this->color($this->color ?? V6CompatOptions::palette($borderColor));
    }

    /**
     * @deprecated Use `contrastColor()` instead.
     */
    public function textColor(string $textColor): static
    {
        return $this->contrastColor($textColor);
    }
}
