<?php

namespace Saade\FilamentFullCalendar\Widgets\Contracts;

interface HasCustomButtons
{
    public function customButtons(): array;

    public function getCustomButtonJsFunction(string $key): string;
}