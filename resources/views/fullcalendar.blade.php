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
                    const events = @json($events);

                    const eventClick = function ({ event, jsEvent }) {
                        if( event.url ) {
                            jsEvent.preventDefault();
                            window.open(event.url, "_blank");
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

                    const calendar = new FullCalendar.Calendar($el, {
                        ...config,
                        events,
                        eventClick,
                        eventDrop
                    });

                    calendar.render();
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
