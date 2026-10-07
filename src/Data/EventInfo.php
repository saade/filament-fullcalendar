<?php

namespace Saade\FilamentFullCalendar\Data;

use ArrayAccess;
use Carbon\CarbonImmutable;
use LogicException;

/**
 * An event as the calendar reports it back after an interaction.
 *
 * @implements ArrayAccess<string, mixed>
 */
final readonly class EventInfo implements ArrayAccess
{
    /**
     * @param  array<string, mixed>  $extendedProps
     * @param  array<string, mixed>  $raw
     * @param  bool  $isRecurring  Whether this is one occurrence of a recurring event. Its dates are those of the occurrence, not of the series.
     */
    public function __construct(
        public int | string | null $id,
        public ?string $title,
        public ?CarbonImmutable $start,
        public ?CarbonImmutable $end,
        public bool $allDay,
        public array $extendedProps,
        public array $raw,
        public bool $isRecurring = false,
    ) {}

    /**
     * @param  array<string, mixed>  $event
     */
    public static function fromArray(array $event, string $timezone): self
    {
        return new self(
            id: $event['id'] ?? null,
            title: $event['title'] ?? null,
            start: filled($event['start'] ?? null) ? CarbonImmutable::parse($event['start'], $timezone) : null,
            end: filled($event['end'] ?? null) ? CarbonImmutable::parse($event['end'], $timezone) : null,
            allDay: (bool) ($event['allDay'] ?? false),
            extendedProps: $event['extendedProps'] ?? [],
            raw: $event,
            isRecurring: (bool) ($event['isRecurring'] ?? false),
        );
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return $this->raw;
    }

    public function offsetExists(mixed $offset): bool
    {
        return isset($this->raw[$offset]);
    }

    public function offsetGet(mixed $offset): mixed
    {
        return $this->raw[$offset] ?? null;
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        throw new LogicException('Event info is read-only.');
    }

    public function offsetUnset(mixed $offset): void
    {
        throw new LogicException('Event info is read-only.');
    }
}
