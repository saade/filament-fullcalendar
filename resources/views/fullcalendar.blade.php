<x-filament-widgets::widget>
    <x-filament::section>
        <div class="flex justify-end flex-1 mb-4">
            <x-filament::actions :actions="$this->getCachedHeaderActions()" class="shrink-0" />
        </div>

        <div wire:ignore x-load
            x-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-fullcalendar-alpine', 'saade/filament-fullcalendar') }}"
            x-ignore x-data="fullcalendar({
                id: @js($this->getId()),
                locale: @js($this->getLocale()),
                plugins: @js($this->getPlugins()),
                schedulerLicenseKey: @js($this->getSchedulerLicenseKey()),
                timeZone: @js($this->getTimezone()),
                config: @js($this->getConfig()),
                editable: @json($this->isEditable()),
                selectable: @json($this->isSelectable()),
                eventClassNames: {!! htmlspecialchars($this->eventClassNames(), ENT_COMPAT) !!},
                eventContent: {!! htmlspecialchars($this->eventContent(), ENT_COMPAT) !!},
                eventDidMount: {!! htmlspecialchars($this->eventDidMount(), ENT_COMPAT) !!},
                eventWillUnmount: {!! htmlspecialchars($this->eventWillUnmount(), ENT_COMPAT) !!},
            })" class="filament-fullcalendar"></div>
    </x-filament::section>

    <x-filament-actions::modals />
</x-filament-widgets::widget>
