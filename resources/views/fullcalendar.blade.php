@php($locale = strtolower(str_replace('_', '-', $this->getConfig()['locale'])))

<x-filament::widget>
    <x-filament::card>
        <div
            wire:ignore
            x-data=""
            x-init='
                document.addEventListener("DOMContentLoaded", function() {
                    const config = @json($this->getConfig());
                    const events = @json($events);
                    const locale = "{{ $locale }}";

                    const eventClick = function ({ event, jsEvent }) {
                        if( event.url ) {
                            jsEvent.preventDefault();
                            window.open(event.url, event.extendedProps.shouldOpenInNewTab ? "_blank" : "_self");
                            return false;
                        }

                        @if ($this::isListeningClickEvent())
                            $wire.onEventClick(event)
                        @endif
                    }

                    const eventDrop = function ({ event, oldEvent, relatedEvents }) {
                        @if($this::isListeningDropEvent())
                            $wire.onEventDrop(event, oldEvent, relatedEvents)
                        @endif
                    }

                    const dateClick = function ({ date, allDay }) {
                        @if($this::canCreate())
                            $wire.onCreateEventClick({ date, allDay })
                        @endif
                    }

                    const select = function ({ start, end, allDay }) {
                        @if($this->config('selectable', false))
                            $wire.onCreateEventClick({ start, end, allDay })
                        @endif
                    }

                    const calendar = new FullCalendar.Calendar($el, {
                        ...config,
                        locale,
                        events,
                        eventClick,
                        eventDrop,
                        dateClick,
                        select,
                    });

                    calendar.render();

                    window.addEventListener("filament-fullcalendar:refresh", (event) => {
                        calendar.removeAllEvents();
                        event.detail.data.map(event => calendar.addEvent(event));
                    });
                })
            '></div>
    </x-filament::card>

    @if($this::canCreate())
        <x:filament-fullcalendar::create-event-modal />
    @endif

    @if($this::canEdit())
        <x:filament-fullcalendar::edit-event-modal />
    @endif
</x-filament::widget>
