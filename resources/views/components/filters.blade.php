@props([
    'applyAction',
    'form',
    'resetAction',
    'resetActionPosition',
])

@php
    use Filament\Tables\Enums\FiltersResetActionPosition;

    $hasFooterResetAction = ($resetActionPosition === FiltersResetActionPosition::Footer) && $resetAction->isVisible();
@endphp

<div {{ $attributes->class(['fi-fc-filters']) }}>
    <div class="fi-fc-filters-header">
        <h3 class="fi-fc-filters-heading">
            {{ __('filament-tables::table.filters.heading') }}
        </h3>

        @if (($resetActionPosition === FiltersResetActionPosition::Header) && $resetAction->isVisible())
            <div>
                {{ $resetAction->defaultView($resetAction::LINK_VIEW) }}
            </div>
        @endif
    </div>

    {{ $form }}

    @if ($applyAction->isVisible() || $hasFooterResetAction)
        <div class="fi-fc-filters-actions">
            @if ($applyAction->isVisible())
                {{ $applyAction }}
            @endif

            @if ($hasFooterResetAction)
                {{ $resetAction }}
            @endif
        </div>
    @endif
</div>
