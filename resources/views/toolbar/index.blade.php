@php
    use Saade\FilamentFullCalendar\Toolbar\ToolbarButtonGroup;
@endphp

<div @class(['fi-fc-toolbar', 'fi-fc-footer-toolbar' => $isFooter ?? false])>
    @foreach ($toolbar as $section => $groups)
        <div class="fi-fc-toolbar-section fi-fc-toolbar-{{ $section }}">
            @foreach ($groups as $group)
                @if (count($group) > 1)
                    <x-filament::button.group>
                        @foreach ($group as $tool)
                            @include('filament-fullcalendar::toolbar.' . ($tool instanceof ToolbarButtonGroup ? 'group' : 'tool'), ['tool' => $tool])
                        @endforeach
                    </x-filament::button.group>
                @else
                    @include('filament-fullcalendar::toolbar.' . ($group[0] instanceof ToolbarButtonGroup ? 'group' : 'tool'), ['tool' => $group[0]])
                @endif
            @endforeach
        </div>
    @endforeach
</div>
