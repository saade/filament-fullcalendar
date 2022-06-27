<x-filament::modal id="fullcalendar--edit-event-modal">
    <x-slot name="heading">
        {{ __('filament::resources/pages/edit-record.title', ['label' => 'Event']) }}
    </x-slot>

    <x-filament::form wire:submit.prevent="onEditEventSubmit">
        {{ $this->editEventForm }}

        <x-filament::button type="submit" form="onEditEventSubmit">
            {{ __('filament::resources/pages/edit-record.form.actions.save.label') }}
        </x-filament::button>

        <x-filament::button color="secondary" x-on:click="isOpen = false">
            {{ __('filament::resources/pages/edit-record.form.actions.cancel.label') }}
        </x-filament::button>
    </x-filament::form>
</x-filament::modal>
