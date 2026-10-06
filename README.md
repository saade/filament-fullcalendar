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
  - [Returning models](#returning-models)
  - [Showing the calendar on its own page](#showing-the-calendar-on-its-own-page)
  - [Showing the calendar on a resource page](#showing-the-calendar-on-a-resource-page)
  - [Using the calendar outside a panel](#using-the-calendar-outside-a-panel)
- [Configuration](#configuration)
  - [Plugin methods](#plugin-methods)
  - [Configuring a single widget](#configuring-a-single-widget)
  - [Premium plugins and licensing](#premium-plugins-and-licensing)
- [Interacting with actions](#interacting-with-actions)
  - [Viewing events with an infolist](#viewing-events-with-an-infolist)
  - [Customizing actions](#customizing-actions)
  - [Several models on one calendar](#several-models-on-one-calendar)
  - [Reusing a resource's form and infolist](#reusing-a-resources-form-and-infolist)
  - [Authorizing actions](#authorizing-actions)
  - [Multi-tenancy](#multi-tenancy)
- [Dragging and resizing events](#dragging-and-resizing-events)
- [Filtering events](#filtering-events)
  - [Filter form](#filter-form)
  - [Tabs](#tabs)
  - [Remembering filters](#remembering-filters)
- [Resource views](#resource-views)
  - [Moving events between resources](#moving-events-between-resources)
  - [Refreshing resources](#refreshing-resources)
- [Intercepting events](#intercepting-events)
- [Controlling the calendar](#controlling-the-calendar)
- [JavaScript callbacks](#javascript-callbacks)
  - [Render hooks](#render-hooks)
  - [Toolbar buttons](#toolbar-buttons)
  - [Reacting to navigation](#reacting-to-navigation)
  - [Loading state](#loading-state)
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

3. Register the plugin on the panel to set options for all of its calendars. This step is optional: a calendar on a panel without the plugin uses the defaults.

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

use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class CalendarWidget extends FullCalendarWidget
{
    /**
     * FullCalendar calls this whenever it needs events, such as when the
     * user clicks prev/next or switches views.
     */
    public function fetchEvents(FetchInfo $info): array
    {
        return [];
    }
}
```

## Returning events

`fetchEvents()` returns an array of [FullCalendar event objects](https://fullcalendar.io/docs/event-object). `$info` holds the visible range, so only the events that overlap it need to be loaded. `$info->overlapping()` adds that condition to a query:

```php
<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class CalendarWidget extends FullCalendarWidget
{
    public function fetchEvents(FetchInfo $info): array
    {
        return $info->overlapping(Event::query(), 'starts_at', 'ends_at')
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

`FetchInfo` has these properties:

| Property | Description |
| -------- | ----------- |
| `$info->start` | Start of the visible range, as a `CarbonImmutable` in the application's timezone. |
| `$info->end` | End of the visible range (exclusive), as a `CarbonImmutable` in the application's timezone. |
| `$info->timezone` | The calendar's timezone. |

> [!NOTE]
> If you write the condition yourself, make it an overlap test: the event starts before `$info->end` and ends after `$info->start`. Filtering with `starts_at >= start` and `ends_at <= end` hides every event that begins before or ends after the visible range.

> [!NOTE]
> FullCalendar treats the `end` of an event as exclusive. An all-day event that should cover October 6th to 8th needs `2026-10-09` as its `end`.

## The EventData class

`Saade\FilamentFullCalendar\Data\EventData` is a fluent way to build the same event objects:

```php
use App\Filament\Resources\Events\EventResource;
use App\Models\Event;
use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Data\FetchInfo;

public function fetchEvents(FetchInfo $info): array
{
    return $info->overlapping(Event::query(), 'starts_at', 'ends_at')
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

## Returning models

A model can describe its own event. Implement `Eventable` on it:

```php
use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Contracts\Eventable;
use Saade\FilamentFullCalendar\Data\EventData;

class Event extends Model implements Eventable
{
    public function toCalendarEvent(): EventData
    {
        return EventData::make()
            ->title($this->name)
            ->start($this->starts_at)
            ->end($this->ends_at);
    }
}
```

`toCalendarEvent()` may also return a plain array. `fetchEvents()` can then return the models themselves, as an array, a collection, or a query that the calendar runs:

```php
use Illuminate\Database\Eloquent\Builder;

public function fetchEvents(FetchInfo $info): Builder
{
    return $info->overlapping(Event::query(), 'starts_at', 'ends_at');
}
```

There is no `id` to set: the calendar gives each event one and remembers which record it stands for, so the view, edit and delete actions work without `$model`. Creating still needs `$model`, or a create action with its own `model()`. That reference is signed, so a user cannot swap it in the browser to reach a record the calendar never showed them. Models, `EventData` objects and plain arrays can be mixed in the same result.

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
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class ProjectCalendarWidget extends FullCalendarWidget
{
    public Model | string | null $model = Task::class;

    public ?Model $record = null;

    public function fetchEvents(FetchInfo $info): array
    {
        return $info->overlapping(Task::query()->whereBelongsTo($this->record), 'starts_at', 'ends_at')
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

## Using the calendar outside a panel

The calendar does not need a Filament panel, but it does need Filament. Its buttons, modals and forms are Filament components, so a page that shows it has to load Filament's styles and scripts, the same as any Filament form or action used on its own. Set that up by following [Installing the individual components](https://filamentphp.com/docs/5.x/introduction/installation#installing-the-individual-components) in the Filament docs, and import the calendar's CSS into that stylesheet as described under [Installation](#installation). Then render the widget like any Livewire component:

```blade
@livewire(\App\Filament\Widgets\CalendarWidget::class)
```

Outside a panel there is no plugin to read options from, so set them on the widget with `config()` and the methods under [Configuring a single widget](#configuring-a-single-widget). Policies are checked against the application's default guard.

# Configuration

## Plugin methods

Options set on the plugin are the defaults for every calendar in the panel. Each method except `plugins()` also accepts a closure:

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
| `selectable(bool \| Closure $selectable = true)` | `false` | Lets users click or drag over dates to create an event. See [selectable](https://fullcalendar.io/docs/selectable). |
| `editable(bool \| Closure $editable = true)` | `false` | Lets users drag and resize events. See [editable](https://fullcalendar.io/docs/editable). |
| `timezone(string \| Closure $timezone)` | `config('app.timezone')` | The time zone dates are displayed in. See [timeZone](https://fullcalendar.io/docs/timeZone). |
| `locale(string \| Closure $locale)` | The app locale | The language of the calendar. See [locale](https://fullcalendar.io/docs/locale). |
| `plugins(array $plugins, bool $merge = true)` | `interaction`, `dayGrid`, `timeGrid`, `list`, `moment`, `momentTimezone` | FullCalendar plugins to enable. Pass `false` as the second argument to replace the defaults. |
| `schedulerLicenseKey(string \| Closure \| null $key)` | `null` | Your FullCalendar Premium license key. See [Premium plugins and licensing](#premium-plugins-and-licensing). |
| `config(array \| Closure $config)` | `[]` | Any other [FullCalendar option](https://fullcalendar.io/docs#toc). |

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

The timezone, locale, plugins and license key are methods on the widget, so one calendar can differ from the rest of the panel:

```php
public function getTimezone(): string
{
    return auth()->user()->timezone;
}

public function getLocale(): string
{
    return 'pt-br';
}

public function getPlugins(): array
{
    return [...parent::getPlugins(), 'multiMonth'];
}

public function getSchedulerLicenseKey(): ?string
{
    return config('services.fullcalendar.license_key');
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

`config()` is sent to the browser as JSON, so it cannot hold JavaScript functions. Those go in [`jsCallbacks()`](#javascript-callbacks).

## Premium plugins and licensing

This package is MIT licensed, and so are the standard views it uses: month, week, day, list and multi-month. The `timeline`, `resource*`, `scrollGrid` and `adaptive` plugins belong to [FullCalendar Premium](https://fullcalendar.io/pricing), which is licensed by FullCalendar, not by this package.

### Do I need a license?

| You use | License |
| ------- | ------- |
| Only the standard views | None. Nothing premium is downloaded by the browser. |
| A premium plugin, to try it out | FullCalendar's trial key, `CC-Attribution-NonCommercial-NoDerivatives`. |
| A premium plugin in a commercial or internal product | A [paid license](https://fullcalendar.io/pricing) from FullCalendar, per developer. |
| A premium plugin in a project that qualifies under FullCalendar's non-commercial or open-source terms | The key FullCalendar publishes for that case. |

The [FullCalendar license terms](https://fullcalendar.io/license) decide which row is yours, and they are narrower than they sound, so read them before going to production. This table is a summary, not legal advice.

The premium code is only loaded by a calendar that lists a premium plugin, and the key is yours to provide:

```php
FilamentFullCalendarPlugin::make()
    ->plugins(['resourceTimeline'])
    ->schedulerLicenseKey(config('services.fullcalendar.license_key'))
```

Keep the key in your environment file, not in the repository.

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

The calendar uses Filament's own `CreateAction`, `EditAction`, `DeleteAction` and `ViewAction`. The widget gives every action its model, the clicked event as its record, and the schema from `form()` or `infolist()`, and it refetches the events after any action other than viewing has run.

These are the defaults. Override a method to change its actions:

```php
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;

protected function headerActions(): array
{
    return [
        CreateAction::make(),
    ];
}

protected function modalActions(): array
{
    return [
        EditAction::make()
            ->cancelParentActions(),

        DeleteAction::make()
            ->cancelParentActions(),
    ];
}

protected function viewAction(): Action
{
    return ViewAction::make()
        ->modalFooterActions(fn (ViewAction $action): array => [
            ...$this->getCachedFormActions(),
            $action->getModalCancelAction(),
        ]);
}
```

Two parts of that are easy to lose when you replace an action:

- `modalFooterActions()` is what puts the actions from `modalActions()` in the footer of the view modal. To keep it while changing something else, start from the default: `parent::viewAction()->modalHeading('Event')`.
- `cancelParentActions()` closes the view modal after an action that was run from inside it. Without it, deleting an event leaves the view modal open with nothing to show.

A custom action gets the clicked event as its record:

```php
use App\Models\Event;
use Filament\Actions\Action;
use Filament\Actions\EditAction;

protected function modalActions(): array
{
    return [
        EditAction::make()
            ->cancelParentActions(),

        Action::make('cancelEvent')
            ->requiresConfirmation()
            ->action(fn (Event $record) => $record->cancel())
            ->cancelParentActions(),
    ];
}
```

## Several models on one calendar

When the events come from [models that implement `Eventable`](#returning-models), one calendar can show more than one model. Each clicked, dragged or resized event resolves to a record of its own model, and the actions use that model's label and policy:

```php
public function fetchEvents(FetchInfo $info): array
{
    return [
        ...$info->overlapping(Meeting::query(), 'starts_at', 'ends_at')->get(),
        ...Task::query()->whereBetween('due_at', [$info->start, $info->end])->get(),
    ];
}
```

`form()` and `infolist()` receive a schema that knows the model, so they can branch on it:

```php
public function form(Schema $schema): Schema
{
    return match ($schema->getModel()) {
        Meeting::class => $schema->components([/* ... */]),
        Task::class => $schema->components([/* ... */]),
    };
}
```

`$model` is still the model that the "New" button and a date click create. Add a create action for each of the others:

```php
use Filament\Actions\CreateAction;

protected function headerActions(): array
{
    return [
        CreateAction::make(),
        CreateAction::make('createTask')->model(Task::class),
    ];
}
```

`$startAttribute` and `$endAttribute` apply to every model. When the columns differ, override `getStartAttribute()` and `getEndAttribute()` and decide from `$this->getEventRecord()`.

## Reusing a resource's form and infolist

If the widget defines no `form()`, the calendar uses the form of the model's [resource](https://filamentphp.com/docs/5.x/resources/overview) in the current panel, and the same goes for `infolist()`. A calendar of a model that already has a resource needs neither method. What the widget defines always wins.

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

On a calendar with [several models](#several-models-on-one-calendar), `getEloquentQuery()` covers `$model`. Override `getEventRecordQuery(string $model)` to limit the others.

## Multi-tenancy

In a panel with [tenancy](https://filamentphp.com/docs/5.x/users/tenancy), records are scoped to the current tenant when the model has the panel's tenant ownership relationship. Set `$tenantOwnershipRelationshipName` on the widget if the relationship has another name, or `$isScopedToTenant = false` to turn the scope off:

```php
protected static ?string $tenantOwnershipRelationshipName = 'organization';
```

`fetchEvents()` is your own query, so scope it to the tenant as well.

# Dragging and resizing events

Enable [`editable`](#plugin-methods) to let users drag and resize events. Tell the widget which attributes of the model hold the start and the end, and it saves the new dates as soon as an event is dropped or resized:

```php
protected ?string $startAttribute = 'starts_at';

protected ?string $endAttribute = 'ends_at';
```

The change is checked against the model's `update` policy. If the user is not allowed, nothing is saved and the event moves back.

To let the user review the change first, open the edit action with the new dates filled in. Saving it stores them, and cancelling it moves the event back:

```php
protected bool $shouldConfirmEventChanges = true;
```

Without a `$startAttribute`, the widget cannot know where to put the dates, so it opens the edit action with the stored values and leaves filling in the new ones to you. They are in the action's arguments as `$arguments['event']['start']` and `$arguments['event']['end']`.

Dates are converted from the calendar's timezone to the application's before they are saved. An all-day event is saved from the start of its first day to the end of its last day, so one that covers October 6th to 8th is stored as `2026-10-06 00:00:00` to `2026-10-08 23:59:59`. FullCalendar itself reports the day after the last one as the end, and expects it back that way from `fetchEvents()`:

```php
EventData::make()
    ->allDay()
    ->start($event->starts_at->toDateString())
    ->end($event->ends_at->addDay()->toDateString())
```

# Filtering events

## Filter form

Define `filtersSchema()` to show fields above the calendar. Their state is in `$this->filters`, and the events are fetched again whenever a field changes:

```php
use App\Models\Event;
use App\Models\Room;
use Filament\Forms\Components\Select;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Builder;
use Saade\FilamentFullCalendar\Data\FetchInfo;

public function filtersSchema(Schema $schema): Schema
{
    return $schema->components([
        Select::make('room_id')
            ->label('Room')
            ->options(fn (): array => Room::query()->pluck('name', 'id')->all()),
    ]);
}

public function fetchEvents(FetchInfo $info): Builder
{
    return $info->overlapping(Event::query(), 'starts_at', 'ends_at')
        ->when($this->filters['room_id'] ?? null, fn (Builder $query, $room) => $query->where('room_id', $room));
}
```

## Tabs

Define `getTabs()` to filter with tabs, the same way as on the [list page of a resource](https://filamentphp.com/docs/5.x/resources/listing-records#using-tabs-to-filter-the-records):

```php
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

public function getTabs(): array
{
    return [
        'all' => Tab::make(),
        'confirmed' => Tab::make()
            ->modifyQueryUsing(fn (Builder $query) => $query->where('is_confirmed', true)),
        'tentative' => Tab::make()
            ->badge(fn (): int => Event::query()->where('is_confirmed', false)->count())
            ->modifyQueryUsing(fn (Builder $query) => $query->where('is_confirmed', false)),
    ];
}
```

When `fetchEvents()` returns a query, the active tab is applied to it for you. When it returns an array, apply the tab yourself with `$this->modifyQueryWithActiveTab($query)`, or read `$this->activeTab`. The first tab is active by default; override `getDefaultActiveTab()` to choose another.

## Remembering filters

The filters and the active tab are kept in the session, so they are still set when the user comes back. To start fresh on every visit:

```php
protected bool $persistsFiltersInSession = false;
```

# Resource views

The resource views (`resourceTimeline`, `resourceTimeGrid`, `resourceDayGrid`) lay events out by room, person, machine or whatever else your events belong to. They are [premium plugins](#premium-plugins-and-licensing) of FullCalendar.

Return the resources from `fetchResources()`, and give every event the id of its resource:

```php
<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use App\Models\Room;
use Illuminate\Database\Eloquent\Model;
use Saade\FilamentFullCalendar\Data\EventData;
use Saade\FilamentFullCalendar\Data\FetchInfo;
use Saade\FilamentFullCalendar\Data\ResourceData;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;

class RoomTimelineWidget extends FullCalendarWidget
{
    public Model | string | null $model = Booking::class;

    protected ?string $startAttribute = 'starts_at';

    protected ?string $endAttribute = 'ends_at';

    protected ?string $resourceAttribute = 'room_id';

    public function getPlugins(): array
    {
        return [...parent::getPlugins(), 'resourceTimeline'];
    }

    public function getSchedulerLicenseKey(): ?string
    {
        return config('services.fullcalendar.license_key');
    }

    public function config(): array
    {
        return [
            'initialView' => 'resourceTimelineWeek',
            'headerToolbar' => [
                'left' => 'prev,next today',
                'center' => 'title',
                'right' => 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth',
            ],
            'resourceAreaHeaderContent' => 'Rooms',
        ];
    }

    public function fetchResources(?FetchInfo $info = null): array
    {
        return Room::query()
            ->orderBy('name')
            ->get()
            ->map(fn (Room $room): ResourceData => ResourceData::make()
                ->id($room->id)
                ->title($room->name))
            ->all();
    }

    public function fetchEvents(FetchInfo $info): array
    {
        return $info->overlapping(Booking::query(), 'starts_at', 'ends_at')
            ->get()
            ->map(fn (Booking $booking): EventData => EventData::make()
                ->id($booking->id)
                ->title($booking->title)
                ->start($booking->starts_at)
                ->end($booking->ends_at)
                ->resourceId($booking->room_id))
            ->all();
    }
}
```

The plugins and the license key can also be set once for the panel, as shown in [Premium plugins and licensing](#premium-plugins-and-licensing). While you evaluate the premium views, FullCalendar's trial key `CC-Attribution-NonCommercial-NoDerivatives` removes the license warning.

The resources are sent with the page, so they cost no extra request. `fetchResources()` may also return plain arrays in the shape of FullCalendar's [resource object](https://fullcalendar.io/docs/resource-object).

| Method | Description |
| ------ | ----------- |
| `id(int \| string $id)` | Identifies the resource. Events point to it with `resourceId()`. |
| `title(string $title)` | The text shown for the resource. |
| `parentId(int \| string \| null $parentId)` | Nests the resource under another one. |
| `children(array $children)` | Nested resources, as `ResourceData` objects or arrays. |
| `eventColor(string $color)`, `eventBackgroundColor(string $color)`, `eventBorderColor(string $color)`, `eventTextColor(string $color)` | Colors for the events of this resource. |
| `extendedProps(array $props)` | Your own data, such as the values of extra [resource columns](https://fullcalendar.io/docs/resourceAreaColumns). |
| `extraProperties(array $properties)` | Any other [resource property](https://fullcalendar.io/docs/resource-object), such as `eventOverlap` or `eventConstraint`. |

## Moving events between resources

With `$resourceAttribute` set next to [`$startAttribute`](#dragging-and-resizing-events), an event dragged to another resource is saved with that resource's id. The resource a date was clicked or selected in is in `$info->resource` in `onDateClick()` and `onDateSelect()`, and in the `resource` argument of the create action.

## Refreshing resources

`refreshRecords()` fetches the events again, not the resources. Call `refreshResources()` when the resources themselves changed:

```php
$this->refreshResources();
```

If the resources depend on the dates being shown, turn on [`refetchResourcesOnNavigate`](https://fullcalendar.io/docs/refetchResourcesOnNavigate) in `config()`. `fetchResources()` then receives the visible range as `$info` each time the user navigates, at the cost of one more request per navigation.

# Intercepting events

The widget has a method for each calendar interaction. Each one receives an object describing what happened. Override one to change what it does, and call the parent to keep the default behavior:

| Method | Called when | Default |
| ------ | ----------- | ------- |
| `onEventClick(EventClickInfo $info)` | An event is clicked | Opens the view action |
| `onEventDrop(EventDropInfo $info): bool` | An event is dragged to another date or resource | [Saves the new dates, or opens the edit action](#dragging-and-resizing-events) |
| `onEventResize(EventResizeInfo $info): bool` | An event is resized | [Saves the new dates, or opens the edit action](#dragging-and-resizing-events) |
| `onDateClick(DateClickInfo $info)` | A single day or time slot is clicked or tapped | Calls `onDateSelect()` with that day or slot |
| `onDateSelect(DateSelectInfo $info)` | A range is selected by dragging | Opens the create action |

`onEventDrop()` and `onEventResize()` return a boolean. Return `true` to move the event back to where it was.

Date clicks and selections are only reported when the calendar is [`selectable`](#plugin-methods).

```php
use Saade\FilamentFullCalendar\Data\EventDropInfo;

protected function onEventDrop(EventDropInfo $info): bool
{
    if ($info->event->start->isPast()) {
        return true;
    }

    $this->eventRecord->update([
        'starts_at' => $info->event->start,
        'ends_at' => $info->event->end,
    ]);

    return false;
}
```

When the widget has a `$model`, the event's record is already in `$this->eventRecord` by the time these methods run.

The info classes are in `Saade\FilamentFullCalendar\Data`:

| Class | Properties |
| ----- | ---------- |
| `EventClickInfo` | `event` |
| `EventDropInfo` | `event`, `oldEvent`, `relatedEvents`, `delta`, `oldResource`, `newResource` |
| `EventResizeInfo` | `event`, `oldEvent`, `relatedEvents`, `startDelta`, `endDelta` |
| `DateClickInfo` | `date`, `allDay`, `selection`, `view`, `resource` |
| `DateSelectInfo` | `start`, `end`, `allDay`, `view`, `resource` |

`event` and `oldEvent` are `EventInfo` objects with `id`, `title`, `start`, `end`, `allDay` and `extendedProps`. Dates are `CarbonImmutable` instances in the calendar's timezone, and the deltas are `CarbonInterval` instances. For an all-day selection, `DateSelectInfo::$end` is the end of the last selected day. `DateClickInfo::$selection` is the clicked day or slot as a `DateSelectInfo`.

# Controlling the calendar

The widget has methods to drive its calendar. Call them from the widget itself, for example in an action, or from the browser with `wire:click`:

| Method | Effect |
| ------ | ------ |
| `refreshRecords()` | Fetches the events again. The built-in actions already do this after they run. |
| `goToDate(DateTimeInterface \| string $date)` | Moves to a date |
| `changeView(string $view)` | Switches view, for example to `timeGridWeek` |
| `next()`, `previous()`, `today()` | Navigates |

```php
use Filament\Actions\Action;

protected function headerActions(): array
{
    return [
        Action::make('thisWeek')
            ->action(function (): void {
                $this->changeView('timeGridWeek');
                $this->today();
            }),
    ];
}
```

These only affect the calendar they are called on, so several calendars on one page stay independent.

Other Livewire components and JavaScript can reach a calendar through browser events. An event without a `calendar` reaches every calendar on the page; pass a widget's Livewire id as `calendar` to reach only that one:

| Event | Effect |
| ----- | ------ |
| `filament-fullcalendar--refresh` | Fetches the events again |
| `filament-fullcalendar--prev`, `filament-fullcalendar--next`, `filament-fullcalendar--today` | Navigates |
| `filament-fullcalendar--goto` with `date` | Moves to a date |
| `filament-fullcalendar--view` with `view` | Switches view |

```php
$this->dispatch('filament-fullcalendar--refresh');
$this->dispatch('filament-fullcalendar--goto', date: '2026-12-01');
```

# JavaScript callbacks

Many FullCalendar options take a function, which `config()` cannot carry because it is sent as JSON. Return those from `jsCallbacks()`, keyed by the option's name, as JavaScript:

```php
public function jsCallbacks(): array
{
    return [
        'selectAllow' => <<<'JS'
            (info) => info.start >= new Date()
        JS,
        'dayCellClassNames' => <<<'JS'
            ({ date }) => [0, 6].includes(date.getUTCDay()) ? ['is-weekend'] : []
        JS,
    ];
}
```

Any option from the [FullCalendar docs](https://fullcalendar.io/docs) works, and these are merged over `config()`.

The calendar handles `eventClick`, `eventDrop`, `eventResize`, `dateClick`, `select`, `datesSet` and `loading` itself. A callback of yours for one of these runs first, and returning `false` from it stops the calendar from doing its part, such as opening the modal:

```php
'eventClick' => <<<'JS'
    ({ event }) => event.extendedProps.isLocked ? false : undefined
JS,
```

> [!WARNING]
> These strings are printed into the page as code. Never build them from data a user can change, such as an event title. Pass data through `extendedProps` and read it in the callback.

## Render hooks

FullCalendar's [event render hooks](https://fullcalendar.io/docs/event-render-hooks) `eventClassNames`, `eventContent`, `eventDidMount` and `eventWillUnmount` also have methods of their own:

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

## Toolbar buttons

`toolbarActions()` turns [Filament actions](https://filamentphp.com/docs/5.x/actions/overview) into buttons of the calendar's toolbar. Put the action's name where the button should go:

```php
use Filament\Actions\Action;
use Filament\Forms\Components\DatePicker;

public function config(): array
{
    return [
        'headerToolbar' => [
            'left' => 'prev,next today goToDate',
            'center' => 'title',
            'right' => 'dayGridMonth,dayGridWeek',
        ],
    ];
}

protected function toolbarActions(): array
{
    return [
        Action::make('goToDate')
            ->label('Go to date')
            ->schema([
                DatePicker::make('date')->required(),
            ])
            ->action(fn (array $data) => $this->goToDate($data['date'])),
    ];
}
```

The button shows the action's label, and clicking it runs the action with its modal, form and confirmation like any other. An action that is hidden, disabled or not authorized gets no button.

A button can also run JavaScript in the browser or open a page, without a request to the server:

```php
Action::make('print')
    ->alpineClickHandler('window.print()'),

Action::make('help')
    ->url('https://example.com/help', shouldOpenInNewTab: true),
```

The JavaScript is evaluated by Alpine on the calendar's element, so `$wire` and the component's `calendar` (the FullCalendar instance) are in scope. This button shows and hides the weekend columns with FullCalendar's own API:

```php
Action::make('toggleWeekends')
    ->label('Weekends')
    ->alpineClickHandler("calendar.setOption('weekends', ! calendar.getOption('weekends'))"),
```

## Reacting to navigation

Define `onDatesSet()` to be told on the server when the user navigates or switches views:

```php
use Saade\FilamentFullCalendar\Data\DatesSetInfo;

protected function onDatesSet(DatesSetInfo $info): void
{
    // $info->view          'dayGridMonth'
    // $info->title         'October 2026'
    // $info->currentStart  first day of the month, week or day being shown
    // $info->currentEnd    the day after its last one
    // $info->start         start of the visible range, which in a month view begins in the month before
    // $info->end           end of the visible range (exclusive)
}
```

The browser only reports this when the method exists, since it costs a request on every navigation. For JavaScript that needs no server, use a `datesSet` entry in `jsCallbacks()`.

## Loading state

While events are being fetched, the calendar has `aria-busy="true"` and its stylesheet dims the view. Style `.filament-fullcalendar[aria-busy='true']` to change that, or add a `loading` entry to `jsCallbacks()`.

# Recipes

## Filling the form from a date selection

Enable `selectable()`, then fill the create form with the selected dates:

```php
use Filament\Actions\CreateAction;
use Filament\Schemas\Schema;

protected function headerActions(): array
{
    return [
        CreateAction::make()
            ->mountUsing(function (Schema $schema, array $arguments): void {
                $schema->fill([
                    'starts_at' => $arguments['start'] ?? null,
                    'ends_at' => $arguments['end'] ?? null,
                ]);
            }),
    ];
}
```

## Opening a page when a date is clicked

Override `onDateClick()` to do something other than opening the create action, such as going to a resource's create page:

```php
use App\Filament\Resources\Events\EventResource;
use Saade\FilamentFullCalendar\Data\DateClickInfo;

protected function onDateClick(DateClickInfo $info): void
{
    $this->redirect(EventResource::getUrl('create', [
        'date' => $info->date->toDateString(),
    ]));
}
```

Dragging over several days still opens the create action, through `onDateSelect()`.

## Saving extra data when creating

```php
use Filament\Actions\CreateAction;

protected function headerActions(): array
{
    return [
        CreateAction::make()
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

## Remembering the view and date

Store them in [`onDatesSet()`](#reacting-to-navigation) and open the calendar with them:

```php
use Saade\FilamentFullCalendar\Data\DatesSetInfo;

public function config(): array
{
    return [
        'initialView' => session('calendar.view', 'dayGridMonth'),
        'initialDate' => session('calendar.date'),
    ];
}

protected function onDatesSet(DatesSetInfo $info): void
{
    session([
        'calendar.view' => $info->view,
        'calendar.date' => $info->currentStart->toDateString(),
    ]);
}
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
