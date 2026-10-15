<?php

namespace Saade\FilamentFullCalendar\Support\V6Compat;

trait V6CompatResourceColors
{
    /**
     * @deprecated Use `eventColor()` instead.
     */
    public function eventBackgroundColor(string $color): static
    {
        return $this->eventColor(V6CompatOptions::palette($color));
    }

    /**
     * @deprecated Use `eventColor()` instead.
     */
    public function eventBorderColor(string $color): static
    {
        return $this->eventColor($this->eventColor ?? V6CompatOptions::palette($color));
    }

    /**
     * @deprecated Use `eventContrastColor()` instead.
     */
    public function eventTextColor(string $color): static
    {
        return $this->eventContrastColor($color);
    }
}
