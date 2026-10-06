<?php

namespace Saade\FilamentFullCalendar\Data;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Facades\Crypt;
use JsonSerializable;

/**
 * Events the calendar reads from somewhere else and shows next to its own.
 * They cannot be dragged, resized or opened in the calendar's modals.
 *
 * @phpstan-consistent-constructor
 *
 * @implements Arrayable<string, mixed>
 */
class EventSourceData implements Arrayable, JsonSerializable
{
    protected ?string $googleCalendarId = null;

    protected ?string $iCalendarUrl = null;

    protected bool $isFetchedByBrowser = false;

    protected int $cacheMinutes = 15;

    protected int | string | null $id = null;

    protected ?string $color = null;

    protected ?string $textColor = null;

    protected ?string $className = null;

    /**
     * @var array<string, mixed>
     */
    protected array $extraProperties = [];

    /**
     * A public Google Calendar. Needs a Google Calendar API key.
     */
    public static function googleCalendar(string $calendarId): static
    {
        $source = new static();
        $source->googleCalendarId = $calendarId;

        return $source;
    }

    /**
     * An iCalendar (`.ics`) feed.
     */
    public static function iCalendar(string $url): static
    {
        $source = new static();
        $source->iCalendarUrl = $url;

        return $source;
    }

    public function id(int | string $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function color(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function textColor(string $color): static
    {
        $this->textColor = $color;

        return $this;
    }

    public function className(string $className): static
    {
        $this->className = $className;

        return $this;
    }

    /**
     * How long this application keeps an iCalendar feed before reading it again.
     */
    public function cacheFor(int $minutes): static
    {
        $this->cacheMinutes = $minutes;

        return $this;
    }

    /**
     * Let the browser read an iCalendar feed itself. The feed's server has
     * to allow that, and its address is visible in the page.
     */
    public function fetchedByBrowser(bool $condition = true): static
    {
        $this->isFetchedByBrowser = $condition;

        return $this;
    }

    /**
     * @param  array<string, mixed>  $extraProperties
     */
    public function extraProperties(array $extraProperties): static
    {
        $this->extraProperties = $extraProperties;

        return $this;
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return [
            ...$this->googleCalendarId ? ['googleCalendarId' => $this->googleCalendarId] : [],
            ...$this->iCalendarUrl ? ['url' => $this->getICalendarUrl(), 'format' => 'ics'] : [],
            ...filled($this->id) ? ['id' => $this->id] : [],
            ...$this->color ? ['color' => $this->color] : [],
            ...$this->textColor ? ['textColor' => $this->textColor] : [],
            ...$this->className ? ['className' => $this->className] : [],
            'editable' => false,
            ...$this->extraProperties,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    protected function getICalendarUrl(): ?string
    {
        if ($this->isFetchedByBrowser) {
            return $this->iCalendarUrl;
        }

        return route('filament-fullcalendar.icalendar-feed', [
            'feed' => Crypt::encryptString(json_encode(['url' => $this->iCalendarUrl, 'cacheFor' => $this->cacheMinutes])),
        ]);
    }
}
