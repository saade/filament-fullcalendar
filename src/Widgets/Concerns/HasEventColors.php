<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Support\Facades\FilamentColor;
use Filament\Support\View\Components\BadgeComponent;
use InvalidArgumentException;

trait HasEventColors
{
    /**
     * @param  array<string, mixed>  $data  An event, an event source or a resource.
     * @return array<string, mixed>
     */
    protected function applyFilamentColor(array $data, string $colorKey = 'color', string $classKey = 'classNames'): array
    {
        $prefix = ($colorKey === 'color') ? '' : substr($colorKey, 0, -strlen('Color'));
        $backgroundKey = lcfirst("{$prefix}BackgroundColor");
        $borderKey = lcfirst("{$prefix}BorderColor");
        $textKey = lcfirst("{$prefix}TextColor");

        // The stylesheet gives events the text color of a badge, so an event
        // filled with a CSS color gets FullCalendar's own white text back.
        if (filled($data[$backgroundKey] ?? null) && blank($data[$textKey] ?? null)) {
            $data[$textKey] = '#fff';
        }

        $color = $data[$colorKey] ?? null;

        if (blank($color)) {
            return $data;
        }

        if ((! is_string($color)) || (! array_key_exists($color, FilamentColor::getColors()))) {
            $color = is_string($color) ? $color : get_debug_type($color);

            throw new InvalidArgumentException("[{$color}] is not a Filament color. Use a color registered in Filament, such as [success], or set a CSS color with [{$backgroundKey}], [{$borderKey}] and [{$textKey}].");
        }

        unset($data[$colorKey]);

        // Gray is the color of a badge that has none, so Filament gives it no classes.
        $data[$classKey] = [
            ...(array) ($data[$classKey] ?? []),
            ...(FilamentColor::getComponentClasses(BadgeComponent::class, $color) ?: ['fc-event-gray']),
        ];

        return $data;
    }

    /**
     * The text shades Filament picks for a primary badge, for events that
     * have no color at all.
     */
    public function getDefaultEventColorStyles(): string
    {
        $styles = [];

        foreach (FilamentColor::getComponentClasses(BadgeComponent::class, 'primary') as $class) {
            if (preg_match('/^(dark:)?fi-text-color-(\d+)$/', $class, $matches)) {
                $variable = filled($matches[1]) ? '--fc-default-event-dark-text' : '--fc-default-event-text';

                $styles[] = "{$variable}: var(--primary-{$matches[2]})";
            }
        }

        return implode('; ', $styles);
    }
}
