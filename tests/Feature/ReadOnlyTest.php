<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\LockedCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\PrefilledCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\ReadOnlyCalendarWidget;

function lockedEvent(): Event
{
    return Event::create(['title' => 'Meeting', 'starts_at' => '2026-10-06 09:00:00', 'ends_at' => '2026-10-06 10:00:00']);
}

it('is not read-only unless asked', function () {
    expect(Livewire::test(EventCalendarWidget::class)->instance()->isReadOnly())->toBeFalse();
});

it('turns off editing, selecting and dropping whatever the config says', function () {
    $widget = Livewire::test(LockedCalendarWidget::class)->instance();

    expect($widget->isReadOnly())->toBeTrue()
        ->and($widget->isEditable())->toBeFalse()
        ->and($widget->isSelectable())->toBeFalse()
        ->and($widget->isDroppable())->toBeFalse();

    Livewire::test(LockedCalendarWidget::class)
        ->assertSeeHtml('editable: false')
        ->assertSeeHtml('selectable: false')
        ->assertSeeHtml('droppable: false');
});

it('still shows and opens events', function () {
    $event = lockedEvent();

    Livewire::test(LockedCalendarWidget::class)
        ->clickCalendarEvent($event)
        ->assertActionMounted('view');
});

it('hides and refuses the actions that change records', function () {
    $event = lockedEvent();

    Livewire::test(LockedCalendarWidget::class)
        ->assertActionHidden('create')
        ->mountAction('create')
        ->assertSet('mountedActions', [])
        ->clickCalendarEvent($event)
        ->assertActionMounted('view')
        ->mountAction('edit')
        ->assertActionNotMounted('edit')
        ->mountAction('delete')
        ->assertActionNotMounted('delete');

    expect(Event::query()->count())->toBe(1);
});

it('refuses a move, a resize, a selection and a drop sent by hand', function () {
    $event = lockedEvent();

    Livewire::test(LockedCalendarWidget::class)
        ->dropCalendarEvent($event, '2026-10-07T09:00:00Z', '2026-10-07T10:00:00Z')
        ->assertReturned(true)
        ->resizeCalendarEvent($event, '2026-10-06T09:00:00Z', '2026-10-06T12:00:00Z')
        ->assertReturned(true)
        ->selectCalendarDates('2026-10-06')
        ->clickCalendarDate('2026-10-06')
        ->assertSet('mountedActions', [])
        ->call('handleExternalDrop', ['data' => []], '2026-10-06', true, null)
        ->assertForbidden();

    expect($event->refresh()->starts_at->toDateTimeString())->toBe('2026-10-06 09:00:00');
});

it('refuses a move and a selection on a calendar that is not editable or selectable', function () {
    $event = lockedEvent();

    Livewire::test(ReadOnlyCalendarWidget::class)
        ->dropCalendarEvent($event, '2026-10-07T09:00:00Z', '2026-10-07T10:00:00Z')
        ->assertReturned(true)
        ->selectCalendarDates('2026-10-06')
        ->assertSet('mountedActions', []);
});

it('reads droppable from the config of the panel too', function () {
    expect(Livewire::test(PrefilledCalendarWidget::class)->instance()->isDroppable())->toBeFalse();

    filament('filament-fullcalendar')->config(['droppable' => true]);

    expect(Livewire::test(PrefilledCalendarWidget::class)->instance()->isDroppable())->toBeTrue();

    filament('filament-fullcalendar')->config([]);
});
