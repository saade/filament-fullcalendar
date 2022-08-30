<x-filament::form wire:submit.prevent="onEditEventSubmit">
    <x-filament::modal id="fullcalendar--edit-event-modal" :width="$this->getModalWidth()">
        <x-slot name="header">
            <x-filament::modal.heading>
                {{
                    $this->editEventForm->isDisabled()
                        ? __('filament::resources/pages/view-record.title', ['label' => $this->getModalLabel()])
                        : __('filament::resources/pages/edit-record.title', ['label' => $this->getModalLabel()])
                }}
            </x-filament::modal.heading>
        </x-slot>

        @if($this->isListeningCancelledEditModal())
            <div x-on:close-modal.window="if ($event.detail.id === 'fullcalendar--create-event-modal') Livewire.emit('cancelledFullcalendarEditEventModal')"></div>
        @endif

        {{ $this->editEventForm }}

        <x-slot name="footer">
            @if(!$this->editEventForm->isDisabled())
                <x-filament::button type="submit" form="onEditEventSubmit">
                    {{ __('filament::resources/pages/edit-record.form.actions.save.label') }}
                </x-filament::button>
            @endif

            @if($this->isListeningCancelledEditModal())
                <x-filament::button color="secondary"
                                    x-on:click="isOpen = false; Livewire.emit('cancelledFullcalendarEditEventModal')">
                    {{
                        $this->editEventForm->isDisabled()
                        ?  __('filament-support::actions/view.single.modal.actions.close.label')
                        : __('filament::resources/pages/edit-record.form.actions.cancel.label')
                     }}
                </x-filament::button>
            @else
                <x-filament::button color="secondary" x-on:click="isOpen = false">
                    {{
                        $this->editEventForm->isDisabled()
                        ?  __('filament-support::actions/view.single.modal.actions.close.label')
                        : __('filament::resources/pages/edit-record.form.actions.cancel.label')
                     }}
                </x-filament::button>
                @endif
        </x-slot>
    </x-filament::modal>
</x-filament::form>
