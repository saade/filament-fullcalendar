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
                    const cachedEvents = new Object();

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
                    const eventResize = function ({ event, oldEvent, relatedEvents }) {
                        @if($this::isListeningResizeEvent())
                            $wire.onEventResize(event, oldEvent, relatedEvents)
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

                    const fetchEvents = function ({ start, end, allDay }, successCallback, failureCallback) {
                        @if( $this::canFetchEvents() )
                            return $wire.fetchEvents({ start, end, allDay })
                                .then(events => {
                                    if(events.length == 0) return Object.values(cachedEvents)

                                    if(events[0].id){ // cater for no id provided
                                        // Cache fetched events
                                        events.forEach((event) => cachedEvents[event.id] = event)

                                        successCallback(Object.values(cachedEvents))
                                    }else{
                                        successCallback(events)
                                    }
                                })
                                .catch( failureCallback );
                        @else
                            return successCallback([]);
                        @endif
                    }

                    @if($this->config('saveState', false))
                    const key = "{{ $this->getKey() }}";
                    const initialView =
                        localStorage.getItem("fullcalendar.view." + key) ??
                            @json($this->config('initialView'));
                    const initialDate =
                        localStorage.getItem("fullcalendar.date." + key) ??
                            @json($this->config('initialDate'));
                    @endif

                    const calendar = new FullCalendar.Calendar($el, {
                        ...config,
                        locale,
                        eventClick,
                        eventDrop,
                        eventResize,
                        dateClick,
                        select,
                        eventSources:[
                            { events },
                            fetchEvents
                        ],
                        @if($this->config('saveState', false))
                        initialView: initialView ?? undefined,
                        initialDate: initialDate ?? undefined,
                        datesSet: function ({start, view}) {
                            localStorage.setItem("fullcalendar.view." + key, view.type);
                            localStorage.setItem("fullcalendar.date." + key, start.toISOString());
                        },
                        @endif
                    });

                    calendar.render();

                    window.addEventListener("filament-fullcalendar:refresh", () => {
                        @if( $this::canFetchEvents() )
                            calendar.refetchEvents();
                        @else
                            calendar.removeAllEvents();

                            event.detail.data.map(event => calendar.addEvent(event));
                        @endif
                    });
                })
            '></div>
    </x-filament::card>

    @if($this::canCreate())
        <x:filament-fullcalendar::create-event-modal />
    @endif

    @if($this::canView())
        <x:filament-fullcalendar::edit-event-modal />
    @endif
</x-filament::widget>
