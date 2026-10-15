<?php

namespace Saade\FilamentFullCalendar\Support\V6Compat;

class V6CompatOptions
{
    /**
     * @var array<string, string>
     */
    protected const RENAMED_OPTIONS = [
        'customButtons' => 'buttons',
        'eventClassNames' => 'eventClass',
        'eventBackgroundColor' => 'eventColor',
        'eventBorderColor' => 'eventColor',
        'eventTextColor' => 'eventContrastColor',
        'viewClassNames' => 'viewClass',
        'dayHeaderClassNames' => 'dayHeaderClass',
        'dayCellClassNames' => 'dayCellClass',
        'dayCellContent' => 'dayCellTopContent',
        'slotLabelClassNames' => 'slotHeaderClass',
        'slotLabelContent' => 'slotHeaderContent',
        'slotLabelDidMount' => 'slotHeaderDidMount',
        'slotLabelWillUnmount' => 'slotHeaderWillUnmount',
        'slotLabelFormat' => 'slotHeaderFormat',
        'slotLabelInterval' => 'slotHeaderInterval',
        'slotLaneClassNames' => 'slotLaneClass',
        'moreLinkClassNames' => 'moreLinkClass',
        'navLinkClassNames' => 'navLinkClass',
        'noEventsClassNames' => 'noEventsClass',
        'dayPopoverFormat' => 'popoverFormat',
        'stickyHeaderDates' => 'tableHeaderSticky',
        'stickyFooterScrollbar' => 'footerScrollbarSticky',
        'listDaySideFormat' => 'listDayAltFormat',
        'multiMonthMinWidth' => 'singleMonthMinWidth',
        'multiMonthTitleFormat' => 'singleMonthTitleFormat',
        'weekText' => 'weekTextShort',
        'resourceAreaWidth' => 'resourceColumnsWidth',
        'resourceAreaColumns' => 'resourceColumns',
        'resourceAreaHeaderContent' => 'resourceColumnHeaderContent',
        'resourceAreaHeaderClassNames' => 'resourceColumnHeaderClass',
        'resourceLaneClassNames' => 'resourceLaneClass',
        'resourceGroupLaneClassNames' => 'resourceGroupLaneClass',
    ];

    /**
     * @var array<string, string>
     */
    protected const UNIT_TEXT_OPTIONS = [
        'year' => 'yearText',
        'month' => 'monthText',
        'week' => 'weekTextLong',
        'day' => 'dayText',
        'list' => 'listText',
    ];

    /**
     * @param  array<string, mixed>  $event
     * @return array<string, mixed>
     */
    public static function event(array $event): array
    {
        return static::colors(static::joinClasses(static::rename($event, ['classNames' => 'className'])));
    }

    /**
     * @param  array<string, mixed>  $resource
     * @return array<string, mixed>
     */
    public static function resource(array $resource): array
    {
        $resource = static::colors(static::joinClasses(static::rename($resource, ['eventClassNames' => 'eventClass'])), prefix: 'event');

        if (is_array($resource['children'] ?? null)) {
            $resource['children'] = array_map(static::resource(...), $resource['children']);
        }

        return $resource;
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    protected static function colors(array $data, string $prefix = ''): array
    {
        $key = fn (string $name): string => lcfirst($prefix . ucfirst($name));

        $cssColor = ($data[$key('backgroundColor')] ?? null) ?: ($data[$key('borderColor')] ?? null);

        if (filled($cssColor)) {
            $data[$key('color')] ??= static::palette($cssColor);
        }

        if (filled($data[$key('textColor')] ?? null)) {
            $data[$key('contrastColor')] ??= $data[$key('textColor')];
        }

        unset($data[$key('backgroundColor')], $data[$key('borderColor')], $data[$key('textColor')]);

        return $data;
    }

    /**
     * @param  array<string, mixed>  $config
     * @return array<string, mixed>
     */
    public static function config(array $config): array
    {
        $config = static::joinClasses(static::rename($config, static::RENAMED_OPTIONS));

        if (is_array($config['plugins'] ?? null)) {
            $config['plugins'] = array_values(array_diff($config['plugins'], ['moment', 'momentTimezone', 'resource']));
        }

        if (array_key_exists('resourceColumnsWidth', $config)) {
            $config['resourceColumnsWidth'] = static::dimension($config['resourceColumnsWidth']);

            if ($config['resourceColumnsWidth'] === null) {
                unset($config['resourceColumnsWidth']);
            }
        }

        foreach ((array) ($config['buttonText'] ?? []) as $button => $text) {
            if (array_key_exists($button, static::UNIT_TEXT_OPTIONS)) {
                $config[static::UNIT_TEXT_OPTIONS[$button]] ??= $text;

                continue;
            }

            $config['buttons'][$button]['text'] ??= $text;
        }

        foreach ((array) ($config['buttonHints'] ?? []) as $button => $hint) {
            $config['buttons'][$button]['hint'] ??= $hint;
        }

        unset($config['buttonText'], $config['buttonHints']);

        foreach ((array) ($config['views'] ?? []) as $name => $view) {
            if (! is_array($view)) {
                continue;
            }

            if (filled($view['buttonText'] ?? null)) {
                $config['buttons'][$name]['text'] ??= $view['buttonText'];
            }

            unset($view['buttonText']);

            $config['views'][$name] = static::joinClasses(static::rename($view, ['classNames' => 'className', ...static::RENAMED_OPTIONS]));
        }

        return $config;
    }

    /**
     * @return array<int, string>
     */
    public static function palette(string $cssColor): array
    {
        return array_fill_keys([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], $cssColor);
    }

    /**
     * @param  array<string, mixed>  $options
     * @return array<string, mixed>
     */
    protected static function joinClasses(array $options): array
    {
        foreach ($options as $name => $value) {
            if (is_array($value) && (str_ends_with($name, 'Class') || ($name === 'className'))) {
                $options[$name] = implode(' ', $value);
            }
        }

        return $options;
    }

    protected static function dimension(mixed $value): mixed
    {
        if ((! is_string($value)) || preg_match('/^\d+(\.\d+)?(px|%)?$/', $value)) {
            return $value;
        }

        if (preg_match('/^(\d+(?:\.\d+)?)r?em$/', $value, $matches)) {
            return ((float) $matches[1] * 16) . 'px';
        }

        return null;
    }

    /**
     * @param  array<string, string>  $callbacks
     * @return array<string, string>
     */
    public static function callbacks(array $callbacks, object $widget): array
    {
        $eventClassNames = method_exists($widget, 'eventClassNames') ? rtrim(trim($widget->eventClassNames()), ';') : null;

        if (filled($eventClassNames) && ($eventClassNames !== 'null')) {
            $callbacks['eventClassNames'] = $eventClassNames;
        }

        return static::rename($callbacks, static::RENAMED_OPTIONS);
    }

    /**
     * @param  array<string, mixed>  $values
     * @param  array<string, string>  $names
     * @return array<string, mixed>
     */
    protected static function rename(array $values, array $names): array
    {
        foreach ($names as $legacy => $current) {
            if (! array_key_exists($legacy, $values)) {
                continue;
            }

            $value = $values[$legacy];

            unset($values[$legacy]);

            if (filled($value) && (! array_key_exists($current, $values))) {
                $values[$current] = $value;
            }
        }

        return $values;
    }
}
