@php
    $plugin = \Saade\FilamentFullCalendar\FilamentFullCalendarPlugin::get();
@endphp

<x-filament-widgets::widget>
    <x-filament::section>
        <div class="flex justify-end flex-1 mb-4">
            <x-filament::actions :actions="$this->getCachedHeaderActions()" class="shrink-0" />
        </div>

        <div wire:ignore x-load
            x-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-fullcalendar-alpine', 'saade/filament-fullcalendar') }}"
            x-ignore x-data="fullcalendar({
                locale: @js($plugin->getLocale()),
                plugins: @js($plugin->getPlugins()),
                schedulerLicenseKey: @js($plugin->getSchedulerLicenseKey()),
                timeZone: @js($plugin->getTimezone()),
                config: @js($this->getConfig()),
                editable: @json($plugin->isEditable()),
                selectable: @json($plugin->isSelectable()),
                eventClassNames: {!! htmlspecialchars($this->eventClassNames(), ENT_COMPAT) !!},
                eventContent: {!! htmlspecialchars($this->eventContent(), ENT_COMPAT) !!},
                eventDidMount: {!! htmlspecialchars($this->eventDidMount(), ENT_COMPAT) !!},
                eventWillUnmount: {!! htmlspecialchars($this->eventWillUnmount(), ENT_COMPAT) !!},
            })">

            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <x-filament::button.group>
                        <x-filament::button icon="heroicon-o-chevron-left"
                            x-on:click="$dispatch('filament-fullcalendar--prev')" />

                        <x-filament::button icon="heroicon-o-chevron-right"
                            x-on:click="$dispatch('filament-fullcalendar--next')" />
                    </x-filament::button.group>

                    <x-filament::button
                        x-on:click="$dispatch('filament-fullcalendar--today')">Today</x-filament::button>
                </div>

                <div>
                    <h1 class="text-lg font-semibold leading-5 md:text-2xl" x-text="title"></h1>
                </div>

                <x-filament::button.group>
                    <x-filament::button
                        x-on:click="$dispatch('filament-fullcalendar--view', { view: 'dayGridMonth' })">Month</x-filament::button>

                    <x-filament::button
                        x-on:click="$dispatch('filament-fullcalendar--view', { view: 'dayGridWeek' })">Week</x-filament::button>

                    <x-filament::button
                        x-on:click="$dispatch('filament-fullcalendar--view', { view: 'dayGridDay' })">Day</x-filament::button>
                </x-filament::button.group>
            </div>

            <div class="filament-fullcalendar mt-4" x-ref="calendar"></div>
        </div>
    </x-filament::section>

    <x-filament-actions::modals />
</x-filament-widgets::widget>
