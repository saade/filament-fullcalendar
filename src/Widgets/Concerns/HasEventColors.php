<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Support\Facades\FilamentColor;
use InvalidArgumentException;

trait HasEventColors
{
    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    protected function applyEventColors(array $data, string $prefix = ''): array
    {
        $key = fn (string $name): string => lcfirst($prefix . ucfirst($name));

        $colorKey = $key('color');
        $classKey = $prefix ? $key('class') : 'className';

        $color = $data[$colorKey] ?? null;

        if (blank($color)) {
            return $data;
        }

        $isTinted = in_array($this->getTheme(), ['filament', 'breezy', 'forma'], true);
        $shade = $isTinted ? 500 : 600;

        if (is_array($color)) {
            $data[$colorKey] = $color[$shade] ?? throw new InvalidArgumentException("The palette given to [{$colorKey}] has no [{$shade}] shade. Use a palette from Filament's [Color] class, such as [Color::hex('#16a34a')].");
        } elseif (is_string($color) && array_key_exists($color, FilamentColor::getColors())) {
            $data[$colorKey] = "var(--{$color}-{$shade})";
            $data[$classKey] = trim(($data[$classKey] ?? '') . " fi-color-{$color}");
        } else {
            $color = is_string($color) ? $color : get_debug_type($color);

            throw new InvalidArgumentException("[{$color}] is not a Filament color. Use a color registered in Filament, such as [success], or a palette from Filament's [Color] class, such as [Color::hex('#16a34a')].");
        }

        if (! $isTinted) {
            $data[$key('contrastColor')] ??= 'white';
        }

        return $data;
    }
}
