<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class LockedCalendarWidget extends PrefilledCalendarWidget
{
    protected bool $isReadOnly = true;

    public function config(): array
    {
        return ['editable' => true, 'selectable' => true, 'droppable' => true];
    }
}
