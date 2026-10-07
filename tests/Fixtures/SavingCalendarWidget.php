<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class SavingCalendarWidget extends EventCalendarWidget
{
    protected ?string $startAttribute = 'starts_at';

    protected ?string $endAttribute = 'ends_at';

    public function config(): array
    {
        return ['editable' => true];
    }
}
