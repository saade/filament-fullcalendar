@php($locale = strtolower(str_replace('_', '-', $this->config('locale', config('app.locale')))))

<x-filament-widgets::widget>
    <x-filament::card>
        <div class="filament-fullcalendar--calendar" wire:ignore x-ref="calendar" ax-load
            ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-fullcalendar-alpine', 'saade/filament-fullcalendar') }}"
            ax-load-css="{{ \Filament\Support\Facades\FilamentAsset::getStyleHref('filament-fullcalendar-styles', 'saade/filament-fullcalendar') }}"
            x-data="fullcalendar({
                key: @js($this->getKey()),
                config: @js($this->getConfig()),
                locale: '{{ $locale }}',
                events: @js($events),
                initialView: @js($this->config('initialView')),
                initialDate: @js($this->config('initialDate')),
                shouldSaveState: @js($this->config('saveState', false)),
                handleEventClickUsing: async ({ event, jsEvent }) => {
                    if (event.url) {
                        jsEvent.preventDefault();
                        window.open(event.url, event.extendedProps.shouldOpenInNewTab ? '_blank' : '_self');
                        return false;
                    }
            
                    @if($this::isListeningClickEvent())
                    $wire.onEventClick(event)
                    @endif
                },
                handleEventDropUsing: async ({ event, oldEvent, relatedEvents }) => {
                    @if($this::isListeningDropEvent())
                    $wire.onEventDrop(event, oldEvent, relatedEvents)
                    @endif
                },
                handleEventResizeUsing: async ({ event, oldEvent, relatedEvents }) => {
                    @if($this::isListeningResizeEvent())
                    $wire.onEventResize(event, oldEvent, relatedEvents)
                    @endif
                },
                handleDateClickUsing: async ({ date, allDay }) => {
                    @if($this::canCreate())
                    $wire.onCreateEventClick({ date, allDay })
                    @endif
                },
                handleSelectUsing: async ({ start, end, allDay }) => {
                    @if($this->config('selectable', false))
                    $wire.onCreateEventClick({ start, end, allDay })
                    @endif
                },
                fetchEventsUsing: async ({ start, end, allDay }, successCallback, failureCallback) => {
                    @if($this::canFetchEvents())
                    return $wire.fetchEvents({ start, end, allDay })
                        .then(events => {
                            if (events.length == 0) return Object.values($data.cachedEvents)
                            if (events[0].id) {
                                events.forEach((event) => $data.cachedEvents[event.id] = event)
                                successCallback(Object.values($data.cachedEvents))
                            } else {
                                successCallback(events)
                            }
                        })
                        .catch(failureCallback);
                    @else
                    return successCallback([]);
                    @endif
                },
            })"
            x-on:filament-fullcalendar--refresh.window="
                {{-- prettier-ignore-start --}}
                @if ($this::canFetchEvents())
                    $data.calendar.refetchEvents();
                @else
                    $data.calendar.removeAllEvents();
                    event.detail.data.map(event => $data.calendar.addEvent(event));
                @endif
                {{-- prettier-ignore-end --}}
            ">
        </div>
    </x-filament::card>

    @if ($this::canCreate())
        <x:filament-fullcalendar::create-event-modal />
    @endif

    @if ($this::canView())
        <x:filament-fullcalendar::edit-event-modal />
    @endif
</x-filament-widgets::widget>
