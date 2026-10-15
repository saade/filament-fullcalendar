<?php

namespace Saade\FilamentFullCalendar\Data;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;
use Saade\FilamentFullCalendar\Support\V6Compat\V6CompatResourceColors;

/**
 * @phpstan-consistent-constructor
 *
 * @implements Arrayable<string, mixed>
 */
class ResourceData implements Arrayable, JsonSerializable
{
    use V6CompatResourceColors;

    protected int | string | null $id = null;

    protected ?string $title = null;

    protected int | string | null $parentId = null;

    /**
     * @var array<ResourceData | array<string, mixed>>
     */
    protected array $children = [];

    /**
     * @var string | array<int, string> | null
     */
    protected string | array | null $eventColor = null;

    protected ?string $eventContrastColor = null;

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

    /**
     * @param  string | array<int, string>  $color
     */
    public function eventColor(string | array $color): static
    {
        $this->eventColor = $color;

        return $this;
    }

    public function eventContrastColor(string $color): static
    {
        $this->eventContrastColor = $color;

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
            ...$this->eventContrastColor ? ['eventContrastColor' => $this->eventContrastColor] : [],
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
