<?php

/**
 * Consider this file the root configuration object for FullCalendar.
 * Any configuration added here, will be added to the calendar.
 *
 * @see https://fullcalendar.io/docs#toc
 */

return [
    'timeZone' => config('app.timezone'),

    'locale' => config('app.locale'),

    'plugins' => [
        'dayGrid' => true,
        'multiMonth' => true,
        'timeGrid' => true,
        'interaction' => true,
        'list' => true,
        'rrule' => true,
        'resourceTimeline' => true,
    ],

    'headerToolbar' => [
        'left' => 'prev,next today',
        'center' => 'title',
        'right' => 'dayGridMonth,dayGridWeek,dayGridDay,multiMonthYear',
    ],

    'navLinks' => true,

    'editable' => true,

    'selectable' => false,

    'dayMaxEvents' => true,

    'initialView' => 'dayGridMonth'
];
