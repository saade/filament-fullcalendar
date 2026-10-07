<x-filament::dropdown placement="bottom-start" class="fi-fc-tool-group">
    <x-slot name="trigger">
        <x-filament::button
            color="gray"
            :icon="$tool->getIcon() ?? \Filament\Support\Icons\Heroicon::ChevronDown"
            :icon-position="$tool->getIcon() ? null : \Filament\Support\Enums\IconPosition::After"
            class="fi-fc-tool"
        >
            {{ $tool->getLabel() }}
        </x-filament::button>
    </x-slot>

    <x-filament::dropdown.list>
        @foreach ($tool->getResolvedButtons() as $button)
            <x-filament::dropdown.list.item
                :icon="$button->getIcon()"
                :x-on:click="$button->getJsHandler() . '; close()'"
            >
                <span @if ($button->getLabelJsExpression()) x-text="{{ $button->getLabelJsExpression() }}" @endif>{{ $button->getLabel() }}</span>
            </x-filament::dropdown.list.item>
        @endforeach
    </x-filament::dropdown.list>
</x-filament::dropdown>
