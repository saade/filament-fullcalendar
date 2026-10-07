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

    /**
     * The actions as FullCalendar custom buttons, for its footer toolbar.
     *
     * @return array<string, array{text: string, hint: string, alpineClickHandler: ?string, url: ?string, shouldOpenUrlInNewTab: bool}>
     */
    public function getFooterToolbarButtons(): array
    {
        $buttons = [];

        foreach ($this->cachedToolbarActions as $action) {
            if ($action->isHidden() || $action->isDisabled()) {
                continue;
            }

            $buttons[$action->getName()] = [
                'text' => (string) $action->getLabel(),
                'hint' => (string) ($action->getTooltip() ?? $action->getLabel()),
                'alpineClickHandler' => $action->getAlpineClickHandler(),
                'url' => $action->getUrl(),
                'shouldOpenUrlInNewTab' => $action->shouldOpenUrlInNewTab(),
            ];
        }

        return $buttons;
    }
}
