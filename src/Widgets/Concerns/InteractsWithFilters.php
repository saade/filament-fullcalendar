<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Builder;

trait InteractsWithFilters
{
    /**
     * @var array<string, mixed> | null
     */
    public ?array $filters = [];

    public ?string $activeTab = null;

    protected bool $persistsFiltersInSession = true;

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
    }

    public function bootedInteractsWithFilters(): void
    {
        $this->cacheSchema('filtersSchema', $this->getFiltersSchema());
    }

    /**
     * The fields shown above the calendar. Their state is in `$this->filters`.
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
            ->columns([
                'md' => 2,
                'xl' => 3,
                '2xl' => 4,
            ])
            ->live()
            ->statePath('filters');

        return $this->filtersSchema($schema);
    }

    public function hasFiltersSchema(): bool
    {
        return filled($this->getFiltersSchema()->getComponents(withActions: false, withHidden: true));
    }

    public function updatedFilters(): void
    {
        if ($this->persistsFiltersInSession()) {
            session()->put($this->getFiltersSessionKey(), $this->filters);
        }

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
