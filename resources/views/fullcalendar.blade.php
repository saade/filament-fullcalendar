<x-filament::widget>
    <x-filament::card>
        <div wire:ignore x-data="" x-init='document.addEventListener("DOMContentLoaded", () => {
            const calendar = new FullCalendar.Calendar($el, Object.assign(
                @json($this->getConfig()),
                {
                    events: @json($events),
                    eventClick: ({ event, jsEvent }) => {
                        if(event.url) {
                            jsEvent.preventDefault();
                            window.open(event.url, "_blank");
                            return false;
                        }
                        @js($this->isListeningClickEvent()) && window.livewire.find("{{ $this->id }}").onEventClick(event)
                    },
                    eventDrop:  ({ event, oldEvent, relatedEvents }) => @js($this->isListeningDropEvent()) && window.livewire.find("{{ $this->id }}").onEventDrop(event, oldEvent, relatedEvents),
                }
            ));

            calendar.render();
        })'>
        </div>
    </x-filament::card>
</x-filament::widget>
