<?php

namespace Saade\FilamentFullCalendar\Widgets;

use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Widgets\Widget;
use Illuminate\View\View;
use Saade\FilamentFullCalendar\Widgets\Concerns\CanManageEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\CanRefreshEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\FiresEvents;
use Saade\FilamentFullCalendar\Widgets\Concerns\UsesConfig;
use Saade\FilamentFullCalendar\Widgets\Concerns\UsesLazyLoad;

class FullCalendarWidget extends Widget implements HasForms
{
    use InteractsWithForms, CanManageEvents {
        CanManageEvents::getForms insteadof InteractsWithForms;
    }

    use CanRefreshEvents;
    use FiresEvents;
    use UsesConfig;
    use UsesLazyLoad;

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
                'events' => $this->isLazyLoad() ? $this->lazyLoadViewData() : $this->getViewData(),
            ]);
    }
}
