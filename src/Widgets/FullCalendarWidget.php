<?php

namespace Saade\FilamentFullCalendar\Widgets;

use Filament\Actions\Contracts\HasActions;
use Filament\Pages\Concerns\InteractsWithFormActions;
use Filament\Pages\Concerns\InteractsWithHeaderActions;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Saade\FilamentFullCalendar\Data\FetchInfo;

class FullCalendarWidget extends Widget implements HasActions, HasSchemas
{
    use InteractsWithSchemas;
    use Concerns\InteractsWithCalendarActions;
    use Concerns\InteractsWithEvents;
    use Concerns\InteractsWithFilters;
    use Concerns\InteractsWithRecords;
    use Concerns\InteractsWithResources;
    use Concerns\InteractsWithToolbarActions;
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
     * Return event arrays or `EventData` objects, or models that implement
     * `Eventable`, as an array, a collection or a query.
     *
     * @return iterable<mixed> | Builder<Model> | Relation<Model, Model, mixed>
     */
    public function fetchEvents(FetchInfo $info): iterable | Builder | Relation
    {
        return [];
    }

    /**
     * The resources of a resource view, as arrays or `ResourceData` objects.
     * Return `null` when the calendar has none, or when they are set in `config()`.
     *
     * @param  ?FetchInfo  $info  The visible range, only when `refetchResourcesOnNavigate` is on.
     * @return iterable<mixed> | null
     */
    public function fetchResources(?FetchInfo $info = null): ?iterable
    {
        return null;
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
