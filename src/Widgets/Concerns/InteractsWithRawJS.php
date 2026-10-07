<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use InvalidArgumentException;

trait InteractsWithRawJS
{
    /**
     * A ClassName Input for adding classNames to the outermost event element.
     * If supplied as a callback function, it is called every time the associated event data changes.
     *
     * @see https://legacy.fullcalendar.io/v6/event-render-hooks
     */
    public function eventClassNames(): string
    {
        return <<<'JS'
            null
        JS;
    }

    /**
     * A Content Injection Input. Generated content is inserted inside the inner-most wrapper of the event element.
     * If supplied as a callback function, it is called every time the associated event data changes.
     *
     * @see https://legacy.fullcalendar.io/v6/event-render-hooks
     */
    public function eventContent(): string
    {
        return <<<'JS'
            null
        JS;
    }

    /**
     * Called right after the element has been added to the DOM. If the event data changes, this is NOT called again.
     *
     * @see https://legacy.fullcalendar.io/v6/event-render-hooks
     */
    public function eventDidMount(): string
    {
        return <<<'JS'
            null
        JS;
    }

    /**
     * Called right before the element will be removed from the DOM.
     *
     * @see https://legacy.fullcalendar.io/v6/event-render-hooks
     */
    public function eventWillUnmount(): string
    {
        return <<<'JS'
            null
        JS;
    }

    /**
     * Any other FullCalendar option that takes a function, by name, as
     * JavaScript. These are merged over `config()`.
     *
     * @see https://legacy.fullcalendar.io/v6
     *
     * @return array<string, string>
     */
    public function jsCallbacks(): array
    {
        return [];
    }

    /**
     * @return array<string, string>
     */
    public function getJsCallbacks(): array
    {
        $callbacks = [
            'eventClassNames' => $this->eventClassNames(),
            'eventContent' => $this->eventContent(),
            'eventDidMount' => $this->eventDidMount(),
            'eventWillUnmount' => $this->eventWillUnmount(),
            ...$this->jsCallbacks(),
        ];

        $callbacks = array_map(fn (string $callback): string => rtrim(trim($callback), ';'), $callbacks);

        foreach (array_keys($callbacks) as $name) {
            if (! preg_match('/^[A-Za-z_$][\w$]*$/', (string) $name)) {
                throw new InvalidArgumentException("[{$name}] is not a valid name for a FullCalendar option.");
            }
        }

        return array_filter($callbacks, fn (string $callback): bool => filled($callback) && ($callback !== 'null'));
    }
}
