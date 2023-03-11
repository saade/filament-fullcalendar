@php($locale = strtolower(str_replace('_', '-', $this->config('locale', config('app.locale')))))

<x-filament::widget>

    <x-filament::card>
        <div class="flex flex-row gap-x-2">

            <div
                wire:ignore
                x-ref="calendar"
                x-data="calendarComponent({
                key: @js($this->getKey()),
                config: {{ json_encode($this->getConfig(), JSON_PRETTY_PRINT) }},
                locale: '{{ $locale }}',
                events: {{ json_encode($events) }},
                initialView: @js($this->config('initialView')),
                initialDate: @js($this->config('initialDate')),
                shouldSaveState: @js($this->config('saveState', false)),
                handleEventClickUsing: async ({ event, jsEvent }) => {
                    if( event.url ) {
                        jsEvent.preventDefault();
                        window.open(event.url, event.extendedProps.shouldOpenInNewTab ? '_blank' : '_self');
                        return false;
                    }

                    @if ($this::isListeningClickEvent())
                        $wire.onEventClick(event)
                    @endif
                },
                handleEventReceiveUsing: async ({ event }) => {
                    @if($this::isListeningReceiveEvent())
                        $wire.onEventReceive(event)
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
                    @if( $this::canFetchEvents() )
                        return $wire.fetchEvents({ start, end, allDay })
                            .then(events => {
                                if(events.length == 0) return Object.values($data.cachedEvents)
                                if(events[0].id) {
                                    events.forEach((event) => $data.cachedEvents[event.id] = event)
                                    successCallback(Object.values($data.cachedEvents))
                                } else{
                                    successCallback(events)
                                }
                            })
                            .catch( failureCallback );
                    @else
                        return successCallback([]);
                    @endif
                },
            })"
                x-on:filament-fullcalendar--refresh.window="
                @if( $this::canFetchEvents() )
                    $data.calendar.refetchEvents();
                @else
                    $data.calendar.removeAllEvents();
                    event.detail.data.map(event => $data.calendar.addEvent(event));
                @endif
            "
                class="filament-fullcalendar--calendar flex-auto"
            ></div>
            <div id='external-events' class="flex-auto w-20" >
                <p>
                    <strong>Draggable Events</strong>
                </p>

                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                    <div class='fc-event-main'>My Event 1</div>
                </div>
                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                    <div class='fc-event-main'>My Event 2</div>
                </div>
                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                    <div class='fc-event-main'>My Event 3</div>
                </div>
                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                    <div class='fc-event-main'>My Event 4</div>
                </div>
                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                    <div class='fc-event-main'>My Event 5</div>
                </div>

                <p>
                    <input type='checkbox' id='drop-remove' />
                    <label for='drop-remove'>remove after drop</label>
                </p>
            </div>
        </div>
    </x-filament::card>

    @if($this::canCreate())
        <x:filament-fullcalendar::create-event-modal />
    @endif

    @if($this::canView())
        <x:filament-fullcalendar::edit-event-modal />
    @endif
</x-filament::widget>
