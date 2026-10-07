<?php

use Filament\Forms\Components\Select;
use Filament\Tables\Enums\FiltersLayout;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\FilteredArrayCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\FilteredCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\LaidOutFiltersCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Meeting;
use Saade\FilamentFullCalendar\Tests\Fixtures\Team;

afterEach(function () {
    LaidOutFiltersCalendarWidget::$layout = FiltersLayout::Dropdown;
    LaidOutFiltersCalendarWidget::$deferred = true;
    LaidOutFiltersCalendarWidget::$hasFooterReset = false;
});

const FILTER_RANGE = ['start' => '2026-10-01T00:00:00Z', 'end' => '2026-11-01T00:00:00Z', 'timezone' => 'UTC'];

function createFilterableMeeting(string $title, string $startsAt = '2026-10-06 09:00:00', ?Team $team = null): Meeting
{
    return Meeting::create(['team_id' => $team?->getKey(), 'title' => $title, 'starts_at' => $startsAt, 'ends_at' => $startsAt]);
}

function fetchedTitles($component): array
{
    return array_column($component->instance()->handleFetchEvents(FILTER_RANGE), 'title');
}

it('shows neither filters nor tabs unless they are defined', function () {
    $component = Livewire::test(EventCalendarWidget::class);

    expect($component->instance()->hasFiltersSchema())->toBeFalse()
        ->and($component->instance()->getCachedTabs())->toBe([])
        ->and($component->instance()->activeTab)->toBeNull();
});

it('renders the filter form and fills it with its defaults', function () {
    Livewire::test(FilteredCalendarWidget::class)
        ->assertSchemaComponentExists('team_id', 'filtersSchema', fn ($component): bool => $component instanceof Select)
        ->assertSet('filters.search', 'Stand');
});

it('makes the filters available to fetchEvents()', function () {
    $team = Team::create(['name' => 'Ours']);

    createFilterableMeeting('Standup', team: $team);
    createFilterableMeeting('Standup elsewhere');
    createFilterableMeeting('Retro', team: $team);

    $component = Livewire::test(FilteredCalendarWidget::class);

    expect(fetchedTitles($component))->toBe(['Standup', 'Standup elsewhere']);

    $component->set('filters.team_id', $team->getKey());

    expect(fetchedTitles($component))->toBe(['Standup']);
});

it('fetches the events again when a filter changes', function () {
    $component = Livewire::test(FilteredCalendarWidget::class);

    $component
        ->set('filters.search', 'Retro')
        ->assertDispatched('filament-fullcalendar--refresh', calendar: $component->instance()->getId());
});

it('remembers the filters and the tab in the session', function () {
    Livewire::test(FilteredCalendarWidget::class)
        ->set('filters.search', 'Retro')
        ->set('activeTab', 'later');

    Livewire::test(FilteredCalendarWidget::class)
        ->assertSet('filters.search', 'Retro')
        ->assertSet('activeTab', 'later');
});

it('forgets them when told not to use the session', function () {
    Livewire::test(FilteredArrayCalendarWidget::class)
        ->set('filters.search', 'Retro')
        ->set('activeTab', 'later');

    Livewire::test(FilteredArrayCalendarWidget::class)
        ->assertSet('filters.search', 'Stand')
        ->assertSet('activeTab', 'all');
});

it('renders the tabs with the first one active', function () {
    Livewire::test(FilteredCalendarWidget::class)
        ->assertSet('activeTab', 'all')
        ->assertSee(['All', 'This week', 'Coming up']);
});

it('falls back to the first tab when the remembered one is gone', function () {
    Livewire::test(FilteredCalendarWidget::class, ['activeTab' => 'removed'])
        ->assertSet('activeTab', 'all');
});

it('applies the active tab to a query returned from fetchEvents()', function () {
    createFilterableMeeting('Standup now');
    createFilterableMeeting('Standup later', '2026-10-20 09:00:00');

    $component = Livewire::test(FilteredCalendarWidget::class);

    expect(fetchedTitles($component))->toBe(['Standup now', 'Standup later']);

    $component->set('activeTab', 'this_week');

    expect(fetchedTitles($component))->toBe(['Standup now']);

    $component
        ->set('activeTab', 'later')
        ->assertDispatched('filament-fullcalendar--refresh', calendar: $component->instance()->getId());

    expect(fetchedTitles($component))->toBe(['Standup later']);
});

it('lets fetchEvents() apply the active tab itself', function () {
    createFilterableMeeting('Standup now');
    createFilterableMeeting('Standup later', '2026-10-20 09:00:00');

    $component = Livewire::test(FilteredArrayCalendarWidget::class, ['activeTab' => 'later']);

    expect(fetchedTitles($component))->toBe(['Standup later']);
});

it('keeps the filters in a dropdown behind a trigger by default', function () {
    Livewire::test(FilteredCalendarWidget::class)
        ->assertSeeHtml(['fi-fc-filters-dropdown', 'fi-fc-filters-heading'])
        ->assertDontSeeHtml(['fi-fc-filters-above-content', 'fi-fc-filters-below-content', 'fi-fc-filters-modal']);
});

it('lays the filters out where it is told to', function (FiltersLayout $layout, array $visible, array $hidden) {
    LaidOutFiltersCalendarWidget::$layout = $layout;

    Livewire::test(LaidOutFiltersCalendarWidget::class)
        ->assertSeeHtml($visible)
        ->assertDontSeeHtml($hidden);
})->with([
    [FiltersLayout::Modal, ['fi-fc-filters-modal'], ['fi-fc-filters-dropdown', 'fi-fc-filters-above-content']],
    [FiltersLayout::AboveContent, ['fi-fc-filters-above-content'], ['fi-fc-filters-dropdown', 'areFiltersOpen']],
    [FiltersLayout::AboveContentCollapsible, ['fi-fc-filters-above-content', 'areFiltersOpen'], ['fi-fc-filters-dropdown']],
    [FiltersLayout::BelowContent, ['fi-fc-filters-below-content'], ['fi-fc-filters-dropdown', 'fi-fc-filters-above-content']],
    [FiltersLayout::Hidden, [], ['fi-fc-filters']],
]);

it('uses one column in a dropdown and several above or below the calendar', function () {
    expect(Livewire::test(LaidOutFiltersCalendarWidget::class)->instance()->getFiltersFormColumns())->toBe(1);

    LaidOutFiltersCalendarWidget::$layout = FiltersLayout::AboveContent;

    expect(Livewire::test(LaidOutFiltersCalendarWidget::class)->instance()->getFiltersFormColumns())->toBeArray();
});

it('waits for the filters to be applied', function () {
    createFilterableMeeting('Standup');
    createFilterableMeeting('Retro');

    $component = Livewire::test(FilteredCalendarWidget::class)
        ->assertSee('Apply filters')
        ->set('deferredFilters.search', 'Retro')
        ->assertNotDispatched('filament-fullcalendar--refresh');

    expect(fetchedTitles($component))->toBe(['Standup']);

    $component
        ->call('applyFilters')
        ->assertSet('filters.search', 'Retro')
        ->assertDispatched('filament-fullcalendar--refresh', calendar: $component->instance()->getId());

    expect(fetchedTitles($component))->toBe(['Retro']);
});

it('filters as the fields change when the filters are not deferred', function () {
    createFilterableMeeting('Standup');
    createFilterableMeeting('Retro');

    LaidOutFiltersCalendarWidget::$deferred = false;

    $component = Livewire::test(LaidOutFiltersCalendarWidget::class)
        ->assertDontSee('Apply filters')
        ->set('filters.search', 'Retro')
        ->assertDispatched('filament-fullcalendar--refresh');

    expect($component->instance()->getFiltersSchema()->getStatePath())->toBe('filters');

    expect(fetchedTitles($component))->toBe(['Retro']);
});

it('resets the filters to their defaults', function () {
    Livewire::test(FilteredCalendarWidget::class)
        ->set('deferredFilters.search', 'Retro')
        ->call('applyFilters')
        ->call('resetFilters')
        ->assertSet('filters.search', 'Stand')
        ->assertSet('deferredFilters.search', 'Stand');
});

it('counts the filters that are set', function () {
    $team = Team::create(['name' => 'Ours']);

    $component = Livewire::test(FilteredCalendarWidget::class);

    expect($component->instance()->getActiveFiltersCount())->toBe(1);

    $component->set('deferredFilters.team_id', $team->getKey())->call('applyFilters');

    expect($component->instance()->getActiveFiltersCount())->toBe(2);
});

it('gives the calendar a toolbar button for the layouts that are opened', function (FiltersLayout $layout, bool $hasButton) {
    LaidOutFiltersCalendarWidget::$layout = $layout;

    $button = Livewire::test(LaidOutFiltersCalendarWidget::class)->instance()->getFiltersToolbarButton();

    expect($button)->toBe($hasButton ? ['hint' => 'Narrow down', 'count' => 1] : null);
})->with([
    [FiltersLayout::Dropdown, true],
    [FiltersLayout::Modal, true],
    [FiltersLayout::AboveContentCollapsible, true],
    [FiltersLayout::AboveContent, false],
    [FiltersLayout::BelowContent, false],
    [FiltersLayout::Hidden, false],
]);

it('has no toolbar button without filters', function () {
    expect(Livewire::test(EventCalendarWidget::class)->instance()->getFiltersToolbarButton())->toBeNull();
});

it('tells the calendar how many filters are set when they change', function () {
    $component = Livewire::test(FilteredCalendarWidget::class);

    $component
        ->set('deferredFilters.search', null)
        ->call('applyFilters')
        ->assertDispatched('filament-fullcalendar--filters', count: 0, calendar: $component->instance()->getId());
});

it('lets the reset action be moved to the footer', function () {
    LaidOutFiltersCalendarWidget::$hasFooterReset = true;

    Livewire::test(LaidOutFiltersCalendarWidget::class)
        ->assertSeeHtml('fi-fc-filters-actions')
        ->assertSee('Reset');
});
