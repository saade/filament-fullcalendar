<x-filament::form wire:submit.prevent="onCreateEventSubmit">
    <x-filament::modal id="fullcalendar--create-event-modal" :width="$this->getModalWidth()">
        <x-slot name="header">
            <x-filament::modal.heading>
                {{ __('filament::resources/pages/create-record.title', ['label' => $this->getModalLabel()]) }}
            </x-filament::modal.heading>
        </x-slot>

        @if($this->isListeningCancelledCreateModal())
            <div x-on:close-modal.window="if ($event.detail.id === 'fullcalendar--create-event-modal') Livewire.emit('cancelledFullcalendarCreateEventModal')"></div>
        @endif

        {{ $this->createEventForm }}

        <x-slot name="footer">
            <x-filament::button type="submit" form="onCreateEventSubmit">
                {{ __('filament::resources/pages/create-record.form.actions.create.label') }}
            </x-filament::button>

            @if($this->isListeningCancelledCreateModal())
                <x-filament::button color="secondary" x-on:click="isOpen = false; Livewire.emit('cancelledFullcalendarCreateEventModal')">
                    {{ __('filament::resources/pages/create-record.form.actions.cancel.label') }}
                </x-filament::button>
            @else
                <x-filament::button color="secondary" x-on:click="isOpen = false">
                    {{ __('filament::resources/pages/create-record.form.actions.cancel.label') }}
                </x-filament::button>
            @endif
        </x-slot>
    </x-filament::modal>
</x-filament::form>
