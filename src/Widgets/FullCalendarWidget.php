<?php

namespace Saade\FilamentFullCalendar\Widgets;

use Filament\Actions\Contracts\HasActions;
use Filament\Pages\Concerns\InteractsWithFormActions;
use Filament\Pages\Concerns\InteractsWithHeaderActions;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;
use Saade\FilamentFullCalendar\Data\FetchInfo;

class FullCalendarWidget extends Widget implements HasActions, HasSchemas
{
    use InteractsWithSchemas;
    use Concerns\InteractsWithCalendarActions;
    use Concerns\InteractsWithEvents;
    use Concerns\InteractsWithRecords;
    use InteractsWithHeaderActions;
    use InteractsWithFormActions;
    use Concerns\InteractsWithRawJS;
    use Concerns\CanBeConfigured;
    use Concerns\IsBackwardCompatible{
        Concerns\IsBackwardCompatible::getHeaderActions insteadof InteractsWithHeaderActions;
        Concerns\IsBackwardCompatible::getFormActions insteadof InteractsWithFormActions;
    }

    protected string $view = 'filament-fullcalendar::fullcalendar';

    protected int | string | array $columnSpan = 'full';

    /**
     * Called whenever the calendar needs events, such as when the user
     * navigates or switches views.
     *
     * @return array<mixed>
     */
    public function fetchEvents(FetchInfo $info): array
    {
        return [];
    }

    public function form(Schema $schema): Schema
    {
        return $schema->components($this->getFormSchema()); // @phpstan-ignore method.deprecated
    }

    public function infolist(Schema $schema): Schema
    {
        return $schema;
    }

    /**
     * @deprecated Define the fields in `form()` instead.
     *
     * @return array<\Filament\Schemas\Components\Component | \Filament\Actions\Action | \Filament\Actions\ActionGroup>
     */
    public function getFormSchema(): array
    {
        return [];
    }
}
