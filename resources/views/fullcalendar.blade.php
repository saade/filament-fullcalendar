@php($locale = strtolower(str_replace('_', '-', $this->getConfig()['locale'])))

<x-filament::widget>
    <x-filament::card>
        @if( $this::canCreate() )
            <div class="flex items-center justify-end">
                <x-filament::button wire:click="onCreateEventClick">
                    {{ __('filament::resources/pages/create-record.form.actions.create.label') }}
                </x-filament::button>
            </div>

            <x-filament::hr />
        @endif

        <div
            wire:ignore
            x-data=""
            x-init='
                document.addEventListener("DOMContentLoaded", function() {
                    const config = @json($this->getConfig());
                    const eventsData = @json($events);
                    const locale = "{{ $locale }}";
                    @if($this->isLazyLoad())
                        const cachedEventIds = [];
                    @endif

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

                    var initial = true;

                    const calendar = new FullCalendar.Calendar($el, {
                        ...config,
                        locale,
                        eventClick,
                        eventDrop,
                        @if($this->isLazyLoad())
                            events: function(fetchInfo, successCallback, failureCallback) {
                                if(initial){
                                    initial = false

                                    if(eventsData[0]?.id){
                                        eventsData.forEach((event) => cachedEventIds.push(event.id))
                                    }

                                    successCallback(eventsData)
                                }else{
                                    $wire.lazyLoadViewData(fetchInfo)
                                        .then(result => {
                                            if(result.length == 0) return

                                            if(result[0].id){
                                                result.forEach((event) => cachedEventIds.indexOf(event.id) != -1 ? null : cachedEventIds.push(event.id) && eventsData.push(event))
                                                successCallback(eventsData)
                                            }else{
                                                successCallback(result)
                                            }
                                        })
                                }
                            },
                        @else
                            events: eventsData,
                        @endif
                    });

                    calendar.render();

                    window.addEventListener("filament-fullcalendar:refresh", (event) => {
                        calendar.removeAllEvents();
                        @unless($this->isLazyLoad())
                            event.detail.data.map(event => calendar.addEvent(event));
                        @else
                            cachedEventIds.splice(0, cachedEventIds.length)
                            calendar.refetchEvents()
                            eventsData.splice(0, eventsData.length)
                        @endunless
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
