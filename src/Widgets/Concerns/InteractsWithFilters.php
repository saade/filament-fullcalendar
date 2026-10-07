<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Actions\Action;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Enums\FiltersResetActionPosition;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

trait InteractsWithFilters
{
    /**
     * @var array<string, mixed> | null
     */
    public ?array $filters = [];

    /**
     * What the filter fields hold until the user applies them.
     *
     * @var array<string, mixed> | null
     */
    public ?array $deferredFilters = null;

    public ?string $activeTab = null;

    protected bool $persistsFiltersInSession = true;

    protected FiltersLayout $filtersLayout = FiltersLayout::Dropdown;

    protected bool $hasDeferredFilters = true;

    /**
     * @var int | array<string, int | null> | null
     */
    protected int | array | null $filtersFormColumns = null;

    protected Width | string | null $filtersFormWidth = null;

    protected ?string $filtersFormMaxHeight = null;

    protected FiltersResetActionPosition $filtersResetActionPosition = FiltersResetActionPosition::Header;

    /**
     * @var array<string | int, Tab>
     */
    protected array $cachedTabs;

    public function mountInteractsWithFilters(): void
    {
        if (! count($this->filters ?? [])) {
            $this->filters = null;
        }

        if ($this->persistsFiltersInSession()) {
            $this->filters ??= session()->get($this->getFiltersSessionKey());
            $this->activeTab ??= session()->get($this->getActiveTabSessionKey());
        }

        if (! array_key_exists($this->activeTab ?? '', $this->getCachedTabs())) {
            $this->activeTab = $this->getDefaultActiveTab();
        }

        $this->getFiltersSchema()->fill($this->filters);

        if ($this->hasDeferredFilters()) {
            $this->filters = $this->deferredFilters;
        }
    }

    public function bootedInteractsWithFilters(): void
    {
        $this->cacheSchema('filtersSchema', $this->getFiltersSchema());
    }

    /**
     * The fields that filter the calendar. Their state is in `$this->filters`.
     */
    public function filtersSchema(Schema $schema): Schema
    {
        return $schema;
    }

    public function getFiltersSchema(): Schema
    {
        if ((! $this->isCachingSchemas) && $this->hasCachedSchema('filtersSchema')) {
            return $this->getSchema('filtersSchema');
        }

        $schema = $this->makeSchema()
            ->columns($this->getFiltersFormColumns())
            ->live(! $this->hasDeferredFilters())
            ->statePath($this->hasDeferredFilters() ? 'deferredFilters' : 'filters');

        return $this->filtersSchema($schema);
    }

    public function hasFiltersSchema(): bool
    {
        return filled($this->getFiltersSchema()->getComponents(withActions: false, withHidden: true));
    }

    public function isFilterable(): bool
    {
        return $this->hasFiltersSchema() && ($this->getFiltersLayout() !== FiltersLayout::Hidden);
    }

    public function getFiltersLayout(): FiltersLayout
    {
        return $this->filtersLayout;
    }

    public function hasDeferredFilters(): bool
    {
        return $this->hasDeferredFilters;
    }

    /**
     * @return int | array<string, int | null>
     */
    public function getFiltersFormColumns(): int | array
    {
        return $this->filtersFormColumns ?? match ($this->getFiltersLayout()) {
            FiltersLayout::AboveContent, FiltersLayout::AboveContentCollapsible, FiltersLayout::BelowContent => [
                'sm' => 2,
                'lg' => 3,
                'xl' => 4,
                '2xl' => 5,
            ],
            default => 1,
        };
    }

    public function getFiltersFormWidth(): Width | string | null
    {
        return $this->filtersFormWidth ?? match ($this->getFiltersFormColumns()) {
            2 => Width::TwoExtraLarge,
            3 => Width::FourExtraLarge,
            4 => Width::SixExtraLarge,
            default => null,
        };
    }

    public function getFiltersFormMaxHeight(): ?string
    {
        return $this->filtersFormMaxHeight;
    }

    public function getFiltersResetActionPosition(): FiltersResetActionPosition
    {
        return $this->filtersResetActionPosition;
    }

    public function filtersTriggerAction(Action $action): Action
    {
        return $action;
    }

    public function filtersApplyAction(Action $action): Action
    {
        return $action;
    }

    public function filtersResetAction(Action $action): Action
    {
        return $action;
    }

    public function getFiltersTriggerAction(): Action
    {
        $action = Action::make('openFilters')
            ->label(__('filament-tables::table.actions.filter.label'))
            ->livewire($this);

        return $this->filtersTriggerAction($action);
    }

    /**
     * @return array{hint: string, count: int} | null
     */
    public function getFiltersToolbarButton(): ?array
    {
        if ((! $this->isFilterable()) || (! in_array($this->getFiltersLayout(), [FiltersLayout::Dropdown, FiltersLayout::Modal, FiltersLayout::AboveContentCollapsible]))) {
            return null;
        }

        return [
            'hint' => (string) $this->getFiltersTriggerAction()->getLabel(),
            'count' => $this->getActiveFiltersCount(),
        ];
    }

    public function getFiltersApplyAction(): Action
    {
        $action = Action::make('applyFilters')
            ->label(__('filament-tables::table.filters.actions.apply.label'))
            ->action('applyFilters')
            ->visible($this->hasDeferredFilters())
            ->button()
            ->livewire($this);

        return $this->filtersApplyAction($action);
    }

    public function getFiltersResetAction(): Action
    {
        $action = Action::make('resetFilters')
            ->label(__('filament-tables::table.filters.actions.reset.label'))
            ->color('danger')
            ->action('resetFilters')
            ->livewire($this);

        return $this->filtersResetAction($action);
    }

    public function applyFilters(): void
    {
        if ($this->hasDeferredFilters()) {
            $this->filters = $this->deferredFilters;
        }

        $this->updatedFilters();
    }

    public function resetFilters(): void
    {
        $this->getFiltersSchema()->fill();

        $this->applyFilters();
    }

    public function getActiveFiltersCount(): int
    {
        return collect($this->filters ?? [])
            ->filter(fn (mixed $value): bool => filled(is_array($value) ? array_filter(Arr::flatten($value), filled(...)) : $value) && ($value !== false))
            ->count();
    }

    public function updatedFilters(): void
    {
        if ($this->persistsFiltersInSession()) {
            session()->put($this->getFiltersSessionKey(), $this->filters);
        }

        $this->dispatchCalendarEvent('filters', ['count' => $this->getActiveFiltersCount()]);

        $this->refreshRecords();
    }

    /**
     * The tabs shown above the calendar, as on the list page of a resource.
     *
     * @return array<string | int, Tab>
     */
    public function getTabs(): array
    {
        return [];
    }

    /**
     * @return array<string | int, Tab>
     */
    public function getCachedTabs(): array
    {
        return $this->cachedTabs ??= collect($this->getTabs())
            ->map(fn (Tab $tab, string | int $key): Tab => $tab->hasCustomLabel() ? $tab : $tab->label($this->generateTabLabel((string) $key)))
            ->all();
    }

    public function getDefaultActiveTab(): ?string
    {
        $key = array_key_first($this->getCachedTabs());

        return filled($key) ? (string) $key : null;
    }

    public function getActiveTab(): ?Tab
    {
        return $this->getCachedTabs()[$this->activeTab ?? ''] ?? null;
    }

    public function updatedActiveTab(): void
    {
        if ($this->persistsFiltersInSession()) {
            session()->put($this->getActiveTabSessionKey(), $this->activeTab);
        }

        $this->refreshRecords();
    }

    public function generateTabLabel(string $key): string
    {
        return (string) str($key)
            ->replace(['_', '-'], ' ')
            ->ucfirst();
    }

    /**
     * Applies the query of the active tab. A query returned from
     * `fetchEvents()` gets it without asking.
     *
     * @template TQuery of Builder
     *
     * @param  TQuery  $query
     * @return TQuery
     */
    public function modifyQueryWithActiveTab(Builder $query): Builder
    {
        return $this->getActiveTab()?->modifyQuery($query) ?? $query;
    }

    public function calendarTabs(Schema $schema): Schema
    {
        return $schema->components([
            Tabs::make()
                ->key('calendarTabs')
                ->livewireProperty('activeTab')
                ->contained(false)
                ->tabs($this->getCachedTabs()),
        ]);
    }

    public function getFiltersSessionKey(): string
    {
        return md5($this::class) . '_filters';
    }

    public function getActiveTabSessionKey(): string
    {
        return md5($this::class) . '_active_tab';
    }

    public function persistsFiltersInSession(): bool
    {
        return $this->persistsFiltersInSession;
    }
}
