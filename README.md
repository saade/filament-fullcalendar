# Filament FullCalendar

[![Latest Version on Packagist](https://img.shields.io/packagist/v/saade/filament-fullcalendar.svg?style=flat-square)](https://packagist.org/packages/saade/filament-fullcalendar)
[![Total Downloads](https://img.shields.io/packagist/dt/saade/filament-fullcalendar.svg?style=flat-square)](https://packagist.org/packages/saade/filament-fullcalendar)
[![Tests](https://img.shields.io/github/actions/workflow/status/saade/filament-fullcalendar/run-tests.yml?branch=5.x&label=tests&style=flat-square)](https://github.com/saade/filament-fullcalendar/actions/workflows/run-tests.yml)

<p align="center">
    <img src="https://raw.githubusercontent.com/saade/filament-fullcalendar/5.x/art/cover.png" alt="Filament FullCalendar" style="width: 100%; max-width: 800px; border-radius: 10px" />
</p>

[FullCalendar](https://fullcalendar.io) for [Filament](https://filamentphp.com) panels: show your models on a calendar and view, create, edit, drag and resize them with Filament actions.

# Version compatibility

| Plugin | Filament | FullCalendar | Install |
| ------ | -------- | ------------ | ------- |
| 5.x    | 4.x, 5.x | 6.x          | `composer require saade/filament-fullcalendar:"^5.0"` |
| 4.x    | 4.x, 5.x | 6.x          | `composer require saade/filament-fullcalendar:"^4.0"` |
| 3.x    | 3.x      | 6.x          | `composer require saade/filament-fullcalendar:"^3.0"` |
| 2.x    | 2.x      | 5.x          | `composer require saade/filament-fullcalendar:"^2.0"` |

Upgrading from 4.x or 3.x? Read the [upgrade guide](UPGRADING.md).

# Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Returning events](#returning-events)
  - [The EventData class](#the-eventdata-class)
  - [Showing the calendar on its own page](#showing-the-calendar-on-its-own-page)
  - [Showing the calendar on a resource page](#showing-the-calendar-on-a-resource-page)
- [Configuration](#configuration)
  - [Plugin methods](#plugin-methods)
  - [Configuring a single widget](#configuring-a-single-widget)
  - [Premium plugins and licensing](#premium-plugins-and-licensing)
- [Interacting with actions](#interacting-with-actions)
  - [Viewing events with an infolist](#viewing-events-with-an-infolist)
  - [Customizing actions](#customizing-actions)
  - [Authorizing actions](#authorizing-actions)
  - [Multi-tenancy](#multi-tenancy)
- [Intercepting events](#intercepting-events)
- [Controlling the calendar](#controlling-the-calendar)
- [Render hooks](#render-hooks)
- [Recipes](#recipes)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [Security Vulnerabilities](#security-vulnerabilities)
- [Credits](#credits)
- [License](#license)

# Installation

1. Install the package via composer:

```bash
composer require saade/filament-fullcalendar:"^5.0"
```

2. Add the plugin's styles to your panel's [custom theme](https://filamentphp.com/docs/5.x/styling/overview#creating-a-custom-theme). If the panel does not have a custom theme yet, create one first by following the Filament docs.

```css
@import '../../../../vendor/saade/filament-fullcalendar/resources/css/filament-fullcalendar.css';

@source '../../../../vendor/saade/filament-fullcalendar/resources/views/**/*.blade.php';
```

Then rebuild your assets with `npm run build`.

3. Register the plugin on every panel that shows a calendar. The widget does not work on a panel without it.

```php
use Filament\Panel;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

public function panel(Panel $panel): Panel
{
    return $panel
        // ...
        ->plugin(FilamentFullCalendarPlugin::make());
}
```

# Usage

1. Create a widget and choose the **Custom** type when asked:

```bash
php artisan make:filament-widget CalendarWidget
```

2. Make it extend `Saade\FilamentFullCalendar\Widgets\FullCalendarWidget`, and remove the `$view` property and the Blade view that the command generated:

```php
<?php

namespace App\Filament\Widgets;

use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class CalendarWidget extends FullCalendarWidget
{
    /**
     * FullCalendar calls this whenever it needs events, such as when the
     * user clicks prev/next or switches views.
     *
     * @param  array{start: string, end: string, timezone: string}  $info
     */
    public function fetchEvents(array $info): array
    {
        return [];
    }
}
```

## Returning events

`fetchEvents()` returns an array of [FullCalendar event objects](https://fullcalendar.io/docs/event-object). `$info` holds the visible range, so only the events that overlap it need to be loaded:

```php
<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class CalendarWidget extends FullCalendarWidget
{
    public function fetchEvents(array $info): array
    {
        return Event::query()
            ->where('starts_at', '<', $info['end'])
            ->where('ends_at', '>', $info['start'])
            ->get()
            ->map(fn (Event $event): array => [
                'id' => $event->id,
                'title' => $event->name,
                'start' => $event->starts_at,
                'end' => $event->ends_at,
            ])
            ->all();
    }
}
```

> [!NOTE]
> Compare the range with an overlap test like the one above. Filtering with `starts_at >= start` and `ends_at <= end` hides every event that begins before or ends after the visible range.

> [!NOTE]
> FullCalendar treats the `end` of an event as exclusive. An all-day event that should cover October 6th to 8th needs `2026-10-09` as its `end`.

## The EventData class

`Saade\FilamentFullCalendar\Data\EventData` is a fluent way to build the same event objects:

```php
use App\Filament\Resources\Events\EventResource;
use App\Models\Event;
use Saade\FilamentFullCalendar\Data\EventData;

public function fetchEvents(array $info): array
{
    return Event::query()
        ->where('starts_at', '<', $info['end'])
        ->where('ends_at', '>', $info['start'])
        ->get()
        ->map(fn (Event $event): EventData => EventData::make()
            ->id($event->id)
            ->title($event->name)
            ->start($event->starts_at)
            ->end($event->ends_at))
        ->all();
}
```

| Method | Description |
| ------ | ----------- |
| `id(int \| string $id)` | Identifies the event. Required for the view, edit and delete actions to find the record. |
| `title(string $title)` | The text shown on the event. |
| `start(DateTimeInterface \| string $start)` | When the event begins. |
| `end(DateTimeInterface \| string \| null $end)` | When the event ends (exclusive). |
| `allDay(bool $allDay = true)` | Shows the event in the all-day section, without a time. |
| `url(string $url, bool $shouldOpenUrlInNewTab = false)` | Visits a URL when the event is clicked, instead of opening the view action. |
| `backgroundColor(string $color)`, `borderColor(string $color)`, `textColor(string $color)` | Colors for this event. Any CSS color works. |
| `groupId(int \| string $groupId)` | Events sharing a group are dragged and resized together. |
| `resourceId(int \| string $resourceId)`, `resourceIds(array $resourceIds)` | Associates the event with [resources](https://fullcalendar.io/docs/resource-data). |
| `extendedProps(array $props)` | Your own data, available to the [render hooks](#render-hooks) as `event.extendedProps`. |
| `extraProperties(array $properties)` | Any other [event property](https://fullcalendar.io/docs/event-object), such as `display`, `classNames`, `editable` or `rrule`. |

## Showing the calendar on its own page

The widget can be used anywhere a Filament widget can. To give it a page of its own, create a [custom page](https://filamentphp.com/docs/5.x/navigation/custom-pages) and return the widget from `getHeaderWidgets()`:

```php
<?php

namespace App\Filament\Pages;

use App\Filament\Widgets\CalendarWidget;
use Filament\Pages\Page;

class Calendar extends Page
{
    protected function getHeaderWidgets(): array
    {
        return [
            CalendarWidget::class,
        ];
    }
}
```

Filament adds every discovered widget to the default dashboard. If your dashboard does not define its own `getWidgets()`, keep the calendar off it by registering your widgets explicitly on the panel with `->widgets([...])`.

## Showing the calendar on a resource page

On the edit and view pages of a resource, Filament passes the page's record to its widgets. Declare a `$record` property on the widget to receive it, and use it to load that record's events:

```php
<?php

namespace App\Filament\Resources\Projects\Widgets;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class ProjectCalendarWidget extends FullCalendarWidget
{
    public Model | string | null $model = Task::class;

    public ?Model $record = null;

    public function fetchEvents(array $info): array
    {
        return Task::query()
            ->whereBelongsTo($this->record)
            ->where('starts_at', '<', $info['end'])
            ->where('ends_at', '>', $info['start'])
            ->get()
            ->map(fn (Task $task): array => [
                'id' => $task->id,
                'title' => $task->name,
                'start' => $task->starts_at,
                'end' => $task->ends_at,
            ])
            ->all();
    }
}
```

Return the widget from the page's `getHeaderWidgets()` or `getFooterWidgets()`. The event a user clicked, dragged or resized is kept separately in `$eventRecord`, so `$record` always stays the page's record.

# Configuration

## Plugin methods

Options set on the plugin apply to every calendar in the panel:

```php
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

$panel->plugin(
    FilamentFullCalendarPlugin::make()
        ->selectable()
        ->editable()
        ->timezone('America/Sao_Paulo')
        ->locale('pt-br')
        ->plugins(['multiMonth'])
        ->config([
            'firstDay' => 1,
        ]),
);
```

| Method | Default | Description |
| ------ | ------- | ----------- |
| `selectable(bool $selectable = true)` | `false` | Lets users click or drag over dates to create an event. See [selectable](https://fullcalendar.io/docs/selectable). |
| `editable(bool $editable = true)` | `false` | Lets users drag and resize events. See [editable](https://fullcalendar.io/docs/editable). |
| `timezone(string \| Closure $timezone)` | `config('app.timezone')` | The time zone dates are displayed in. See [timeZone](https://fullcalendar.io/docs/timeZone). |
| `locale(string \| Closure $locale)` | The app locale | The language of the calendar. See [locale](https://fullcalendar.io/docs/locale). |
| `plugins(array $plugins, bool $merge = true)` | `interaction`, `dayGrid`, `timeGrid`, `list`, `moment`, `momentTimezone` | FullCalendar plugins to enable. Pass `false` as the second argument to replace the defaults. |
| `schedulerLicenseKey(?string $key)` | `null` | Your FullCalendar Premium license key. See [Premium plugins and licensing](#premium-plugins-and-licensing). |
| `config(array $config)` | `[]` | Any other [FullCalendar option](https://fullcalendar.io/docs#toc). |

Available plugins: `interaction`, `dayGrid`, `timeGrid`, `list`, `multiMonth`, `rrule`, `moment`, `momentTimezone`, and the premium `scrollGrid`, `timeline`, `adaptive`, `resource`, `resourceDayGrid`, `resourceTimeline`, `resourceTimeGrid`.

## Configuring a single widget

Override `config()` on a widget to set [FullCalendar options](https://fullcalendar.io/docs#toc) for that calendar only. It is merged over the plugin's `config()`:

```php
public function config(): array
{
    return [
        'initialView' => 'timeGridWeek',
        'headerToolbar' => [
            'left' => 'prev,next today',
            'center' => 'title',
            'right' => 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        ],
        'firstDay' => 1,
        'slotMinTime' => '08:00:00',
        'slotMaxTime' => '20:00:00',
        'selectable' => true,
        'editable' => true,
    ];
}
```

Options people ask about most often:

| Goal | Option |
| ---- | ------ |
| Choose which views the toolbar offers | [`headerToolbar`](https://fullcalendar.io/docs/headerToolbar), with view names such as `dayGridMonth`, `timeGridWeek`, `timeGridDay`, `listWeek` or `multiMonthYear` (needs the `multiMonth` plugin) |
| Choose the first view | [`initialView`](https://fullcalendar.io/docs/initialView) |
| Start the week on Monday | [`firstDay`](https://fullcalendar.io/docs/firstDay) |
| Limit the events shown per day | [`dayMaxEvents`](https://fullcalendar.io/docs/dayMaxEvents) |
| Stop users navigating or selecting outside a range, such as the past | [`validRange`](https://fullcalendar.io/docs/validRange), [`selectConstraint`](https://fullcalendar.io/docs/selectConstraint) |
| Highlight working hours | [`businessHours`](https://fullcalendar.io/docs/businessHours) |
| 24-hour times | [`eventTimeFormat`](https://fullcalendar.io/docs/eventTimeFormat), [`slotLabelFormat`](https://fullcalendar.io/docs/slotLabelFormat) |

`config()` is sent to the browser as JSON, so it cannot hold JavaScript functions. For event rendering callbacks, use the [render hooks](#render-hooks).

## Premium plugins and licensing

The standard views (month, week, day, list, multi-month) are free and MIT licensed. The `timeline`, `resource*`, `scrollGrid` and `adaptive` plugins are part of [FullCalendar Premium](https://fullcalendar.io/pricing) and need a license from FullCalendar, which is separate from this package. They are only enabled on a calendar when you add them to `plugins()`.

```php
FilamentFullCalendarPlugin::make()
    ->plugins(['resourceTimeline'])
    ->schedulerLicenseKey(config('services.fullcalendar.license_key'))
```

FullCalendar also publishes keys for evaluation, registered non-profits and open-source projects. Which one applies to you is defined by the [FullCalendar license terms](https://fullcalendar.io/license), so check them before going to production.

# Interacting with actions

The calendar uses [Filament Actions](https://filamentphp.com/docs/5.x/actions/overview) to view, create, edit and delete events. Tell the widget which model it works with and which fields the modals show:

```php
<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class CalendarWidget extends FullCalendarWidget
{
    public Model | string | null $model = Event::class;

    public function form(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('name')
                ->required(),

            Grid::make()
                ->schema([
                    DateTimePicker::make('starts_at')
                        ->required(),

                    DateTimePicker::make('ends_at')
                        ->required(),
                ]),
        ]);
    }
}
```

That is all it takes: a "New event" button appears above the calendar, clicking an event opens it, and the modal offers Edit and Delete. The form does not have to match the FullCalendar event object; add whichever fields your model has.

## Viewing events with an infolist

Clicking an event shows the form with its fields disabled. To show the event with [infolist entries](https://filamentphp.com/docs/5.x/infolists/overview) instead, define `infolist()`:

```php
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

public function infolist(Schema $schema): Schema
{
    return $schema->components([
        TextEntry::make('name'),

        TextEntry::make('starts_at')
            ->dateTime(),

        TextEntry::make('ends_at')
            ->dateTime(),
    ]);
}
```

Creating and editing keep using `form()`.

> [!IMPORTANT]
> Each event returned from `fetchEvents()` needs an `id` that matches the model's key, so the actions can find the record.

## Customizing actions

The actions are regular Filament actions, so they can be customized the same way. Override these methods to change them:

```php
use Filament\Actions\Action;
use Saade\FilamentFullCalendar\Actions;

protected function headerActions(): array
{
    return [
        Actions\CreateAction::make(),
    ];
}

protected function modalActions(): array
{
    return [
        Actions\EditAction::make(),
        Actions\DeleteAction::make(),
    ];
}

protected function viewAction(): Action
{
    return Actions\ViewAction::make();
}
```

> [!IMPORTANT]
> Use the actions from `Saade\FilamentFullCalendar\Actions`, not `Filament\Actions`. They are wired to the widget's model, record and form schema.

## Authorizing actions

When the model has a [policy](https://laravel.com/docs/authorization#creating-policies), the actions follow it:

| Action | Policy method |
| ------ | ------------- |
| View (clicking an event) | `view` |
| Create (the header button and date selection) | `create` |
| Edit (the modal button, dragging and resizing) | `update` |
| Delete | `delete` |

A user who is not allowed does not see the button, and the modal does not open. Models without a policy, or without that policy method, are not restricted. To use different rules, call [`authorize()`](https://filamentphp.com/docs/5.x/actions/overview#authorization) on an action.

Records are looked up through `getEloquentQuery()`. Override it to limit which records a user can open at all:

```php
use Illuminate\Database\Eloquent\Builder;

protected function getEloquentQuery(): Builder
{
    return parent::getEloquentQuery()->whereBelongsTo(auth()->user());
}
```

## Multi-tenancy

In a panel with [tenancy](https://filamentphp.com/docs/5.x/users/tenancy), records are scoped to the current tenant when the model has the panel's tenant ownership relationship. Set `$tenantOwnershipRelationshipName` on the widget if the relationship has another name, or `$isScopedToTenant = false` to turn the scope off:

```php
protected static ?string $tenantOwnershipRelationshipName = 'organization';
```

`fetchEvents()` is your own query, so scope it to the tenant as well.

# Intercepting events

The widget has a method for each calendar interaction. Override one to change what it does, and call the parent to keep the default behavior:

| Method | Called when | Default |
| ------ | ----------- | ------- |
| `onEventClick(array $event)` | An event is clicked | Opens the view action |
| `onEventDrop(array $event, array $oldEvent, array $relatedEvents, array $delta, ?array $oldResource, ?array $newResource)` | An event is dragged to another date | Opens the edit action |
| `onEventResize(array $event, array $oldEvent, array $relatedEvents, array $startDelta, array $endDelta)` | An event is resized | Opens the edit action |
| `onDateSelect(string $start, ?string $end, bool $allDay, ?array $view, ?array $resource)` | A date is clicked or a range is selected | Opens the create action |

`onEventDrop()` and `onEventResize()` return a boolean. Return `true` to move the event back to where it was.

# Controlling the calendar

Call `refreshRecords()` on the widget to make the calendar fetch its events again. The built-in actions already do this after saving.

From any Livewire component or from JavaScript, dispatch these browser events:

| Event | Effect |
| ----- | ------ |
| `filament-fullcalendar--refresh` | Fetches the events again |
| `filament-fullcalendar--prev`, `filament-fullcalendar--next`, `filament-fullcalendar--today` | Navigates |
| `filament-fullcalendar--goto` with `date` | Moves to a date |
| `filament-fullcalendar--view` with `view` | Switches view |

```php
$this->dispatch('filament-fullcalendar--goto', date: '2026-12-01');
$this->dispatch('filament-fullcalendar--view', view: 'timeGridWeek');
```

# Render hooks

FullCalendar's [event render hooks](https://fullcalendar.io/docs/event-render-hooks) `eventClassNames`, `eventContent`, `eventDidMount` and `eventWillUnmount` are available as methods that return JavaScript:

```php
public function eventDidMount(): string
{
    return <<<'JS'
        function ({ event, timeText, isStart, isEnd, isMirror, isPast, isFuture, isToday, el, view }) {
            // Write your custom implementation here
        }
    JS;
}
```

# Recipes

## Filling the form from a date selection

Enable `selectable()`, then fill the create form with the selected dates:

```php
use Filament\Schemas\Schema;
use Saade\FilamentFullCalendar\Actions;

protected function headerActions(): array
{
    return [
        Actions\CreateAction::make()
            ->mountUsing(function (Schema $schema, array $arguments): void {
                $schema->fill([
                    'starts_at' => $arguments['start'] ?? null,
                    'ends_at' => $arguments['end'] ?? null,
                ]);
            }),
    ];
}
```

## Filling the form after dragging or resizing

Enable `editable()`. Dragging or resizing an event opens the edit action, which can be filled with the event's new dates:

```php
use App\Models\Event;
use Filament\Schemas\Schema;
use Saade\FilamentFullCalendar\Actions;

protected function modalActions(): array
{
    return [
        Actions\EditAction::make()
            ->mountUsing(function (Event $record, Schema $schema, array $arguments): void {
                $schema->fill([
                    ...$record->attributesToArray(),
                    'starts_at' => $arguments['event']['start'] ?? $record->starts_at,
                    'ends_at' => $arguments['event']['end'] ?? $record->ends_at,
                ]);
            }),

        Actions\DeleteAction::make(),
    ];
}
```

## Saving extra data when creating

```php
use Saade\FilamentFullCalendar\Actions;

protected function headerActions(): array
{
    return [
        Actions\CreateAction::make()
            ->mutateDataUsing(fn (array $data): array => [
                ...$data,
                'user_id' => auth()->id(),
            ]),
    ];
}
```

## Coloring events

```php
EventData::make()
    ->id($event->id)
    ->title($event->name)
    ->start($event->starts_at)
    ->end($event->ends_at)
    ->backgroundColor($event->status->isConfirmed() ? '#16a34a' : '#f59e0b')
    ->borderColor('transparent')
```

## Event tooltip on hover

```php
public function eventDidMount(): string
{
    return <<<'JS'
        function ({ event, el }) {
            el.setAttribute('x-tooltip.raw', event.title)
        }
    JS;
}
```

## Recurring events

Enable the `rrule` plugin and pass an [`rrule`](https://fullcalendar.io/docs/rrule-plugin) with the event:

```php
EventData::make()
    ->id($event->id)
    ->title($event->name)
    ->extraProperties([
        'rrule' => [
            'freq' => 'weekly',
            'byweekday' => ['mo', 'we'],
            'dtstart' => '2026-10-05T10:00:00',
        ],
        'duration' => '01:00',
    ])
```

## Share your recipes

If you have a recipe to share, please open a PR and add it to this section.

# Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

# Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

# Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

# Credits

-   [Saade](https://github.com/saade)
-   [All Contributors](../../contributors)

# License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

<p align="center">
    <a href="https://github.com/sponsors/saade">
        <img src="https://raw.githubusercontent.com/saade/filament-fullcalendar/5.x/art/sponsor.png" alt="Sponsor Saade" style="width: 100%; max-width: 800px;" />
    </a>
</p>
