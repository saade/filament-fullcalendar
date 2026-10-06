<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Closure;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Facades\Filament;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Illuminate\Auth\Access\Response;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Gate;
use Throwable;

use function Filament\get_authorization_response;
use function Filament\Support\get_model_label;

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
        if ($action instanceof CreateAction) {
            return $this->getModel();
        }

        return $this->getEventRecordModel() ?? $this->getModel();
    }

    public function getDefaultActionModelLabel(Action $action): ?string
    {
        $model = $action->getModel();

        if (blank($model)) {
            return null;
        }

        if ($model === $this->getModel()) {
            return $this->getModelLabel();
        }

        return ($resource = $this->getModelResource($model)) ? $resource::getModelLabel() : get_model_label($model);
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
            $action instanceof CreateAction, $action instanceof EditAction => fn (Schema $schema): Schema => $this->getEventFormSchema($schema, $action->getModel()),
            $action instanceof ViewAction => function (Schema $schema) use ($action): Schema {
                $model = $action->getModel();

                $resource = $this->getModelResource($model);

                foreach ([$this->infolist($schema), $resource ? $resource::infolist($schema) : null] as $infolist) {
                    if ($infolist && $this->hasSchemaComponents($infolist)) {
                        return $infolist;
                    }
                }

                return $this->getEventFormSchema($schema, $model);
            },
            default => null,
        };
    }

    /**
     * The widget's `form()` wins. When it defines nothing, the form of the
     * model's resource in the current panel is used.
     */
    protected function getEventFormSchema(Schema $schema, ?string $model): Schema
    {
        $form = $this->form($schema);

        if ($this->hasSchemaComponents($form)) {
            return $form;
        }

        $resource = $this->getModelResource($model);

        return $resource ? $resource::form($schema) : $form;
    }

    protected function hasSchemaComponents(Schema $schema): bool
    {
        return filled($schema->getComponents(withActions: false, withHidden: true));
    }

    /**
     * @return ?class-string<resource>
     */
    protected function getModelResource(?string $model): ?string
    {
        if (blank($model)) {
            return null;
        }

        try {
            $resource = Filament::getModelResource($model);
        } catch (Throwable) {
            return null;
        }

        return $resource;
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
        $model = $action->getModel();
        $record = $action->getRecord();

        return match (true) {
            $action instanceof CreateAction && filled($model) => $this->getAuthorizationResponse('create', $model),
            $action instanceof DeleteAction && $record => $this->getAuthorizationResponse('delete', $record),
            $action instanceof EditAction && $record => $this->getAuthorizationResponse('update', $record),
            $action instanceof ViewAction && $record => $this->getAuthorizationResponse('view', $record),
            default => null,
        };
    }

    /**
     * Filament's own check needs a panel to know which guard to use, so
     * outside a panel the default guard's gate is asked instead.
     */
    protected function getAuthorizationResponse(string $ability, Model | string $model): Response
    {
        try {
            $hasPanel = Filament::getCurrentOrDefaultPanel() !== null;
        } catch (Throwable) {
            $hasPanel = false;
        }

        if ($hasPanel) {
            return get_authorization_response($ability, $model);
        }

        $policy = Gate::getPolicyFor($model);

        if (filled($policy) && method_exists($policy, $ability)) {
            return Gate::inspect($ability, [$model]);
        }

        return Response::allow();
    }
}
