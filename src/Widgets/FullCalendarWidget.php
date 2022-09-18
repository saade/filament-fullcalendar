<?php

namespace Saade\FilamentFullCalendar\Widgets;

use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Widgets\Widget;
use Illuminate\View\View;
use Saade\FilamentFullCalendar\Widgets\Concerns\CanFetchEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\CanManageEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\CanRefreshEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\FiresEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\UsesConfig;

class FullCalendarWidget extends Widget implements HasForms
{
    use InteractsWithForms, CanManageEvents {
        CanManageEvents::getForms insteadof InteractsWithForms;
    }
    use CanRefreshEvents;
    use CanFetchEvents;
    use FiresEvents;
    use UsesConfig;

    protected static string $view = 'filament-fullcalendar::fullcalendar';

    protected int | string | array $columnSpan = 'full';

    public function mount(): void
    {
        $this->setUpForms();
    }

    public function render(): View
    {
        return view(static::$view)
            ->with([
                'events' => $this->getViewData(),
            ]);
    }

    public function getKey(): string
    {
        return $this->key ?? 'default';
    }
}
