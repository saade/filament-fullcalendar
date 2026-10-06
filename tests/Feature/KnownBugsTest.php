<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\PrefilledCalendarWidget;

const HOLIDAY = ['title' => 'Holiday', 'start' => '2026-10-12', 'allDay' => true];

function createEventWithAttendee(): Event
{
    $event = Event::create(['title' => 'Meeting', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);

    $event->attendees()->create(['name' => 'Ada']);

    return $event;
}

it('does nothing when an event without a record is clicked, dragged or resized', function () {
    Livewire::test(PrefilledCalendarWidget::class)
        ->call('handleEventClick', HOLIDAY)
        ->assertSet('mountedActions', [])
        ->call('handleEventDrop', HOLIDAY, HOLIDAY, [], ['days' => 1], null, null)
        ->assertReturned(true)
        ->assertSet('mountedActions', [])
        ->call('handleEventResize', HOLIDAY, HOLIDAY, [], ['days' => 0], ['days' => 1])
        ->assertReturned(true)
        ->assertSet('mountedActions', []);
});

it('forgets the last clicked record when an event without one is clicked', function () {
    $event = createEventWithAttendee();

    Livewire::test(PrefilledCalendarWidget::class)
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->assertActionMounted('view')
        ->unmountAction()
        ->call('handleEventClick', HOLIDAY)
        ->assertSet('eventRecord', null)
        ->assertSet('mountedActions', []);
});

it('fills the create form with the selected dates and keeps the defaults of other fields', function () {
    Livewire::test(PrefilledCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06T09:00:00-03:00', '2026-10-06T10:30:00-03:00', false, null, ['id' => '7'])
        ->assertActionMounted('create')
        ->assertSchemaStateSet([
            'title' => 'Untitled',
            'team_id' => '7',
            'starts_at' => '2026-10-06 12:00:00',
            'ends_at' => '2026-10-06 13:30:00',
        ], 'mountedActionSchema0');
});

it('fills whole days from an all-day selection without shifting them', function () {
    Livewire::test(PrefilledCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-09', true, null, null)
        ->assertSchemaStateSet([
            'starts_at' => '2026-10-06 00:00:00',
            'ends_at' => '2026-10-08 23:59:59',
        ], 'mountedActionSchema0');
});

it('keeps defaults and the selected dates when the create action fills the form itself', function () {
    Livewire::test(PrefilledCalendarWidget::class, ['usesMountUsing' => true])
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->assertSchemaStateSet([
            'title' => 'From select',
            'starts_at' => '2026-10-06 00:00:00',
        ], 'mountedActionSchema0');
});

it('creates related records from a relationship field', function () {
    Livewire::test(PrefilledCalendarWidget::class)
        ->call('handleDateSelect', '2026-10-06', '2026-10-07', true, null, null)
        ->fillForm(['title' => 'Kickoff', 'attendees' => [['name' => 'Ada'], ['name' => 'Grace']]])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form');

    expect(Event::query()->where('title', 'Kickoff')->sole()->attendees()->pluck('name')->all())
        ->toBe(['Ada', 'Grace']);
});

it('loads and saves related records when editing', function () {
    $event = createEventWithAttendee();

    $component = Livewire::test(PrefilledCalendarWidget::class)
        ->call('handleEventClick', ['id' => $event->getKey()])
        ->unmountAction()
        ->mountAction('edit');

    $attendees = $component->instance()->mountedActions[0]['data']['attendees'];

    expect(array_column($attendees, 'name'))->toBe(['Ada']);

    $component
        ->fillForm(['attendees' => [...$attendees, ['name' => 'Grace']]])
        ->callMountedAction()
        ->assertHasNoFormErrors([], 'form');

    expect($event->attendees()->pluck('name')->all())->toBe(['Ada', 'Grace']);
});
