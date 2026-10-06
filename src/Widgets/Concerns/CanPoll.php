<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use InvalidArgumentException;

trait CanPoll
{
    /**
     * How often the events are fetched again, as in `30s`, `5m` or `500ms`.
     */
    protected ?string $pollingInterval = null;

    protected function getPollingInterval(): ?string
    {
        return $this->pollingInterval;
    }

    public function getPollingIntervalInMilliseconds(): ?int
    {
        $interval = $this->getPollingInterval();

        if (blank($interval)) {
            return null;
        }

        if (! preg_match('/^(\d+)(ms|s|m)$/', $interval, $matches)) {
            throw new InvalidArgumentException("[{$interval}] is not a polling interval. Use a number followed by [ms], [s] or [m], as in [30s].");
        }

        return ((int) $matches[1]) * match ($matches[2]) {
            'ms' => 1,
            's' => 1000,
            'm' => 60_000,
        };
    }
}
