@php($locale = strtolower(str_replace('_', '-', $this->config('locale', config('app.locale')))))

<x-filament::widget>
    <x-filament::card>
        <div
            wire:ignore
            x-data=""
            x-init='
                document.addEventListener("DOMContentLoaded", function() {
                    const config = @json($this->getConfig());
                    const locale = "{{ $locale }}";
                    const events = @json($events);
                    const cachedEventIds = [
                        ...events.map(event => event.id),
                    ];
                    const eventsData = [];

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

                    const fetchEvents = function ({ start, end }, successCallback, failureCallback) {
                        @if( $this::canFetchEvents() )
                            return $wire.fetchEvents({ start, end }, cachedEventIds)
                                .then(events => {
                                    // Cache fetched events
                                    events.forEach((event) => cachedEventIds.indexOf(event.id) != -1 ? null : cachedEventIds.push(event.id) && eventsData.push(event))

                                    return successCallback(eventsData);
                                })
                                .catch( failureCallback );
                        @else
                            return successCallback([]);
                        @endif
                    }

                    const calendar = new FullCalendar.Calendar($el, {
                        ...config,
                        locale,
                        eventClick,
                        eventDrop,
                        dateClick,
                        select,
                        eventSources:[
                            { events },
                            fetchEvents
                        ]
                    });

                    calendar.render();

                    window.addEventListener("filament-fullcalendar:refresh", () => {
                        calendar.removeAllEvents();
                        cachedEventIds.length = 0;
                        eventsData.length = 0;
                        calendar.refetchEvents();
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
