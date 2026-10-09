<?php

use Livewire\Livewire;
use Saade\FilamentFullCalendar\Contracts\Eventable;
use Saade\FilamentFullCalendar\Contracts\Eventables;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Tests\Fixtures\DroppableRentalCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\Rental;
use Saade\FilamentFullCalendar\Tests\Fixtures\RentalCalendarWidget;

const RENTAL_RANGE = ['start' => '2026-10-01T00:00:00Z', 'end' => '2026-11-01T00:00:00Z', 'timezone' => 'UTC'];

function createRental(string $title = 'Van', string $pickup = '2026-10-06 09:00:00', string $return = '2026-10-09 17:00:00'): Rental
{
    return Rental::create(['title' => $title, 'starts_at' => $pickup, 'ends_at' => $return]);
}

function fetchRentalEvents(array $range = RENTAL_RANGE): array
{
    return json_decode(json_encode(Livewire::test(RentalCalendarWidget::class)->instance()->handleFetchEvents($range)), associative: true);
}

it('shows every event a record has', function () {
    createRental();

    expect(array_column(fetchRentalEvents(), 'title'))->toBe(['Pickup: Van', 'Return: Van']);
});

it('gives each event its own id and the same record', function () {
    $rental = createRental();

    [$pickup, $return] = fetchRentalEvents();

    expect($pickup['id'])->toBe(Rental::class . '-' . $rental->getKey() . '-0')
        ->and($return['id'])->toBe(Rental::class . '-' . $rental->getKey() . '-1')
        ->and($pickup['extendedProps']['calendarRecord'])->toBe($return['extendedProps']['calendarRecord'])
        ->and($pickup['extendedProps']['calendarRecord'])->toMatchArray(['model' => Rental::class, 'key' => $rental->getKey()])
        ->and($return['extendedProps']['kind'])->toBe('return');
});

it('keeps an id the record gave an event', function () {
    $record = new class extends Rental
    {
        public function toCalendarEvents(FetchInfo $info): array
        {
            return [['id' => 'mine', 'title' => 'Mine', 'start' => '2026-10-06']];
        }
    };

    $event = invade(Livewire::test(RentalCalendarWidget::class)->instance())
        ->getEventsFromRecord($record->forceFill(['id' => 5]), FetchInfo::fromArray(RENTAL_RANGE, 'UTC'))[0];

    expect($event['id'])->toBe('mine');
});

it('gives the record the range that is being fetched', function () {
    createRental(return: '2026-11-20 17:00:00');

    expect(array_column(fetchRentalEvents(), 'title'))->toBe(['Pickup: Van'])
        ->and(array_column(fetchRentalEvents(['start' => '2026-11-01T00:00:00Z', 'end' => '2026-12-01T00:00:00Z', 'timezone' => 'UTC']), 'title'))->toBe(['Return: Van']);
});

it('colors the events like any other', function () {
    createRental();

    expect(fetchRentalEvents()[0]['classNames'])->toContain('fi-color-success');
});

it('does not let the events be dragged or resized unless one says so', function () {
    createRental();

    expect(array_column(fetchRentalEvents(), 'editable'))->toBe([false, false]);

    $record = new class extends Rental
    {
        public function toCalendarEvents(FetchInfo $info): array
        {
            return [['title' => 'Movable', 'start' => '2026-10-06', 'editable' => true]];
        }
    };

    $event = invade(Livewire::test(RentalCalendarWidget::class)->instance())
        ->getEventsFromRecord($record->forceFill(['id' => 5]), FetchInfo::fromArray(RENTAL_RANGE, 'UTC'))[0];

    expect($event['editable'])->toBeTrue();
});

it('opens the record from any of its events', function () {
    $rental = createRental();

    [$pickup, $return] = fetchRentalEvents();

    foreach ([$pickup, $return] as $event) {
        $component = Livewire::test(RentalCalendarWidget::class)
            ->clickCalendarEvent($event)
            ->assertActionMounted('view');

        expect($component->instance()->getEventRecord()->is($rental))->toBeTrue();
    }
});

it('finds the first event of a record in the testing helpers', function () {
    $rental = createRental();

    $component = Livewire::test(RentalCalendarWidget::class)
        ->assertCalendarHasEvent($rental)
        ->clickCalendarEvent($rental)
        ->assertActionMounted('view');

    expect($component->instance()->getEventRecord()->is($rental))->toBeTrue();
});

it('moves a dragged event back without writing its dates to the record', function () {
    $rental = createRental();

    $return = fetchRentalEvents()[1];

    Livewire::test(RentalCalendarWidget::class)
        ->dropCalendarEvent($return, '2026-10-12T17:00:00Z', '2026-10-12T18:00:00Z')
        ->assertActionNotMounted();

    expect($rental->refresh()->starts_at->toDateTimeString())->toBe('2026-10-06 09:00:00')
        ->and($rental->ends_at->toDateTimeString())->toBe('2026-10-09 17:00:00');
});

it('lets each event repeat, and opens the record from any occurrence', function () {
    $rental = createRental();

    $workingHours = new class extends Rental
    {
        public function toCalendarEvents(FetchInfo $info): array
        {
            return array_map(fn (string $day): array => [
                'title' => 'Working hours',
                'rrule' => ['freq' => 'weekly', 'byweekday' => [$day], 'dtstart' => '2026-10-05T09:00:00', 'until' => '2026-12-31'],
                'duration' => '08:00',
            ], ['mo', 'tu']);
        }
    };

    $widget = Livewire::test(RentalCalendarWidget::class);

    [$monday, $tuesday] = json_decode(json_encode(
        invade($widget->instance())->getEventsFromRecord($workingHours->forceFill(['id' => $rental->getKey()]), FetchInfo::fromArray(RENTAL_RANGE, 'UTC')),
    ), associative: true);

    expect($monday['rrule']['byweekday'])->toBe(['mo'])
        ->and($tuesday['rrule']['byweekday'])->toBe(['tu'])
        ->and($monday['id'])->not->toBe($tuesday['id'])
        ->and($monday['editable'])->toBeFalse();

    $occurrence = [...$tuesday, 'start' => '2026-10-13T09:00:00Z', 'end' => '2026-10-13T17:00:00Z', 'isRecurring' => true];
    $occurrence['extendedProps']['calendarRecord'] = fetchRentalEvents()[0]['extendedProps']['calendarRecord'];

    $widget->clickCalendarEvent($occurrence)->assertActionMounted('view');

    expect($widget->instance()->getEventRecord()->is($rental))->toBeTrue();
});

it('cannot be offered as an item to drop on the calendar', function () {
    RentalCalendarWidget::getDraggableAttributes(record: createRental());
})->throws(LogicException::class, 'is several events');

it('refuses the record of one of its events sent back as a dropped item', function () {
    $rental = createRental();

    $widget = Livewire::test(DroppableRentalCalendarWidget::class);

    $item = ['record' => $widget->instance()->handleFetchEvents(RENTAL_RANGE)[0]['extendedProps']['calendarRecord']];

    expect($widget->instance()->isDroppable())->toBeTrue();

    $widget
        ->call('handleExternalDrop', $item, '2026-10-20T09:00:00Z', false)
        ->assertForbidden();

    expect($rental->refresh()->starts_at->toDateTimeString())->toBe('2026-10-06 09:00:00');
});

it('refuses a model that is both one event and several', function () {
    $both = new class extends Rental implements Eventable
    {
        public function toCalendarEvent(): array
        {
            return [];
        }
    };

    invade(Livewire::test(RentalCalendarWidget::class)->instance())
        ->getEventsFromRecord($both, FetchInfo::fromArray(RENTAL_RANGE, 'UTC'));
})->throws(LogicException::class, 'implements both Eventable and Eventables');

it('refuses a model that is not an Eloquent model', function () {
    $notAModel = new class implements Eventables
    {
        public function toCalendarEvents(FetchInfo $info): array
        {
            return [];
        }
    };

    invade(Livewire::test(RentalCalendarWidget::class)->instance())
        ->getEventsFromRecord($notAModel, FetchInfo::fromArray(RENTAL_RANGE, 'UTC'));
})->throws(LogicException::class, 'implements Eventables but is not an Eloquent model');
