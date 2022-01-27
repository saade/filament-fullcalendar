<?php

namespace Saade\FilamentFullCalendar\Widgets;

use Filament\Widgets\Widget;
use Illuminate\View\View;
use Saade\FilamentFullCalendar\Widgets\Concerns\FiresEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\UsesConfig;

class FullCalendarWidget extends Widget
{
    use FiresEvents;
    use UsesConfig;

    protected static string $view = 'filament-fullcalendar::fullcalendar';

    protected int | string | array $columnSpan = 'full';

    public function getViewData(): array
    {
        return [];
    }

    public function render(): View
    {
        return view(static::$view)
            ->with([
                'events' => $this->getViewData(),
            ]);
    }
}
