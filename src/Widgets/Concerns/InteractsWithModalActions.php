<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Closure;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use InvalidArgumentException;

trait InteractsWithModalActions
{
    /**
     * @var array<Action | ActionGroup>
     */
    protected array $cachedModalActions = [];

    public function bootedInteractsWithModalActions(): void
    {
        $this->cacheModalActions();
    }

    protected function cacheModalActions(): void
    {
        /** @var array<string, Action | ActionGroup> */
        $actions = Action::configureUsing(
            Closure::fromCallable([$this, 'configureAction']),
            fn (): array => $this->modalActions(),
        );

        foreach ($actions as $action) {
            if ($action instanceof ActionGroup) {
                $action->livewire($this);

                /** @var array<string, Action> $flatActions */
                $flatActions = $action->getFlatActions();

                $this->mergeCachedActions($flatActions);
                $this->cachedModalActions[] = $action;

                continue;
            }

            if (! $action instanceof Action) {
                throw new InvalidArgumentException('Modal actions must be an instance of ' . Action::class . ', or ' . ActionGroup::class . '.');
            }

            $this->cacheAction($action);
            $this->cachedModalActions[] = $action;
        }
    }

    /**
     * @return array<Action | ActionGroup>
     */
    public function getCachedModalActions(): array
    {
        if (! $this->getModel()) {
            return [];
        }

        return $this->cachedModalActions;
    }

    /**
     * @return array<Action | ActionGroup>
     */
    protected function modalActions(): array
    {
        return [];
    }
}
