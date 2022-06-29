<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Saade\FilamentFullCalendar\Widgets\Contracts\LazyLoading;

trait UsesLazyLoad
{
    public function isLazyLoad(): bool
    {
        return $this instanceof LazyLoading;
    }
}
