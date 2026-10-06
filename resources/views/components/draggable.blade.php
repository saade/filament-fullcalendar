@props([
    'calendar' => null,
    'record' => null,
    'data' => [],
    'title' => null,
    'duration' => null,
])

@php
    $calendar ??= \Saade\FilamentFullCalendar\Widgets\FullCalendarWidget::class;
@endphp

<div {{ $attributes }} {{ $calendar::getDraggableAttributes($record, $data, $title, $duration) }}>
    {{ $slot }}
</div>
