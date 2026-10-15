<?php

namespace Saade\FilamentFullCalendar\Data;

use DateTimeInterface;
use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;
use Saade\FilamentFullCalendar\Support\V6Compat\V6CompatColors;

/**
 * @phpstan-consistent-constructor
 */
class EventData implements Arrayable, JsonSerializable
{
    use V6CompatColors;

    protected int | string | null $id = null;

    protected int | string | null $groupId = null;

    protected int | string | null $resourceId = null;

    protected ?array $resourceIds = null;

    protected ?bool $allDay = null;

    protected DateTimeInterface | string | null $start = null;

    protected DateTimeInterface | string | null $end = null;

    protected ?string $title = null;

    protected ?string $url = null;

    protected bool $shouldOpenUrlInNewTab = false;

    /**
     * @var string | array<int, string> | null
     */
    protected string | array | null $color = null;

    protected ?string $contrastColor = null;

    protected ?array $extendedProps = null;

    /**
     * @var string | array<string> | null
     */
    protected string | array | null $tooltip = null;

    protected bool $isTooltipHtml = false;

    protected bool $isTitleHtml = false;

    protected array $extraProperties = [];

    public static function make(): static
    {
        return new static;
    }

    /**
     * A unique identifier of an event.
     */
    public function id(int | string $id): static
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Events that share a groupId will be dragged and resized together automatically.
     */
    public function groupId(int | string $groupId): static
    {
        $this->groupId = $groupId;

        return $this;
    }

    /**
     * Events can be associated with a resource when its resourceId property matches one of the resource object’s id field.
     */
    public function resourceId(int | string $resourceId): static
    {
        $this->resourceId = $resourceId;

        return $this;
    }

    /**
     * It is also possible to associate an event with multiple resources using the resourceIds property.
     */
    public function resourceIds(array $resourceIds): static
    {
        $this->resourceIds = $resourceIds;

        return $this;
    }

    /**
     * Determines if the event is shown in the “all-day” section of relevant views. In addition,
     * if true the time text is not displayed with the event.
     */
    public function allDay(bool $allDay = true): static
    {
        $this->allDay = $allDay;

        return $this;
    }

    /**
     * 	Date object that obeys the current timeZone. When an event begins.
     */
    public function start(DateTimeInterface | string $start): static
    {
        $this->start = $start;

        return $this;
    }

    /**
     * Date object that obeys the current timeZone. When an event ends. It’s exclusive. It could be null if an end wasn’t specified.
     * This value is exclusive. For example, an event with the end of 2018-09-03 will appear to span through 2018-09-02 but end before the start of 2018-09-03.
     */
    public function end(DateTimeInterface | string | null $end): static
    {
        $this->end = $end;

        return $this;
    }

    /**
     * The text that will appear on an event.
     *
     * @param  bool  $html  Rendered as HTML and not escaped.
     */
    public function title(string $title, bool $html = false): static
    {
        $this->title = $title;
        $this->isTitleHtml = $html;

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
     * @param  string | array<int, string>  $color
     */
    public function color(string | array $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function contrastColor(string $color): static
    {
        $this->contrastColor = $color;

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
     * Shown when the event is hovered. Pass an array for several lines.
     *
     * @param  string | array<string>  $tooltip
     * @param  bool  $html  Rendered as HTML and not escaped.
     */
    public function tooltip(string | array $tooltip, bool $html = false): static
    {
        $this->tooltip = $tooltip;
        $this->isTooltipHtml = $html;

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
            ...filled($this->id) ? ['id' => $this->id] : [],
            ...filled($this->start) ? ['start' => $this->formatDate($this->start)] : [],
            'end' => $this->formatDate($this->end),
            ...filled($this->title) ? ['title' => $this->title] : [],
            ...$this->resourceId ? ['resourceId' => $this->resourceId] : [],
            ...$this->resourceIds ? ['resourceIds' => $this->resourceIds] : [],
            ...$this->url ? ['url' => $this->url, 'shouldOpenUrlInNewTab' => $this->shouldOpenUrlInNewTab] : [],
            ...$this->groupId ? ['groupId' => $this->groupId] : [],
            ...$this->allDay !== null ? ['allDay' => $this->allDay] : [],
            ...$this->color ? ['color' => $this->color] : [],
            ...$this->contrastColor ? ['contrastColor' => $this->contrastColor] : [],
            ...($this->extendedProps || filled($this->tooltip) || $this->isTitleHtml) ? ['extendedProps' => [
                ...$this->extendedProps ?? [],
                ...$this->isTitleHtml ? ['isTitleHtml' => true] : [],
                ...filled($this->tooltip) ? ['tooltip' => $this->tooltip] : [],
                ...(filled($this->tooltip) && $this->isTooltipHtml) ? ['isTooltipHtml' => true] : [],
            ]] : [],
            ...$this->extraProperties,
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    protected function formatDate(DateTimeInterface | string | null $date): ?string
    {
        if ($date instanceof DateTimeInterface) {
            return $date->format(DateTimeInterface::ATOM);
        }

        return $date;
    }
}
