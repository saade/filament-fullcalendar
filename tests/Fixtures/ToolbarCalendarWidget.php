<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Saade\FilamentFullCalendar\Toolbar\CalendarTool;
use Saade\FilamentFullCalendar\Toolbar\ToolbarButtonGroup;

class ToolbarCalendarWidget extends EventCalendarWidget
{
    /**
     * @var array<string, mixed> | null
     */
    public static ?array $buttons = null;

    /**
     * @var array<string, mixed> | null
     */
    public static ?array $footerButtons = null;

    /**
     * @var array<string, mixed>
     */
    public static array $calendarConfig = [];

    public function config(): array
    {
        return static::$calendarConfig;
    }

    protected function toolbarButtons(): ?array
    {
        return static::$buttons;
    }

    protected function footerToolbarButtons(): ?array
    {
        return static::$footerButtons;
    }

    protected function tools(): array
    {
        return [
            CalendarTool::make('weekends')
                ->label('Weekends')
                ->icon(Heroicon::CalendarDays)
                ->jsHandler("calendar.setOption('weekends', ! calendar.getOption('weekends'))")
                ->activeJsExpression("calendar?.getOption('weekends')")
                ->toggle(),

            CalendarTool::make('pickDate')
                ->label('Pick a date')
                ->action('goToDate', '{ source: \'toolbar\' }'),

            CalendarTool::make('secret')->hidden(),
        ];
    }

    protected function toolbarActions(): array
    {
        return [
            Action::make('goToDate')->action(fn () => null),
        ];
    }

    public static function group(): ToolbarButtonGroup
    {
        return ToolbarButtonGroup::make('Views', ['dayGridMonth', 'listWeek', 'secret']);
    }
}
