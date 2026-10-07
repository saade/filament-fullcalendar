@php
    use Illuminate\Support\Js;
    use Illuminate\View\ComponentAttributeBag;

    $label = $tool->getLabel();
    $labelJsExpression = $tool->getLabelJsExpression();
    $activeJsExpression = $tool->getActiveJsExpression();
    $badgeJsExpression = $tool->getBadgeJsExpression();
    $isLabelHidden = $tool->isLabelHidden();
    $tooltip = $tool->getTooltipJsExpression() ?? ($isLabelHidden ? ($labelJsExpression ?? Js::from($label)) : null);
@endphp

@if ($tool->isHeading())
    <h2
        class="fi-fc-toolbar-heading"
        @if ($labelJsExpression) x-text="{{ $labelJsExpression }}" @endif
    >{{ $labelJsExpression ? '' : $label }}</h2>
@else
    <x-filament::button
        :color="$tool->getColor()"
        :icon="$tool->getIcon()"
        :label-sr-only="$isLabelHidden"
        :attributes="
            new ComponentAttributeBag(array_filter([
                'class' => 'fi-fc-tool',
                'data-tool' => $tool->getName(),
                'x-on:click' => $tool->getJsHandler(),
                'x-bind:class' => $activeJsExpression ? ('{ \'fi-active\': ' . $activeJsExpression . ' }') : null,
                'x-bind:aria-pressed' => ($tool->isToggle() && $activeJsExpression) ? ('(' . $activeJsExpression . ') ? \'true\' : \'false\'') : null,
                'x-bind:disabled' => $tool->getDisabledJsExpression(),
                'x-bind:aria-label' => ($isLabelHidden && $labelJsExpression) ? $labelJsExpression : null,
                'x-tooltip' => $tooltip ? ('{ content: ' . $tooltip . ', theme: $store.theme }') : null,
            ]))
        "
    >
        <span @if ($labelJsExpression) x-text="{{ $labelJsExpression }}" @endif>{{ $label }}</span>

        @if ($badgeJsExpression)
            <span
                class="fi-fc-tool-badge"
                x-show="{{ $badgeJsExpression }}"
                x-text="{{ $badgeJsExpression }}"
                x-cloak
            ></span>
        @endif
    </x-filament::button>
@endif
