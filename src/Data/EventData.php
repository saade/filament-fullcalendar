<?php

namespace Saade\FilamentFullCalendar\Data;

use DateTimeInterface;
use Illuminate\Contracts\Support\Arrayable;

class EventData implements Arrayable
{
    protected int|string $id;

    protected int|string|null $groupId = null;

    protected bool $allDay = false;

    protected DateTimeInterface|string $start;

    protected DateTimeInterface|string|null $end = null;

    protected string $title;

    protected ?string $url = null;

    protected bool $shouldOpenUrlInNewTab = false;

    protected ?string $backgroundColor = null;

    protected ?string $borderColor = null;

    protected ?string $textColor = null;

    protected ?array $extendedProps = null;

    protected array $extraProperties = [];

    public static function make(): static
    {
        return new static();
    }

    /**
     * A unique identifier of an event.
     */
    public function id(int|string $id): static
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Events that share a groupId will be dragged and resized together automatically.
     */
    public function groupId(int|string $groupId): static
    {
        $this->groupId = $groupId;

        return $this;
    }

    /**
     * Determines if the event is shown in the “all-day” section of relevant views. In addition, if true the time text is not displayed with the event.
     */
    public function allDay(bool $allDay = true): static
    {
        $this->allDay = $allDay;

        return $this;
    }

    /**
     * 	Date object that obeys the current timeZone. When an event begins.
     */
    public function start(DateTimeInterface|string $start): static
    {
        $this->start = $start;

        return $this;
    }

    /**
     * Date object that obeys the current timeZone. When an event ends. It’s exclusive. It could be null if an end wasn’t specified.
     * This value is exclusive. For example, an event with the end of 2018-09-03 will appear to span through 2018-09-02 but end before the start of 2018-09-03.
     */
    public function end(DateTimeInterface|string|null $end): static
    {
        $this->end = $end;

        return $this;
    }

    /**
     * The text that will appear on an event.
     */
    public function title(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    /**
     * A URL that will be visited when this event is clicked by the user.
     */
    public function url(string $url, bool $shouldOpenUrlInNewTab = false): static
    {
        $this->url = $url;
        $this->shouldOpenUrlInNewTab = $shouldOpenUrlInNewTab;

        return $this;
    }

    /**
     * The eventBackgroundColor override for this specific event.
     */
    public function backgroundColor(string $backgroundColor): static
    {
        $this->backgroundColor = $backgroundColor;

        return $this;
    }

    /**
     * The eventBorderColor override for this specific event.
     */
    public function borderColor(string $borderColor): static
    {
        $this->borderColor = $borderColor;

        return $this;
    }

    /**
     * The eventTextColor override for this specific event.
     */
    public function textColor(string $textColor): static
    {
        $this->textColor = $textColor;

        return $this;
    }

    /**
     * A plain object holding miscellaneous other properties specified during parsing.
     * Receives properties in the explicitly given extendedProps hash as well as other non-standard properties.
     */
    public function extendedProps(array $extendedProps): static
    {
        $this->extendedProps = $extendedProps;

        return $this;
    }

    /**
     * Add extra properties that doesn't have a fluent method defined here, to the event.
     */
    public function extraProperties(array $extraProperties): static
    {
        $this->extraProperties = $extraProperties;

        return $this;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'start' => $this->start,
            'end' => $this->end,
            'title' => $this->title,
            ...$this->url ? ['url' => $this->url, 'shouldOpenUrlInNewTab' => $this->shouldOpenUrlInNewTab] : [],
            ...$this->groupId ? ['groupId' => $this->groupId] : [],
            ...$this->allDay ? ['allDay' => $this->allDay] : [],
            ...$this->backgroundColor ? ['backgroundColor' => $this->backgroundColor] : [],
            ...$this->borderColor ? ['borderColor' => $this->borderColor] : [],
            ...$this->textColor ? ['textColor' => $this->textColor] : [],
            ...$this->extendedProps ? ['extendedProps' => $this->extendedProps] : [],
            ...$this->extraProperties,
        ];
    }
}
