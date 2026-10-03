<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Panel;
use Filament\PanelProvider;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

class TestPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->plugin(
                FilamentFullCalendarPlugin::make()
                    ->timezone('America/Sao_Paulo')
                    ->selectable()
                    ->editable(),
            );
    }
}
