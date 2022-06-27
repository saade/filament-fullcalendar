# The Most Popular JavaScript Calendar as a Filament Widget 💛

![Monthly Calendar](./art/fullcalendar-widget.png)

[![Latest Version on Packagist](https://img.shields.io/packagist/v/saade/filament-fullcalendar.svg?style=flat-square)](https://packagist.org/packages/saade/filament-fullcalendar)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/saade/filament-fullcalendar/run-tests?label=tests)](https://github.com/saade/filament-fullcalendar/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/workflow/status/saade/filament-fullcalendar/Check%20&%20fix%20styling?label=code%20style)](https://github.com/saade/filament-fullcalendar/actions?query=workflow%3A"Check+%26+fix+styling"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/saade/filament-fullcalendar.svg?style=flat-square)](https://packagist.org/packages/saade/filament-fullcalendar)

# Features

- Accepts all configurations from [FullCalendar](https://fullcalendar.io/docs#toc)
- Event click and drop events
- Modals for creating and editing events <sup>New in v1.0</sup>

<br>

## Support Filament

<a href="https://github.com/sponsors/danharrin">
<img width="320" alt="filament-logo" src="https://filamentadmin.com/images/sponsor-banner.jpg">
</a>


<br>

# Installation

You can install the package via composer:

```bash
composer require saade/filament-fullcalendar
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="filament-fullcalendar-config"
```

<br>

# Usage

Since the package **does not** automatically add the `FullCalendarWidget` widget to your Filament panel, you are free to extend the widget and customise it yourself.


1. First, create a [Filament Widget](https://filamentadmin.com/docs/2.x/admin/dashboard#getting-started):

```bash
php artisan make:filament-widget CalendarWidget
```

> This will create a new `App\Filament\Widgets\CalendarWidget` class in your project.

<br>

2. Your newly created widget should extends the `Saade\FilamentFullCalendar\Widgets\FullCalendarWidget` class of this package

```php
<?php

namespace App\Filament\Widgets;

use App\Models\Meeting;
use App\Filament\Resources\MeetingResource;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class CalendarWidget extends FullCalendarWidget
{

    public function getViewData(): array
    {
        return [
            [
                'id' => 1,
                'title' => 'Breakfast!',
                'start' => now()
            ],
            [
                'id' => 2,
                'title' => 'Meeting with Pamela',
                'start' => now()->addDay(),
                'url' => MeetingResource::getUrl('view', ['record' => 2]),
                'shouldOpenInNewTab' => true,
            ]
        ];
    }
}
```

> You should return an array of FullCalendar [EventObject](https://fullcalendar.io/docs/event-object).


<br>

# Configuration
This is the contents of the default config file.

You can use any property that FullCalendar uses on its root object.
Please refer to: [FullCalendar Docs](https://fullcalendar.io/docs#toc) to see the available options. It supports most of them.

```php
<?php

/**
 * Consider this file the root configuration object for FullCalendar.
 * Any configuration added here, will be added to the calendar.
 * @see https://fullcalendar.io/docs#toc
 */

return [
    'timeZone' => config('app.timezone'),

    'locale' => config('app.locale'),

    'headerToolbar' => [
        'left'   => 'prev,next today',
        'center' => 'title',
        'right'  => 'dayGridMonth,dayGridWeek,dayGridDay'
    ],

    'navLinks' => true,

    'editable' => true,

    'dayMaxEvents' => true
];
```

<br>

# Listening for events

The only events supported right now are: [EventClick](https://fullcalendar.io/docs/eventClick) and [EventDrop](https://fullcalendar.io/docs/eventDrop)

They're commented out by default so livewire does not spam requests without they being used. You are free to paste them in your `CalendarWidget` class. See: [FiresEvents](https://github.com/saade/filament-fullcalendar/blob/main/src/Widgets/Concerns/FiresEvents.php)

> Note: if you are overriding the event callbacks, be sure to call its parent function to garantee that all functions works properly.

```php
/**
 * Triggered when the user clicks an event.
 */
public function onEventClick($event): void
{
    parent::onEventClick($event);

    // your code
}

/**
 * Triggered when dragging stops and the event has moved to a different day/time.
 */
public function onEventDrop($oldEvent, $newEvent, $relatedEvents): void
{
    parent::onEventDrop($oldEvent, $newEvent, $relatedEvents);

    // your code
}
```

<br>

# Creating and Editing events with modals.

Since [v1.0.0](https://github.com/saade/filament-fullcalendar/releases/tag/v1.0.0) you can create and edit events using a modal.

The process of saving and editing the event is up to you, since this plugin does not rely on a Model to save the calendar events.


## Creating Events:

Override the `createEvent` function in your widget class, and you are ready to go!

```php
public function createEvent(array $data): void
{
    // Create the event with the provided $data.
}
```

If the default form does not fullfills your needs, you can override the `getCreateEventFormSchema` and use it like a normal Filament form.

```php
protected static function getCreateEventFormSchema(): array
{
    return [
        Forms\Components\TextInput::make('title')
            ->required(),
        Forms\Components\DatePicker::make('start')
            ->required(),
        Forms\Components\DatePicker::make('end')
            ->default(null),
    ];
}
```

<br>

## Editing Events:

Override the `editEvent` function in your widget class, and you are ready to go!

```php
public function editEvent(array $data): void
{
    // Edit the event with the provided $data.
}
```

If the default form does not fullfills your needs, you can override the `getEditEventFormSchema` and use it like a normal Filament form.

```php
protected static function getEditEventFormSchema(): array
{
    return [
        Forms\Components\TextInput::make('title')
            ->required(),
        Forms\Components\DatePicker::make('start')
            ->required(),
        Forms\Components\DatePicker::make('end')
            ->default(null),
    ];
}
```

<br>

## Authorizing actions

If you want to authorize the `edit` or `create` action, you can override the default authorization methods that comes with this package.

```php
public static function canCreate(): bool
{
    // Returning 'false' will remove the 'Create' button on the calendar.
    return true;
}

public static function canEdit(?array $event = null): bool
{
    // Returning 'false' will disable the edit modal when clicking on a event.
    return true;
}
```

If you want to disable all actions or keep the calendar as it was before [v1.0.0](https://github.com/saade/filament-fullcalendar/releases/tag/v1.0.0), you can return false for all the methods above, or use the convenient concern `CantManageEvents`. It will disable all calendar modals.

```php
class CalendarWidget extends FullCalendarWidget
{
    use CantManageEvents;

    // ...
}
```

<br>

# Refreshing calendar events

If you want to refresh the calendar events, you can call `$this->refreshEvents()` inside your widget class. This will call `getViewData()` and re-render the events on the calendar.

```php
public function yourMethod(): void
{
    $this->refreshEvents();
}
```

<br>

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Saade](https://github.com/saade)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
