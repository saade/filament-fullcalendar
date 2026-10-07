@php
    use Filament\Support\Enums\Width;
    use Filament\Tables\Enums\FiltersLayout;

    $headerActions = $this->getCachedHeaderActions();
    $toolbar = $this->getToolbarButtons();
    $footerToolbar = $this->getFooterToolbarButtons();
    $hasFilters = $this->isFilterable();
    $filtersLayout = $this->getFiltersLayout();
    $hasFiltersDialog = $hasFilters && in_array($filtersLayout, [FiltersLayout::Dropdown, FiltersLayout::Modal]);
    $hasFiltersAboveContent = $hasFilters && in_array($filtersLayout, [FiltersLayout::AboveContent, FiltersLayout::AboveContentCollapsible]);
    $hasFiltersBelowContent = $hasFilters && ($filtersLayout === FiltersLayout::BelowContent);
    $hasCollapsibleFilters = $hasFilters && ($filtersLayout === FiltersLayout::AboveContentCollapsible);

    if ($hasFilters) {
        $filtersTriggerAction = $this->getFiltersTriggerAction();
        $filtersApplyAction = $this->getFiltersApplyAction();
        $filtersResetAction = $this->getFiltersResetAction();
        $filtersResetActionPosition = $this->getFiltersResetActionPosition();
        $filtersFormWidth = $this->getFiltersFormWidth();
        $filtersModalId = $this->getId() . '-filters';
    }
@endphp

<x-filament-widgets::widget>
    @if (filled($this->getCachedTabs()))
        <div class="fi-fc-tabs">
            {{ $this->getSchema('calendarTabs') }}
        </div>
    @endif

    <x-filament::section
        :heading="$this->getHeadingHtml()"
        :description="$this->getDescriptionHtml()"
    >
        @if (filled($headerActions))
            <x-slot name="afterHeader">
                <x-filament::actions :actions="$headerActions" />
            </x-slot>
        @endif

        @if ($hasFiltersDialog && (($filtersLayout === FiltersLayout::Modal) || $filtersTriggerAction->isModalSlideOver()))
            <div
                x-data
                x-on:filament-fullcalendar--toggle-filters.window="if ($event.detail.calendar === @js($this->getId())) $dispatch('open-modal', { id: @js($filtersModalId) })"
            >
                <x-filament::modal
                    :id="$filtersModalId"
                    :heading="$filtersTriggerAction->getCustomModalHeading() ?? __('filament-tables::table.filters.heading')"
                    :slide-over="$filtersTriggerAction->isModalSlideOver()"
                    :width="$filtersFormWidth ?? Width::Medium"
                    :wire:key="$this->getId() . '.filters'"
                    class="fi-fc-filters-modal"
                >
                    {{ $this->getFiltersSchema() }}

                    <x-slot name="footerActions">
                        @if ($filtersApplyAction->isVisible())
                            {{ $filtersApplyAction->close() }}
                        @endif

                        {{ $filtersResetAction }}
                    </x-slot>
                </x-filament::modal>
            </div>
        @elseif ($hasFiltersDialog)
            <x-filament::dropdown
                :max-height="$this->getFiltersFormMaxHeight()"
                placement="bottom-end"
                shift
                :flip="false"
                :width="$filtersFormWidth ?? Width::ExtraSmall"
                :wire:key="$this->getId() . '.filters'"
                class="fi-fc-filters-dropdown"
                x-on:filament-fullcalendar--toggle-filters.window="if ($event.detail.calendar === {{ \Illuminate\Support\Js::from($this->getId()) }}) toggle($event.detail.element)"
            >
                <x-slot name="trigger"></x-slot>

                <x-filament-fullcalendar::filters
                    :apply-action="$filtersApplyAction"
                    :form="$this->getFiltersSchema()"
                    :reset-action="$filtersResetAction"
                    :reset-action-position="$filtersResetActionPosition"
                />
            </x-filament::dropdown>
        @endif

        @if ($hasFiltersAboveContent)
            <div
                @if ($hasCollapsibleFilters)
                    x-data="{ areFiltersOpen: false }"
                    x-on:filament-fullcalendar--toggle-filters.window="if ($event.detail.calendar === @js($this->getId())) areFiltersOpen = ! areFiltersOpen"
                    x-show="areFiltersOpen"
                    x-cloak
                @endif
            >
                <x-filament-fullcalendar::filters
                    :apply-action="$filtersApplyAction"
                    :form="$this->getFiltersSchema()"
                    :reset-action="$filtersResetAction"
                    :reset-action-position="$filtersResetActionPosition"
                    class="fi-fc-filters-above-content"
                />
            </div>
        @endif

        <div
            wire:ignore.self
            x-load
            x-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-fullcalendar-alpine', 'saade/filament-fullcalendar') }}"
            x-data="fullcalendar({
                id: @js($this->getId()),
                locale: @js($this->getLocale()),
                plugins: @js($this->getPlugins()),
                schedulerLicenseKey: @js($this->getSchedulerLicenseKey()),
                timeZone: @js($this->getTimezone()),
                config: @js($this->getConfig()),
                resources: @js($this->getInitialResources()),
                eventSources: @js($this->getEventSources()),
                googleCalendarApiKey: @js($this->getGoogleCalendarApiKey()),
                editable: @json($this->isEditable()),
                selectable: @json($this->isSelectable()),
                filtersCount: @js($this->getActiveFiltersCount()),
                pollingInterval: @js($this->getPollingIntervalInMilliseconds()),
                droppable: @json($this->isDroppable()),
                widget: @js(static::class),
                hasSpaMode: @json(\Filament\Support\Facades\FilamentView::hasSpaMode()),
                shouldReportDates: @json(method_exists($this, 'onDatesSet')),
                callbacks: {
                    @foreach ($this->getJsCallbacks() as $name => $callback)
                        {{ $name }}: ({!! htmlspecialchars($callback, ENT_COMPAT) !!}),
                    @endforeach
                },
            })"
        >
            @if (filled($toolbar))
                @include('filament-fullcalendar::toolbar.index', ['toolbar' => $toolbar])
            @endif

            <div
                wire:ignore
                x-ref="calendar"
                class="filament-fullcalendar"
                style="{{ $this->getDefaultEventColorStyles() }}"
            ></div>

            @if (filled($footerToolbar))
                @include('filament-fullcalendar::toolbar.index', ['toolbar' => $footerToolbar, 'isFooter' => true])
            @endif
        </div>

        @if ($hasFiltersBelowContent)
            <x-filament-fullcalendar::filters
                :apply-action="$filtersApplyAction"
                :form="$this->getFiltersSchema()"
                :reset-action="$filtersResetAction"
                :reset-action-position="$filtersResetActionPosition"
                class="fi-fc-filters-below-content"
            />
        @endif
    </x-filament::section>

    <x-filament-actions::modals />
</x-filament-widgets::widget>
