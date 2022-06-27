<x-filament::modal id="fullcalendar--create-event-modal">
    <x-slot name="heading">
        {{ __('filament::resources/pages/create-record.title', ['label' => 'Event']) }}
    </x-slot>

    <x-filament::form wire:submit.prevent="onCreateEventSubmit">
        {{ $this->createEventForm }}

        <x-filament::button type="submit" form="onCreateEventSubmit">
            {{ __('filament::resources/pages/create-record.form.actions.create.label') }}
        </x-filament::button>

        <x-filament::button color="secondary" x-on:click="isOpen = false">
            {{ __('filament::resources/pages/create-record.form.actions.cancel.label') }}
        </x-filament::button>
    </x-filament::form>
</x-filament::modal>
