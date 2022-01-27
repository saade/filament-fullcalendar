<x-filament::widget>
    <x-filament::card>
        <div x-data="" x-init='document.addEventListener("DOMContentLoaded", () => {
            const calendar = new FullCalendar.Calendar($el, Object.assign(
                @json($this->getConfig()),
                {
                    events: @json($events),
                    eventClick: ({ event }) => @js($this->isListeningClickEvent()) && window.livewire.find("{{ $this->id }}").onEventClick(event),
                    eventDrop:  ({ event, oldEvent, relatedEvents }) => @js($this->isListeningDropEvent()) && window.livewire.find("{{ $this->id }}").onEventDrop(event, oldEvent, relatedEvents),
                }
            ));

            calendar.render();
        })'>
        </div>
    </x-filament::card>
</x-filament::widget>
