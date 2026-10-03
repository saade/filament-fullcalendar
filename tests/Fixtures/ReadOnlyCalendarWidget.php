<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class ReadOnlyCalendarWidget extends EventCalendarWidget
{
    public function config(): array
    {
        return [
            'selectable' => false,
            'editable' => false,
        ];
    }
}
