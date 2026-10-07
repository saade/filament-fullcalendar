<?php

namespace Saade\FilamentFullCalendar\Testing;

use Carbon\CarbonImmutable;
use Closure;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Assert;
use Livewire\Features\SupportTesting\Testable;
use Saade\FilamentFullCalendar\Contracts\Eventable;

use function Livewire\invade;

/**
 * @mixin Testable
 */
class TestsCalendar
{
    /**
     * An array is used as it is, an `Eventable` record becomes the event the
     * widget makes for it, and anything else is taken as the event's id.
     */
    public function makeCalendarEvent(): Closure
    {
        return function (Model | array | int | string $event, array $overrides = []): array {
            if ($event instanceof Model) {
                $event = $event instanceof Eventable
                    ? json_decode(json_encode(invade($this->instance())->getEventFromRecord($event)), associative: true)
                    : ['id' => $event->getKey()];
            }

            if (! is_array($event)) {
                $event = ['id' => $event];
            }

            return [...$event, ...array_filter($overrides, fn (mixed $value): bool => $value !== null)];
        };
    }

    public function formatCalendarDate(): Closure
    {
        return function (DateTimeInterface | string | null $date, bool $allDay = false): ?string {
            if (! $date instanceof DateTimeInterface) {
                return $date;
            }

            return $allDay ? $date->format('Y-m-d') : $date->format(DateTimeInterface::ATOM);
        };
    }

    /**
     * Defaults to a year either side of today.
     */
    public function getCalendarEvents(): Closure
    {
        return function (DateTimeInterface | string | null $start = null, DateTimeInterface | string | null $end = null): array {
            $events = $this->instance()->handleFetchEvents([
                'start' => $this->formatCalendarDate($start ?? CarbonImmutable::now()->subYear()),
                'end' => $this->formatCalendarDate($end ?? CarbonImmutable::now()->addYear()),
                'timezone' => $this->instance()->getTimezone(),
            ]);

            return json_decode(json_encode($events), associative: true);
        };
    }

    /**
     * `$event` is a title, a record, an array of values the event has to
     * have, or a function that is given each event.
     */
    public function findCalendarEvents(): Closure
    {
        return function (Closure | Model | array | string $event, DateTimeInterface | string | null $start = null, DateTimeInterface | string | null $end = null): array {
            if ($event instanceof Model) {
                $event = ['id' => $this->makeCalendarEvent($event)['id']];
            }

            if (is_string($event)) {
                $event = ['title' => $event];
            }

            $matches = $event instanceof Closure
                ? $event
                : fn (array $candidate): bool => collect($event)->every(fn (mixed $value, string $key): bool => data_get($candidate, $key) == $value);

            return array_values(array_filter($this->getCalendarEvents($start, $end), $matches));
        };
    }

    public function assertCalendarHasEvent(): Closure
    {
        return function (Closure | Model | array | string $event, DateTimeInterface | string | null $start = null, DateTimeInterface | string | null $end = null): static {
            Assert::assertNotEmpty($this->findCalendarEvents($event, $start, $end), 'Failed asserting that the calendar shows the event.');

            return $this;
        };
    }

    public function assertCalendarDoesNotHaveEvent(): Closure
    {
        return function (Closure | Model | array | string $event, DateTimeInterface | string | null $start = null, DateTimeInterface | string | null $end = null): static {
            Assert::assertEmpty($this->findCalendarEvents($event, $start, $end), 'Failed asserting that the calendar does not show the event.');

            return $this;
        };
    }

    public function assertCalendarEventCount(): Closure
    {
        return function (int $count, DateTimeInterface | string | null $start = null, DateTimeInterface | string | null $end = null): static {
            Assert::assertCount($count, $this->getCalendarEvents($start, $end));

            return $this;
        };
    }

    public function clickCalendarEvent(): Closure
    {
        return function (Model | array | int | string $event): static {
            $this->call('handleEventClick', $this->makeCalendarEvent($event));

            return $this;
        };
    }

    public function dropCalendarEvent(): Closure
    {
        return function (Model | array | int | string $event, DateTimeInterface | string $start, DateTimeInterface | string | null $end = null, bool $allDay = false, int | string | null $resource = null): static {
            $oldEvent = $this->makeCalendarEvent($event);

            $newEvent = $this->makeCalendarEvent($oldEvent, [
                'start' => $this->formatCalendarDate($start, $allDay),
                'end' => $this->formatCalendarDate($end, $allDay),
                'allDay' => $allDay,
            ]);

            $this->call('handleEventDrop', $newEvent, [...$newEvent, ...$oldEvent], [], [], null, filled($resource) ? ['id' => (string) $resource] : null);

            return $this;
        };
    }

    public function resizeCalendarEvent(): Closure
    {
        return function (Model | array | int | string $event, DateTimeInterface | string $start, DateTimeInterface | string $end, bool $allDay = false): static {
            $oldEvent = $this->makeCalendarEvent($event);

            $newEvent = $this->makeCalendarEvent($oldEvent, [
                'start' => $this->formatCalendarDate($start, $allDay),
                'end' => $this->formatCalendarDate($end, $allDay),
                'allDay' => $allDay,
            ]);

            $this->call('handleEventResize', $newEvent, [...$newEvent, ...$oldEvent], [], [], []);

            return $this;
        };
    }

    /**
     * For whole days, give the first and the last day.
     */
    public function selectCalendarDates(): Closure
    {
        return function (DateTimeInterface | string $start, DateTimeInterface | string | null $end = null, bool $allDay = true, int | string | null $resource = null): static {
            if ($allDay) {
                $end = CarbonImmutable::parse($this->formatCalendarDate($end ?? $start, allDay: true))->addDay();
            }

            $this->call(
                'handleDateSelect',
                $this->formatCalendarDate($start, $allDay),
                $this->formatCalendarDate($end, $allDay),
                $allDay,
                null,
                filled($resource) ? ['id' => (string) $resource] : null,
            );

            return $this;
        };
    }

    public function clickCalendarDate(): Closure
    {
        return function (DateTimeInterface | string $date, bool $allDay = true, int | string | null $resource = null): static {
            $this->call(
                'handleDateClick',
                $this->formatCalendarDate($date, $allDay),
                $allDay,
                null,
                filled($resource) ? ['id' => (string) $resource] : null,
            );

            return $this;
        };
    }
}
