<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Actions\Action;

trait InteractsWithToolbarActions
{
    /**
     * @var array<Action>
     */
    protected array $cachedToolbarActions = [];

    /**
     * Actions the toolbar can open. Each one is also a tool of the same name,
     * to be placed with `toolbarButtons()`.
     *
     * @return array<Action>
     */
    protected function toolbarActions(): array
    {
        return [];
    }

    public function cacheInteractsWithToolbarActions(): void
    {
        foreach ($this->toolbarActions() as $action) {
            $this->cacheAction($action);
            $this->cachedToolbarActions[] = $action;
        }
    }
}
