<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Actions\Action;
use Filament\Support\Enums\IconSize;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Js;
use LogicException;
use Saade\FilamentFullCalendar\Toolbar\CalendarTool;
use Saade\FilamentFullCalendar\Toolbar\ToolbarButtonGroup;

use function Filament\Support\generate_icon_html;

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
     * The same as `toolbarButtons()`, for a toolbar under the calendar.
     *
     * @return array{start?: array<mixed>, center?: array<mixed>, end?: array<mixed>} | null
     */
    protected function footerToolbarButtons(): ?array
    {
        return null;
    }

    /**
     * @return array<string, array<int, array<int, CalendarTool | ToolbarButtonGroup>>>
     */
    public function getToolbarButtons(): array
    {
        return $this->resolveToolbarButtons(
            $this->toolbarButtons() ?? $this->getToolbarButtonsFromConfig('headerToolbar') ?? $this->getDefaultToolbarButtons(),
        );
    }

    /**
     * @return array<string, array<int, array<int, CalendarTool | ToolbarButtonGroup>>>
     */
    public function getFooterToolbarButtons(): array
    {
        return $this->resolveToolbarButtons(
            $this->footerToolbarButtons() ?? $this->getToolbarButtonsFromConfig('footerToolbar') ?? [],
        );
    }

    /**
     * @return array{headerToolbar: array<string, string> | false, footerToolbar: array<string, string> | false, buttons: array<string, array<string, string | bool>>} | null
     */
    public function getNativeToolbar(): ?array
    {
        if (! $this->hasNativeToolbar()) {
            return null;
        }

        $buttons = [];
        $toolbars = [];

        foreach (['headerToolbar' => $this->getToolbarButtons(), 'footerToolbar' => $this->getFooterToolbarButtons()] as $option => $toolbar) {
            $toolbars[$option] = false;

            foreach ($toolbar as $section => $groups) {
                $names = [];

                foreach ($groups as $group) {
                    $tools = [];

                    foreach ($group as $tool) {
                        array_push($tools, ...(($tool instanceof ToolbarButtonGroup) ? $tool->getResolvedButtons() : [$tool]));
                    }

                    foreach ($tools as $tool) {
                        if ((! $this->isNativeTool($tool->getName())) && filled($tool->getJsHandler())) {
                            $buttons[$tool->getName()] = $this->makeNativeButton($tool);
                        }
                    }

                    $names[] = implode(',', array_map(fn (CalendarTool $tool): string => $tool->getName(), $tools));
                }

                $toolbars[$option][$section] = implode(' ', $names);
            }
        }

        return [...$toolbars, 'buttons' => $buttons];
    }

    /**
     * @return array<string, string | bool>
     */
    protected function makeNativeButton(CalendarTool $tool): array
    {
        $icon = generate_icon_html($tool->getIcon(), size: IconSize::Small)?->toHtml();
        $isIconOnly = $tool->isLabelHidden() && filled($icon);

        return array_filter([
            'text' => $tool->getLabel(),
            'handler' => $tool->getJsHandler(),
            'icon' => $icon,
            'isIconOnly' => $isIconOnly,
            'isPrimary' => $tool->getColor() === 'primary',
            'isToggle' => $tool->isToggle(),
            'tooltip' => $tool->getTooltipJsExpression() ?? ($isIconOnly ? Js::from($tool->getLabel())->toHtml() : null),
            'active' => $tool->getActiveJsExpression(),
            'disabled' => $tool->getDisabledJsExpression(),
            'badge' => $tool->getBadgeJsExpression(),
        ]);
    }

    protected function isNativeTool(string $name): bool
    {
        return in_array($name, ['prev', 'next', 'prevYear', 'nextYear', 'today', 'title'], true)
            || ((! array_key_exists($name, $this->getTools())) && (filled($this->makeViewTool($name)) || filled($this->makeCustomButtonTool($name))));
    }

    /**
     * @param  array<string, array<mixed>>  $buttons
     * @return array<string, array<int, array<int, CalendarTool | ToolbarButtonGroup>>>
     */
    protected function resolveToolbarButtons(array $buttons): array
    {
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
                ->labelJsExpression("getToolHint('prev')")
                ->icon(Heroicon::ChevronLeft)
                ->jsHandler('calendar?.prev()'),
            CalendarTool::make('next')
                ->label(__('filament::components/pagination.actions.next.label'))
                ->labelJsExpression("getToolHint('next')")
                ->icon(Heroicon::ChevronRight)
                ->jsHandler('calendar?.next()'),
            CalendarTool::make('prevYear')
                ->icon(Heroicon::ChevronDoubleLeft)
                ->labelJsExpression("getToolHint('prevYear')")
                ->jsHandler('calendar?.prevYear()'),
            CalendarTool::make('nextYear')
                ->icon(Heroicon::ChevronDoubleRight)
                ->labelJsExpression("getToolHint('nextYear')")
                ->jsHandler('calendar?.nextYear()'),
            CalendarTool::make('today')
                ->hiddenLabel(false)
                ->labelJsExpression("getToolLabel('today')")
                ->tooltipJsExpression("getToolHint('today')")
                ->jsHandler('calendar?.today()')
                ->disabledJsExpression('isTodayDisabled'),
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
        $tooltip = $action->getTooltip();

        return CalendarTool::make($action->getName())
            ->tooltipJsExpression(filled($tooltip) ? Js::from((string) $tooltip)->toHtml() : null)
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
            || array_key_exists($name, (array) ($this->getConfig()['views'] ?? []))
            || array_key_exists('views', $this->getJsCallbacks());

        if (! $isView) {
            return null;
        }

        $view = Js::from($name);

        return CalendarTool::make($name)
            ->hiddenLabel(false)
            ->labelJsExpression("getToolLabel({$view})")
            ->tooltipJsExpression("getToolHint({$view})")
            ->jsHandler("calendar?.changeView({$view})")
            ->activeJsExpression("viewType === {$view}")
            ->toggle();
    }

    protected function makeCustomButtonTool(string $name): ?CalendarTool
    {
        $button = $this->getConfig()['buttons'][$name] ?? null;

        if (blank($button) && (! array_key_exists('buttons', $this->getJsCallbacks()))) {
            return null;
        }

        return CalendarTool::make($name)
            ->label($button['text'] ?? null)
            ->hiddenLabel(false)
            ->jsHandler('clickCustomButton(' . Js::from($name) . ', $event)');
    }

    /**
     * FullCalendar's own `headerToolbar` or `footerToolbar` option, read as
     * the layout: a space separates buttons and a comma joins them.
     *
     * @return array{start: array<mixed>, center: array<mixed>, end: array<mixed>} | null
     */
    protected function getToolbarButtonsFromConfig(string $option): ?array
    {
        $config = $this->getConfig();

        if (! array_key_exists($option, $config)) {
            return null;
        }

        $toolbar = (array) ($config[$option] ?: []);

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
