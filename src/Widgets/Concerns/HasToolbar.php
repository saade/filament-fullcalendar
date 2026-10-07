<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Js;
use LogicException;
use Saade\FilamentFullCalendar\Toolbar\CalendarTool;
use Saade\FilamentFullCalendar\Toolbar\ToolbarButtonGroup;

trait HasToolbar
{
    /**
     * @var array<string, CalendarTool>
     */
    protected array $cachedTools;

    /**
     * Where the tools go, by name. An array inside a section joins its tools
     * into a group of buttons.
     *
     * @return array{start?: array<mixed>, center?: array<mixed>, end?: array<mixed>} | null
     */
    protected function toolbarButtons(): ?array
    {
        return null;
    }

    /**
     * @return array<CalendarTool>
     */
    protected function tools(): array
    {
        return [];
    }

    /**
     * @return array{start: array<mixed>, center: array<mixed>, end: array<mixed>}
     */
    public function getDefaultToolbarButtons(): array
    {
        return [
            'start' => [['prev', 'next'], 'today'],
            'center' => ['title'],
            'end' => [
                ['dayGridMonth', 'dayGridWeek', 'dayGridDay'],
                ...($this->getFiltersToolbarButton() ? ['filters'] : []),
            ],
        ];
    }

    /**
     * @return array<string, array<int, array<int, CalendarTool | ToolbarButtonGroup>>>
     */
    public function getToolbarButtons(): array
    {
        $buttons = $this->toolbarButtons() ?? $this->getHeaderToolbarButtonsFromConfig() ?? $this->getDefaultToolbarButtons();

        $toolbar = [];

        foreach (['start', 'center', 'end'] as $section) {
            $groups = [];

            foreach ($buttons[$section] ?? [] as $group) {
                $group = array_values(array_filter(array_map($this->resolveToolbarButton(...), is_array($group) ? $group : [$group])));

                if (filled($group)) {
                    $groups[] = $group;
                }
            }

            $toolbar[$section] = $groups;
        }

        return array_filter($toolbar) ? $toolbar : [];
    }

    protected function resolveToolbarButton(string | ToolbarButtonGroup $button): CalendarTool | ToolbarButtonGroup | null
    {
        if ($button instanceof ToolbarButtonGroup) {
            $tools = array_values(array_filter(array_map($this->resolveToolbarButton(...), $button->getButtons())));

            return filled($tools) ? $button->resolvedButtons($tools) : null;
        }

        $tool = $this->getTool($button) ?? throw new LogicException("Toolbar button [{$button}] cannot be found.");

        return $tool->isVisible() ? $tool : null;
    }

    public function getTool(string $name): ?CalendarTool
    {
        return $this->getTools()[$name]
            ?? $this->makeViewTool($name)
            ?? $this->makeCustomButtonTool($name);
    }

    /**
     * @return array<string, CalendarTool>
     */
    public function getTools(): array
    {
        return $this->cachedTools ??= collect([
            ...$this->getDefaultTools(),
            ...array_map($this->makeActionTool(...), $this->cachedToolbarActions),
            ...$this->tools(),
        ])
            ->keyBy(fn (CalendarTool $tool): string => $tool->getName())
            ->all();
    }

    /**
     * @return array<CalendarTool>
     */
    protected function getDefaultTools(): array
    {
        $filters = $this->getFiltersToolbarButton();

        return [
            CalendarTool::make('prev')
                ->label(__('filament::components/pagination.actions.previous.label'))
                ->icon(Heroicon::ChevronLeft)
                ->jsHandler('calendar?.prev()'),
            CalendarTool::make('next')
                ->label(__('filament::components/pagination.actions.next.label'))
                ->icon(Heroicon::ChevronRight)
                ->jsHandler('calendar?.next()'),
            CalendarTool::make('prevYear')
                ->icon(Heroicon::ChevronDoubleLeft)
                ->labelJsExpression("getToolLabel('prevYear')")
                ->jsHandler('calendar?.prevYear()'),
            CalendarTool::make('nextYear')
                ->icon(Heroicon::ChevronDoubleRight)
                ->labelJsExpression("getToolLabel('nextYear')")
                ->jsHandler('calendar?.nextYear()'),
            CalendarTool::make('today')
                ->hiddenLabel(false)
                ->labelJsExpression("getToolLabel('today')")
                ->jsHandler('calendar?.today()')
                ->disabledJsExpression('isTodayInRange'),
            CalendarTool::make('title')
                ->heading()
                ->labelJsExpression('title'),
            CalendarTool::make('filters')
                ->label($filters['hint'] ?? null)
                ->icon(Heroicon::Funnel)
                ->jsHandler("\$dispatch('filament-fullcalendar--toggle-filters', { calendar: id, element: \$el })")
                ->badgeJsExpression('filtersCount')
                ->visible(filled($filters)),
        ];
    }

    protected function makeActionTool(Action $action): CalendarTool
    {
        $url = $action->getUrl();

        return CalendarTool::make($action->getName())
            ->label((string) $action->getLabel())
            ->hiddenLabel(false)
            ->icon($action->getIcon())
            ->visible($action->isVisible() && (! $action->isDisabled()))
            ->jsHandler($action->getAlpineClickHandler() ?? (filled($url)
                ? 'window.open(' . Js::from($url) . ', ' . Js::from($action->shouldOpenUrlInNewTab() ? '_blank' : '_self') . ')'
                : '$wire.mountAction(' . Js::from($action->getName()) . ')'));
    }

    protected function makeViewTool(string $name): ?CalendarTool
    {
        $isView = preg_match('/^(dayGrid|timeGrid|list|multiMonth|timeline|resourceTimeline|resourceTimeGrid|resourceDayGrid)([A-Z]\w*)?$/', $name)
            || array_key_exists($name, (array) ($this->getConfig()['views'] ?? []));

        if (! $isView) {
            return null;
        }

        $view = Js::from($name);

        return CalendarTool::make($name)
            ->hiddenLabel(false)
            ->labelJsExpression("getToolLabel({$view})")
            ->jsHandler("calendar?.changeView({$view})")
            ->activeJsExpression("viewType === {$view}")
            ->toggle();
    }

    protected function makeCustomButtonTool(string $name): ?CalendarTool
    {
        $button = $this->getConfig()['customButtons'][$name] ?? null;

        if (blank($button) && (! array_key_exists('customButtons', $this->getJsCallbacks()))) {
            return null;
        }

        return CalendarTool::make($name)
            ->label($button['text'] ?? null)
            ->hiddenLabel(false)
            ->jsHandler('clickCustomButton(' . Js::from($name) . ', $event, $el)');
    }

    /**
     * FullCalendar's own `headerToolbar` option, read as the layout: a space
     * separates buttons and a comma joins them.
     *
     * @return array{start: array<mixed>, center: array<mixed>, end: array<mixed>} | null
     */
    protected function getHeaderToolbarButtonsFromConfig(): ?array
    {
        $config = $this->getConfig();

        if (! array_key_exists('headerToolbar', $config)) {
            return null;
        }

        $toolbar = (array) ($config['headerToolbar'] ?: []);

        $parse = fn (?string $section): array => array_map(
            fn (string $group): array | string => str_contains($group, ',') ? explode(',', $group) : $group,
            preg_split('/\s+/', trim((string) $section), flags: PREG_SPLIT_NO_EMPTY) ?: [],
        );

        return [
            'start' => $parse($toolbar['start'] ?? $toolbar['left'] ?? null),
            'center' => $parse($toolbar['center'] ?? null),
            'end' => $parse($toolbar['end'] ?? $toolbar['right'] ?? null),
        ];
    }
}
