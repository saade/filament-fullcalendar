<?php

namespace Saade\FilamentFullCalendar\Support\V6Compat;

trait V6CompatRenderHooks
{
    /**
     * @deprecated Use `eventClass()` instead.
     */
    public function eventClassNames(): string
    {
        return $this->eventClass();
    }
}
