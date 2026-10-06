<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Panel;
use Filament\PanelProvider;

class BarePanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('bare')
            ->path('bare');
    }
}
