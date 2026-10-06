<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class ConfirmingCalendarWidget extends SavingCalendarWidget
{
    protected bool $shouldConfirmEventChanges = true;
}
