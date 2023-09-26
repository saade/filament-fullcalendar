@php
    $plugin = \Saade\FilamentFullcalendar\FilamentFullcalendarPlugin::get();
@endphp

<x-filament-widgets::widget>
    <x-filament::section>
        <div class="flex justify-end flex-1 mb-4">
            <x-filament-actions::actions :actions="$this->getCachedHeaderActions()" class="shrink-0" />
        </div>

        <div class="filament-fullcalendar" wire:ignore ax-load
            ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-fullcalendar-alpine', 'saade/filament-fullcalendar') }}"
            ax-load-css="{{ \Filament\Support\Facades\FilamentAsset::getStyleHref('filament-fullcalendar-styles', 'saade/filament-fullcalendar') }}"
            x-ignore x-data="fullcalendar({
                locale: @js($plugin->getLocale()),
                plugins: @js($plugin->getPlugins()),
                schedulerLicenseKey: @js($plugin->getSchedulerLicenseKey()),
                timeZone: @js($plugin->getTimezone()),
                config: @js($plugin->getConfig()),
                editable: @json($plugin->isEditable()),
                selectable: @json($plugin->isSelectable()),
            })">
        </div>
    </x-filament::section>

    <x-filament-actions::modals />
</x-filament-widgets::widget>
