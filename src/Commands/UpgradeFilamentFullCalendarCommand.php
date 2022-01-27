<?php

namespace Saade\FilamentFullCalendar\Commands;

use Illuminate\Console\Command;

class UpgradeFilamentFullCalendarCommand extends Command
{
    public $signature = 'fullcalendar:upgrade';

    public $description = 'Upgrade Filament FullCalendar';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
