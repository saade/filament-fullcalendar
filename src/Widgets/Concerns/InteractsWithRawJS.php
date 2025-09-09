<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait InteractsWithRawJS
{
    /**
     * A ClassName Input for adding classNames to the outermost event element.
     * If supplied as a callback function, it is called every time the associated event data changes.
     *
     * @see https://fullcalendar.io/docs/event-render-hooks
     *
     * @return string
     */
    public function eventClassNames(): string
    {
        return <<<JS
            null
        JS;
    }

    /**
     * A Content Injection Input. Generated content is inserted inside the inner-most wrapper of the event element.
     * If supplied as a callback function, it is called every time the associated event data changes.
     *
     * @see https://fullcalendar.io/docs/event-render-hooks
     *
     * @return string
     */
    public function eventContent(): string
    {
        return <<<JS
            null
        JS;
    }

    /**
     * Called right after the element has been added to the DOM. If the event data changes, this is NOT called again.
     *
     * @see https://fullcalendar.io/docs/event-render-hooks
     *
     * @return string
     */
    public function eventDidMount(): string
    {
        return <<<JS
            null
        JS;
    }

    /**
     * Called right before the element will be removed from the DOM.
     *
     * @see https://fullcalendar.io/docs/event-render-hooks
     *
     * @return string
     */
    public function eventWillUnmount(): string
    {
        return <<<JS
            null
        JS;
    }

    /**
     * Triggered when the user mouses over an event. Similar to the native mouseenter.
     *
     * @see https://fullcalendar.io/docs/eventMouseEnter
     *
     * @return string
     */
    public function eventMouseEnter(): string
    {
        return <<<JS
            null
        JS;
    }

    /**
     * Triggered when the user mouses out of an event. Similar to the native mouseleave.
     *
     * @see https://fullcalendar.io/docs/eventMouseLeave
     *
     * @return string
     */
    public function eventMouseLeave(): string
    {
        return <<<JS
            null
        JS;
    }

    /**
     * The URL for fetching calendar resources.
     *
     * @see https://fullcalendar.io/docs/resource-source
     *
     * @return string
     */
    public function getResourceUrl(): string
    {
        return '';
    }

    /**
     * The HTTP method for fetching calendar resources.
     *
     * @see https://fullcalendar.io/docs/resource-source
     *
     * @return string
     */
    public function getResourceMethod(): string
    {
        return 'GET';
    }

    /**
     * Extra parameters to pass when fetching calendar resources.
     *
     * @see https://fullcalendar.io/docs/resource-source
     *
     * @return string
     */
    public function getResourceExtraParams(): string
    {
        return <<<JS
            null
        JS;
    }
}
