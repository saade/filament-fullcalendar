@php
    $plugin = \Saade\FilamentFullCalendar\FilamentFullCalendarPlugin::get();

    $customButtons = $this->customButtons();
    $js = fn (string $expression): string => htmlspecialchars($expression, ENT_COMPAT);
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
                customButtons: {
                    @foreach($customButtons as $customButtonKey => $customButton)
                        @js($customButtonKey): Object.assign(
                            @js(\Illuminate\Support\Arr::except($customButton, 'click')),
                            @if(filled($this->getCustomButtonJsFunction($customButtonKey)))
                                { click: {!! $js($this->getCustomButtonJsFunction($customButtonKey)) !!} },
                            @else
                                {},
                            @endif
                        ),
                    @endforeach
                },
                eventClassNames: {!! $js($this->eventClassNames()) !!},
                eventContent: {!! $js($this->eventContent()) !!},
                eventDidMount: {!! $js($this->eventDidMount()) !!},
                eventWillUnmount: {!! $js($this->eventWillUnmount()) !!},
                eventMouseEnter: {!! $js($this->eventMouseEnter()) !!},eventContent:
                eventMouseLeave: {!! $js($this->eventMouseLeave()) !!},
                resourceUrl: @js($this->getResourceUrl()),
                resourceMethod: @js($this->getResourceMethod()),
                resourceExtraParams: {!! $js($this->getResourceExtraParams()) !!},
            })" class="filament-fullcalendar"></div>
    </x-filament::section>

    <x-filament-actions::modals />
</x-filament-widgets::widget>
