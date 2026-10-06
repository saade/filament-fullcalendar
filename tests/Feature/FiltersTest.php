<?php

use Filament\Forms\Components\Select;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\FilteredArrayCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\FilteredCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Meeting;
use Saade\FilamentFullCalendar\Tests\Fixtures\Team;

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
