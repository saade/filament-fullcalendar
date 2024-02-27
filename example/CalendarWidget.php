<?php
 
namespace App\Filament\Widgets;

use App\Filament\Resources\DayResource;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use App\Filament\Resources\EventResource;
use App\Models\Day;
use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;
 
class CalendarWidget extends FullCalendarWidget
{
    /**
     * FullCalendar will call this function whenever it needs new event data.
     * This is triggered when the user clicks prev/next or switches views on the calendar.
     */
    public function fetchEvents(array $fetchInfo): array
    {
        return [];
    }

    public function fetchCellsData(array $fetchInfo): array
    {
        return Day::getCalendarArray($fetchInfo);
    }

    public function getCellTemplate(): string {

        return <<<EOD
        <div class="flex flex-row justify-start">
            <div class="">
                <div class="flex flex-row">
                    <div class="flex flex-col bazi_font text-2xl">
                        <div>{{d1}}</div>
                        <div>{{d2}}</div>
                    </div>
                </div>
                <div class="flex flex-row  text-sm">
                    <div class="flex flex-col">
                        <div>{{d3}}</div>
                        <div>{{d4}}</div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-start grow cal_day_cell">{{dayNumber}}</div>
        </div>

    EOD;
    }

    public function getFormSchema(): array
    {
        return [
            TextInput::make('name'),
 
            Grid::make()
                ->schema([
                    DateTimePicker::make('starts_at'),
 
                    DateTimePicker::make('ends_at'),
                ]),
        ];
    }
}