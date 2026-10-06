<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Closure;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;

use function Filament\get_authorization_response;

use Filament\Schemas\Schema;
use Illuminate\Auth\Access\Response;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

trait InteractsWithCalendarActions
{
    use InteractsWithActions {
        unmountAction as unmountFilamentAction;
    }

    protected bool $hasCalledAction = false;

    protected function headerActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function modalActions(): array
    {
        return [
            EditAction::make()
                ->cancelParentActions(),

            DeleteAction::make()
                ->cancelParentActions(),
        ];
    }

    protected function viewAction(): Action
    {
        return ViewAction::make()
            ->modalFooterActions(fn (ViewAction $action): array => [
                ...$this->getCachedFormActions(),
                $action->getModalCancelAction(),
            ]);
    }

    public function getDefaultActionModel(Action $action): ?string
    {
        return $this->getModel();
    }

    public function getDefaultActionModelLabel(Action $action): ?string
    {
        return filled($this->getModel()) ? $this->getModelLabel() : null;
    }

    public function getDefaultActionRecord(Action $action): ?Model
    {
        if ($action instanceof CreateAction) {
            return null;
        }

        return $this->getEventRecord();
    }

    public function getDefaultActionSchemaResolver(Action $action): ?Closure
    {
        return match (true) {
            $action instanceof CreateAction, $action instanceof EditAction => fn (Schema $schema): Schema => $this->form($schema),
            $action instanceof ViewAction => function (Schema $schema): Schema {
                $infolist = $this->infolist($schema);

                if (filled($infolist->getComponents(withActions: false, withHidden: true))) {
                    return $infolist;
                }

                return $this->form($schema);
            },
            default => null,
        };
    }

    /**
     * Filament 4.0 to 4.4 call this without the action.
     */
    protected function afterActionCalled(?Action $action = null): void
    {
        $action ??= $this->getMountedAction();

        $this->hasCalledAction = true;

        if ((! $action) || ($action instanceof ViewAction)) {
            return;
        }

        if ($action instanceof DeleteAction) {
            $this->eventRecord = null;
        }

        $this->refreshRecords();
    }

    /**
     * When the edit action that was opened for a dragged or resized event is
     * closed without saving, the calendar still shows the event where it was
     * dropped, so the events are fetched again to put it back.
     *
     * The signature of the method this wraps differs between Filament versions.
     */
    public function unmountAction(mixed ...$arguments): void
    {
        $isChangingEventDates = in_array(
            Arr::last($this->mountedActions)['arguments']['type'] ?? null,
            ['drop', 'resize'],
            strict: true,
        );

        $this->unmountFilamentAction(...$arguments);

        if ($isChangingEventDates && (! $this->hasCalledAction)) {
            $this->refreshRecords();
        }
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
