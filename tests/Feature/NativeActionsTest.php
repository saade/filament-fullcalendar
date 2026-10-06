<?php

use Filament\Forms\Components\TextInput;
use Filament\Infolists\Components\TextEntry;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\InfolistCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\NativeActionsCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\NativeViewActionCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\PackageActionsCalendarWidget;

dataset('action classes', [
    'the default actions' => InfolistCalendarWidget::class,
    'unconfigured Filament actions' => NativeActionsCalendarWidget::class,
    'the deprecated package actions' => PackageActionsCalendarWidget::class,
]);

beforeEach(function () {
    $this->event = Event::create([
        'title' => 'Meeting',
        'starts_at' => '2026-10-06 09:00:00',
        'ends_at' => '2026-10-06 10:00:00',
    ]);

    $this->drop = [
        ['id' => $this->event->getKey(), 'start' => '2026-10-07T09:00:00Z', 'end' => '2026-10-07T10:00:00Z'],
        ['id' => $this->event->getKey(), 'start' => '2026-10-06T09:00:00Z', 'end' => '2026-10-06T10:00:00Z'],
        [],
        ['days' => 1],
        null,
        null,
    ];
});

it('creates an event and refreshes the calendar', function (string $widget) {
    Livewire::test($widget)
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertActionMounted('create')
        ->fillForm([
            'title' => 'Planning',
            'starts_at' => '2026-10-06 09:00:00',
            'ends_at' => '2026-10-06 10:00:00',
        ])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form')
        ->assertDispatched('filament-fullcalendar--refresh');

    expect(Event::where('title', 'Planning')->exists())->toBeTrue();
})->with('action classes');

it('creates an empty event even after another event was clicked', function (string $widget) {
    Livewire::test($widget)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->call('unmountAction')
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertActionMounted('create')
        ->assertSchemaStateSet(['title' => null], 'mountedActionSchema0');
})->with('action classes');

it('views the clicked event', function (string $widget) {
    Livewire::test($widget)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->assertActionMounted('view')
        ->assertSchemaComponentExists('title', 'mountedActionSchema0', fn ($component): bool => $component instanceof TextEntry && $component->getState() === 'Meeting')
        ->assertNotDispatched('filament-fullcalendar--refresh');
})->with([
    'the default actions' => InfolistCalendarWidget::class,
    'the deprecated package actions' => PackageActionsCalendarWidget::class,
    'an unconfigured Filament view action' => NativeViewActionCalendarWidget::class,
]);

it('edits the dropped event and refreshes the calendar', function (string $widget) {
    Livewire::test($widget)
        ->call('handleEventDrop', ...$this->drop)
        ->assertActionMounted('edit')
        ->assertSchemaComponentExists('title', 'mountedActionSchema0', fn ($component): bool => $component instanceof TextInput)
        ->fillForm(['title' => 'Renamed'])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form')
        ->assertDispatched('filament-fullcalendar--refresh');

    expect($this->event->refresh()->title)->toBe('Renamed');
})->with('action classes');

it('deletes the clicked event, clears it and refreshes the calendar', function (string $widget) {
    Livewire::test($widget)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->callAction('delete')
        ->assertSet('eventRecord', null)
        ->assertDispatched('filament-fullcalendar--refresh');

    expect(Event::find($this->event->getKey()))->toBeNull();
})->with('action classes');

it('edits from the view modal and closes it', function (string $widget) {
    Livewire::test($widget)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->callAction('edit', ['title' => 'Renamed'])
        ->assertSet('mountedActions', []);

    expect($this->event->refresh()->title)->toBe('Renamed');
})->with([
    'the default actions' => InfolistCalendarWidget::class,
    'the deprecated package actions' => PackageActionsCalendarWidget::class,
]);

it('deletes from the view modal and closes it', function (string $widget) {
    Livewire::test($widget)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->callAction('delete')
        ->assertSet('mountedActions', []);

    expect(Event::find($this->event->getKey()))->toBeNull();
})->with([
    'the default actions' => InfolistCalendarWidget::class,
    'the deprecated package actions' => PackageActionsCalendarWidget::class,
]);

it('refreshes the calendar after a custom action', function () {
    Livewire::test(NativeActionsCalendarWidget::class)
        ->callAction('archive')
        ->assertDispatched('filament-fullcalendar--refresh');
});

it('passes the clicked event to a custom action as its record', function () {
    Livewire::test(NativeActionsCalendarWidget::class)
        ->call('handleEventClick', ['id' => $this->event->getKey()])
        ->call('unmountAction')
        ->callAction('archive');

    expect($this->event->refresh()->title)->toBe('Archived');
});

it('uses the model label for Filament actions', function () {
    Livewire::test(NativeActionsCalendarWidget::class)
        ->assertActionHasLabel('create', 'New event');
});
