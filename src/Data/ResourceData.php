<?php

namespace Saade\FilamentFullCalendar\Data;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

/**
 * @phpstan-consistent-constructor
 *
 * @implements Arrayable<string, mixed>
 */
class ResourceData implements Arrayable, JsonSerializable
{
    protected int | string | null $id = null;

    protected ?string $title = null;

    protected int | string | null $parentId = null;

    /**
     * @var array<ResourceData | array<string, mixed>>
     */
    protected array $children = [];

    protected ?string $eventColor = null;

    protected ?string $eventBackgroundColor = null;

    protected ?string $eventBorderColor = null;

    protected ?string $eventTextColor = null;

    /**
     * @var array<string, mixed> | null
     */
    protected ?array $extendedProps = null;

    /**
     * @var array<string, mixed>
     */
    protected array $extraProperties = [];

    public static function make(): static
    {
        return new static;
    }

    public function id(int | string $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function title(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function parentId(int | string | null $parentId): static
    {
        $this->parentId = $parentId;

        return $this;
    }

    /**
     * @param  array<ResourceData | array<string, mixed>>  $children
     */
    public function children(array $children): static
    {
        $this->children = $children;

        return $this;
    }

    public function eventColor(string $color): static
    {
        $this->eventColor = $color;

        return $this;
    }

    public function eventBackgroundColor(string $color): static
    {
        $this->eventBackgroundColor = $color;

        return $this;
    }

    public function eventBorderColor(string $color): static
    {
        $this->eventBorderColor = $color;

        return $this;
    }

    public function eventTextColor(string $color): static
    {
        $this->eventTextColor = $color;

        return $this;
    }

    /**
     * @param  array<string, mixed>  $extendedProps
     */
    public function extendedProps(array $extendedProps): static
    {
        $this->extendedProps = $extendedProps;

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
            ...filled($this->id) ? ['id' => (string) $this->id] : [],
            ...filled($this->title) ? ['title' => $this->title] : [],
            ...filled($this->parentId) ? ['parentId' => (string) $this->parentId] : [],
            ...$this->children ? ['children' => array_map(
                fn (ResourceData | array $child): array => $child instanceof ResourceData ? $child->toArray() : $child,
                $this->children,
            )] : [],
            ...$this->eventColor ? ['eventColor' => $this->eventColor] : [],
            ...$this->eventBackgroundColor ? ['eventBackgroundColor' => $this->eventBackgroundColor] : [],
            ...$this->eventBorderColor ? ['eventBorderColor' => $this->eventBorderColor] : [],
            ...$this->eventTextColor ? ['eventTextColor' => $this->eventTextColor] : [],
            ...$this->extendedProps ? ['extendedProps' => $this->extendedProps] : [],
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
}
