<?php

namespace Saade\FilamentFullCalendar\Widgets;

use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;

use function Filament\get_authorization_response;

use Filament\Pages\Concerns\InteractsWithFormActions;
use Filament\Pages\Concerns\InteractsWithHeaderActions;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;
use Illuminate\Auth\Access\Response;
use Saade\FilamentFullCalendar\Actions;

class FullCalendarWidget extends Widget implements HasActions, HasSchemas
{
    use InteractsWithSchemas;
    use InteractsWithActions;
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

    protected function headerActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function modalActions(): array
    {
        return [
            Actions\EditAction::make(),
            Actions\DeleteAction::make(),
        ];
    }

    protected function viewAction(): Action
    {
        return Actions\ViewAction::make();
    }

    /**
     * FullCalendar will call this function whenever it needs new event data.
     * This is triggered when the user clicks prev/next or switches views.
     * @param array{start: string, end: string, timezone: string} $info
     */
    public function fetchEvents(array $info): array
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

    public function getDefaultActionAuthorizationResponse(Action $action): ?Response
    {
        $model = $this->getModel();

        if (blank($model)) {
            return null;
        }

        $record = $action->getRecord();

        return match (true) {
            $action instanceof CreateAction => get_authorization_response('create', $model),
            $action instanceof DeleteAction && $record => get_authorization_response('delete', $record),
            $action instanceof EditAction && $record => get_authorization_response('update', $record),
            $action instanceof ViewAction && $record => get_authorization_response('view', $record),
            default => null,
        };
    }
}
