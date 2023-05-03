<x-filament::form wire:submit.prevent="onCreateEventSubmit">
    <x-filament::modal id="fullcalendar--create-event-modal" :width="$this->getModalWidth()" :slide-over="$this->getModalSlideover()">
        <x-slot name="header">
            <x-filament::modal.heading>
                {{ $this->getCreateEventModalTitle() }}
            </x-filament::modal.heading>
        </x-slot>

        @if($this->isListeningCancelledCreateModal())
            <div x-on:close-modal.window="if ($event.detail.id === 'fullcalendar--create-event-modal') Livewire.emit('cancelledFullcalendarCreateEventModal')"></div>
        @endif

        {{ $this->createEventForm }}

        <x-slot name="footer">
            <x-filament::button type="submit" form="onCreateEventSubmit">
                {{ $this->getCreateEventModalSubmitButtonLabel() }}
            </x-filament::button>

            @if($this->isListeningCancelledCreateModal())
                <x-filament::button color="secondary" x-on:click="isOpen = false; Livewire.emit('cancelledFullcalendarCreateEventModal')">
                    {{ $this->getCreateEventModalCloseButtonLabel() }}
                </x-filament::button>
            @else
                <x-filament::button color="secondary" x-on:click="isOpen = false">
                    {{ $this->getCreateEventModalCloseButtonLabel() }}
                </x-filament::button>
            @endif
        </x-slot>
    </x-filament::modal>
</x-filament::form>
