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
     * Actions that become buttons of the calendar's toolbar. Place one by
     * putting its name in `headerToolbar` or `footerToolbar`.
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
     * @return array<string, array{text: string, hint: string, alpineClickHandler: ?string, url: ?string, shouldOpenUrlInNewTab: bool}>
     */
    public function getToolbarButtons(): array
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
