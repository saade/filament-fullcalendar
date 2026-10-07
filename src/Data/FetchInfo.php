<?php

namespace Saade\FilamentFullCalendar\Data;

use ArrayAccess;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Builder;
use LogicException;

/**
 * The range of dates the calendar is asking events for.
 *
 * @implements ArrayAccess<string, string>
 */
final readonly class FetchInfo implements ArrayAccess
{
    /**
     * @param  CarbonImmutable  $start  Start of the visible range, in the application's timezone.
     * @param  CarbonImmutable  $end  End of the visible range (exclusive), in the application's timezone.
     * @param  string  $timezone  The calendar's timezone.
     * @param  array{start: string, end: string, timezone: string}  $raw
     */
    public function __construct(
        public CarbonImmutable $start,
        public CarbonImmutable $end,
        public string $timezone,
        public array $raw,
    ) {
    }

    /**
     * @param  array{start: string, end: string, timezone?: string}  $info
     */
    public static function fromArray(array $info, string $timezone): self
    {
        $applicationTimezone = config('app.timezone');

        return new self(
            start: CarbonImmutable::parse($info['start'], $timezone)->setTimezone($applicationTimezone),
            end: CarbonImmutable::parse($info['end'], $timezone)->setTimezone($applicationTimezone),
            timezone: $timezone,
            raw: [
                'start' => $info['start'],
                'end' => $info['end'],
                'timezone' => $info['timezone'] ?? $timezone,
            ],
        );
    }

    /**
     * Limit a query to the records that overlap the visible range, including
     * the ones that begin before it or end after it.
     *
     * @template TBuilder of Builder
     *
     * @param  TBuilder  $query
     * @return TBuilder
     */
    public function overlapping(Builder $query, string $startColumn, ?string $endColumn = null): Builder
    {
        return $query
            ->where($startColumn, '<', $this->end)
            ->where($endColumn ?? $startColumn, '>=', $this->start);
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
        throw new LogicException('Fetch info is read-only.');
    }

    public function offsetUnset(mixed $offset): void
    {
        throw new LogicException('Fetch info is read-only.');
    }
}
