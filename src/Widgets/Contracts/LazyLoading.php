<?php

namespace Saade\FilamentFullCalendar\Widgets\Contracts;

interface LazyLoading
{
    public function lazyLoadViewData($fetchInfo = null): array;
}
