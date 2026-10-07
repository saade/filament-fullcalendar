<x-filament-widgets::widget>
    <x-filament::section>
        <div class="flex justify-end flex-1 mb-4">
            <x-filament::actions :actions="$this->getCachedHeaderActions()" class="shrink-0" />
        </div>

        @if ($this->hasFiltersSchema())
            <div class="mb-4">
                {{ $this->getFiltersSchema() }}
            </div>
        @endif

        @if (filled($this->getCachedTabs()))
            <div class="mb-4">
                {{ $this->getSchema('calendarTabs') }}
            </div>
        @endif

        <div wire:ignore x-load
            x-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-fullcalendar-alpine', 'saade/filament-fullcalendar') }}"
            x-ignore x-data="fullcalendar({
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
                toolbarButtons: @js($this->getToolbarButtons()),
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
            })" @class([
                'filament-fullcalendar',
                ...\Filament\Support\Facades\FilamentColor::getComponentClasses(\Filament\Support\View\Components\ButtonComponent::make(), 'primary'),
            ]) style="{{ $this->getDefaultEventColorStyles() }}"></div>
    </x-filament::section>

    <x-filament-actions::modals />
</x-filament-widgets::widget>
