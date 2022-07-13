<x-filament::form wire:submit.prevent="onEditEventSubmit">
    <x-filament::modal id="fullcalendar--edit-event-modal" :width="$this->getModalWidth()">
        <x-slot name="header">
            <x-filament::modal.heading>
                {{ __('filament::resources/pages/edit-record.title', ['label' => $this->getModalLabel()]) }}
            </x-filament::modal.heading>
        </x-slot>

        {{ $this->editEventForm }}

        <x-slot name="footer">
            <x-filament::button type="submit" form="onEditEventSubmit">
                {{ __('filament::resources/pages/edit-record.form.actions.save.label') }}
            </x-filament::button>

            <x-filament::button color="secondary" x-on:click="isOpen = false">
                {{ __('filament::resources/pages/edit-record.form.actions.cancel.label') }}
            </x-filament::button>
        </x-slot>
    </x-filament::modal>
</x-filament::form>
