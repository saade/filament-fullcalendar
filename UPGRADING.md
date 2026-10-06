# Upgrading

## From 4.x to 5.x

5.x supports the same Filament versions as 4.x (Filament 4 and 5) and needs no changes to how the package is installed:

```bash
composer require saade/filament-fullcalendar:"^5.0"
php artisan filament:assets
```

Start with the changes your widgets need before they load at all, then review the behavior that changed. Each item links to its section below.

**Required, or the widget or its tests fail:**

1. Change the type hint of `fetchEvents()` from `array` to `FetchInfo`. The body can stay as it is. ([details](#fetchevents-and-the-event-handlers-take-info-objects))
2. If you override `onEventClick()`, `onEventDrop()`, `onEventResize()` or `onDateSelect()`, update their signatures. ([details](#fetchevents-and-the-event-handlers-take-info-objects))
3. Replace `$this->record`, `getRecord()` and `resolveRecord()` with their `eventRecord` names. ([details](#the-clicked-event-moved-from-record-to-eventrecord))
4. Rename any method of your own called `getTimezone()`, `getLocale()`, `getPlugins()`, `getSchedulerLicenseKey()`, `goToDate()`, `changeView()`, `next()`, `previous()`, `today()`, `fetchResources()`, `refreshResources()`, `filtersSchema()`, `getTabs()`, `jsCallbacks()`, `toolbarActions()`, `onDatesSet()`, `isDroppable()` or `onExternalDrop()`, and any property called `$filters` or `$activeTab`, since the widget now defines them. ([details](#the-widget-has-filters-and-activetab-properties))
5. In tests, call `handleFetchEvents()`, `handleEventClick()`, `handleEventDrop()`, `handleEventResize()` and `handleDateSelect()` in place of `fetchEvents()` and the `on*` methods, and pass the schema name to form assertions made after an action has finished. ([details](#tests-need-the-schema-name-after-an-action-has-finished))

A widget written for 4.x that overrides none of the handlers and does not read `$this->record` needs only the first item to run on 5.x.

**Behavior to review:** [policies are enforced](#actions-follow-model-policies), [records are scoped to the tenant](#records-are-scoped-to-the-current-tenant), [the default toolbar has view buttons](#the-toolbar-has-view-buttons-by-default), [date selections use the panel's timezone](#date-selection-uses-the-panels-timezone), [`selectable` and `editable` in a widget's `config()` take effect](#selectable-and-editable-in-a-widgets-config-take-effect), [a cancelled drag or resize moves the event back](#dragging-and-resizing), [the calendar refetches after any action, and custom actions receive the clicked event](#the-packages-action-classes-are-deprecated-in-favor-of-filaments), and [a calendar only reacts to its own refresh](#a-calendar-only-reacts-to-its-own-refresh-and-navigation).

**Deprecated, still working in 5.x:** [`getFormSchema()`](#getformschema-is-deprecated-in-favor-of-form) and [the action classes in `Saade\FilamentFullCalendar\Actions`](#the-packages-action-classes-are-deprecated-in-favor-of-filaments).

### Actions follow model policies

The view, create, edit and delete actions now check the model's policy (`view`, `create`, `update`, `delete`) when it has one. Dragging and resizing open the edit action and date selection opens the create action, so they follow it too. In 4.x the calendar did not check policies unless you called `authorize()` yourself.

Users who are not allowed no longer see the button, and the modal does not open. If your users should be able to do more on the calendar than the policy allows, call `authorize()` on the action with your own rule. Models without a policy are not affected.

### Records are scoped to the current tenant

In a panel with tenancy, records are looked up within the current tenant when the model has the panel's tenant ownership relationship. Set `$tenantOwnershipRelationshipName` on the widget if the relationship has another name, or turn the scope off:

```php
protected static bool $isScopedToTenant = false;
```

### The toolbar has view buttons by default

Calendars that do not set `headerToolbar` now show month, week and day buttons, as they did in 3.x. Set `headerToolbar` in `config()` to keep the 4.x toolbar:

```php
public function config(): array
{
    return [
        'headerToolbar' => [
            'left' => 'title',
            'center' => '',
            'right' => 'today prev,next',
        ],
    ];
}
```

### Date selection uses the panel's timezone

The `start` and `end` passed to the create action after a date selection are now in the timezone set with `FilamentFullCalendarPlugin::timezone()`. In 4.x they were always in `config('app.timezone')`. If you did not set a timezone on the plugin, nothing changes.

### `selectable` and `editable` in a widget's `config()` take effect

In 4.x, a widget that set `'selectable' => true` in `config()` let users select dates but did not open the create action. It now does, and `'selectable' => false` on a widget turns selection off even when the panel plugin enables it. The same applies to `editable`.

### The clicked event moved from `$record` to `$eventRecord`

The widget no longer declares a `$record` property. The event a user clicked, dragged or resized is now kept in `$eventRecord`, which leaves `$record` free for the record of a resource page ([#209](https://github.com/saade/filament-fullcalendar/issues/209)).

Rename these wherever your widget uses or overrides them:

| 4.x | 5.x |
| --- | --- |
| `$this->record` | `$this->eventRecord` |
| `getRecord()` | `getEventRecord()` |
| `resolveRecord()` | `resolveEventRecord()` |
| `resolveRecordRouteBinding()` | `resolveEventRecordRouteBinding()` |
| `$recordRouteKeyName`, `getRecordRouteKeyName()` | `$eventRecordRouteKeyName`, `getEventRecordRouteKeyName()` |

If your widget redeclared `$record` to work around the conflict, remove that property, or keep it only if the widget sits on a resource page and should receive the page's record. If you passed the owner record in under another name, such as `CalendarWidget::make(['owner' => $this->record])`, that keeps working.

The `$record` injected into action callbacks, as in `->mountUsing(function (Event $record) { ... })`, is Filament's and has not changed.

### The panel plugin is optional, and its settings can be overridden per widget

The widget no longer fails on a panel that does not register `FilamentFullCalendarPlugin`, or on a page outside a panel. It falls back to the default settings. Filament's own styles and scripts are still needed on such a page.

`getTimezone()`, `getLocale()`, `getPlugins()` and `getSchedulerLicenseKey()` are new public methods on the widget. They return the panel plugin's values unless you override them. If your widget already has a method with one of these names, rename it or make it compatible.

If you published or replaced the widget's Blade view, it should read these from `$this` instead of from `FilamentFullCalendarPlugin::get()`.

### A calendar only reacts to its own refresh and navigation

The widget now has `goToDate()`, `changeView()`, `next()`, `previous()` and `today()` next to `refreshRecords()`, and each of them only affects the calendar it is called on. In 4.x, `refreshRecords()` on one calendar made every calendar on the page fetch its events again.

The `filament-fullcalendar--*` browser events still reach every calendar when dispatched as before. Add `calendar: $livewireId` to target one. If your widget defines its own `next()`, `previous()`, `today()`, `goToDate()` or `changeView()`, rename it or make it compatible.

### The JavaScript is split into several files

The calendar's script is no longer one file. `php artisan filament:assets` publishes the component and the parts it loads on demand, so run it after updating, as after any Filament update. If you referenced `resources/dist/filament-fullcalendar.js` in a build of your own, the component is now `resources/dist/components/filament-fullcalendar-alpine.js` and imports the files next to it by relative path.

### The widget has `$filters` and `$activeTab` properties

The widget now declares `public ?array $filters = []` and `public ?string $activeTab = null` for the new [filter form and tabs](README.md#filtering-events), and the methods `filtersSchema()` and `getTabs()`. If your widget already has a property or method with one of these names, give it the same type and default, or rename it.

### `fetchEvents()` and the event handlers take info objects

`fetchEvents()` now receives a `FetchInfo` object in place of an array. Change the type hint; reading `$info['start']`, `$info['end']` and `$info['timezone']` still returns the same strings as before, so the body can stay as it is.

```php
// 4.x
public function fetchEvents(array $info): array

// 5.x
use Saade\FilamentFullCalendar\Data\FetchInfo;

public function fetchEvents(FetchInfo $info): array
```

`$info->start` and `$info->end` are `CarbonImmutable` instances in the application's timezone, and `$info->overlapping($query, 'starts_at', 'ends_at')` adds the range condition to a query.

The four handlers each receive one object in place of several arrays, and are now `protected`:

| 4.x | 5.x |
| --- | --- |
| `onEventClick(array $event): void` | `onEventClick(EventClickInfo $info): void` |
| `onEventDrop(array $event, array $oldEvent, array $relatedEvents, array $delta, ?array $oldResource, ?array $newResource): bool` | `onEventDrop(EventDropInfo $info): bool` |
| `onEventResize(array $event, array $oldEvent, array $relatedEvents, array $startDelta, array $endDelta): bool` | `onEventResize(EventResizeInfo $info): bool` |
| `onDateSelect(string $start, ?string $end, bool $allDay, ?array $view, ?array $resource): void` | `onDateSelect(DateSelectInfo $info): void`, and the new `onDateClick(DateClickInfo $info): void` |

```php
// 4.x
public function onEventDrop(array $event, array $oldEvent, array $relatedEvents, array $delta, ?array $oldResource, ?array $newResource): bool
{
    $this->record = $this->resolveRecord($event['id']);
    $this->record->update(['starts_at' => $event['start'], 'ends_at' => $event['end']]);

    return false;
}

// 5.x
use Saade\FilamentFullCalendar\Data\EventDropInfo;

protected function onEventDrop(EventDropInfo $info): bool
{
    $this->eventRecord->update(['starts_at' => $info->event->start, 'ends_at' => $info->event->end]);

    return false;
}
```

A click or tap on a single day or time slot now calls `onDateClick()`, and only a selection made by dragging calls `onDateSelect()` directly. The default `onDateClick()` passes the clicked day or slot on to `onDateSelect()`, so an override of `onDateSelect()` still sees both unless you override `onDateClick()` as well.

The record is resolved before the handler runs, so an override no longer has to do it. `$info->event['start']` still returns the raw string the calendar sent.

What the default handlers pass to the actions as `$arguments` has not changed, so `mountUsing()` callbacks that read `$arguments['event']['start']` or `$arguments['start']` keep working. `$arguments['start']` and `$arguments['end']` after a date selection are now `CarbonImmutable` instances.

The browser now calls `handleFetchEvents()`, `handleEventClick()`, `handleEventDrop()`, `handleEventResize()`, `handleDateClick()` and `handleDateSelect()`, which build the info objects and call the methods above. If your tests call the handlers through Livewire, or call `fetchEvents()` with an array, call these instead, with the same arguments as before:

```php
// 4.x
->call('onEventClick', ['id' => $event->id])

// 5.x
->call('handleEventClick', ['id' => $event->id])
```

An event that has no `id` is treated as having no record: clicking it does nothing, and dragging or resizing it moves it back. In 4.x this failed with an "undefined array key" error. Use it for events that are only there to be seen, such as holidays.

### Dragging and resizing

Nothing changes for an existing widget until you opt in, with two exceptions that fix long-standing problems:

- When the edit action that opens after a drag or resize is cancelled, the calendar fetches its events again, so the event returns to where it was. In 4.x it stayed in the dropped position until the next reload.
- When that edit action cannot be opened, for example because the policy denies updating, the event moves back straight away.

New in 5.x: set `$startAttribute` and `$endAttribute` on the widget and a dropped or resized event is saved without a modal. Add `$shouldConfirmEventChanges = true` to open the edit action with the new dates filled in. Either way, a `mountUsing()` callback whose only job was to copy `$arguments['event']['start']` into the form is no longer needed.

### The package's action classes are deprecated in favor of Filament's

In 4.x only the actions in `Saade\FilamentFullCalendar\Actions` knew about the widget's model, the clicked event and the form. Now the widget supplies those to every action, so the calendar uses `Filament\Actions\CreateAction`, `EditAction`, `DeleteAction` and `ViewAction` directly, and a custom action receives the clicked event as `$record`.

The four classes in `Saade\FilamentFullCalendar\Actions` still work in 5.x and will be removed in the next major. To move off them, change the import and add the two things they did for you:

```php
// 4.x
use Saade\FilamentFullCalendar\Actions;

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

// 5.x
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;

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

`cancelParentActions()` closes the view modal after an action run from inside it, and `modalFooterActions()` puts the actions from `modalActions()` in the view modal's footer. If you only override `viewAction()` to tweak it, `parent::viewAction()` already has the footer. `CreateAction` needs nothing extra.

Two things behave differently as a result:

- The calendar refetches its events after any action other than `ViewAction` has run, including your own. In 4.x only the package's actions did this, so you can remove `->after(fn () => $this->refreshRecords())` from custom actions.
- A custom action in `modalActions()` that did not set a record now has the clicked event as its record. If it declared its own `->record()` or `->model()`, that still wins.

### `getFormSchema()` is deprecated in favor of `form()`

Define the fields with `form(Schema $schema): Schema`, as on other Filament components. `getFormSchema()` still works in 5.x and will be removed in the next major.

```php
// 4.x
public function getFormSchema(): array
{
    return [
        TextInput::make('name'),
    ];
}

// 5.x
use Filament\Schemas\Schema;

public function form(Schema $schema): Schema
{
    return $schema->components([
        TextInput::make('name'),
    ]);
}
```

There is also a new `infolist(Schema $schema): Schema`. When it is defined, clicking an event shows its entries instead of the disabled form.

The widget now implements `Filament\Schemas\Contracts\HasSchemas` and uses `InteractsWithSchemas`, in place of the deprecated `HasForms` and `InteractsWithForms`. This only matters if your code type-hints the widget as `HasForms` or calls `getForm()`, `getForms()` or `getCachedForms()` on it.

#### Tests need the schema name after an action has finished

If you test your calendar widget, Filament's form assertions no longer find a default schema once the action has completed. Pass the schema name:

```php
// 4.x
->callMountedAction()
->assertHasNoFormErrors();

// 5.x
->callMountedAction()
->assertHasNoFormErrors([], 'form');
```

Assertions made while the action is still open, such as `->fillForm()` or `->assertHasFormErrors()` right after `->callMountedAction()` fails validation, need no change.

## From 3.x to 4.x

4.x supports Filament 4 and Filament 5. Upgrade Filament first by following the [Filament upgrade guide](https://filamentphp.com/docs/5.x/upgrade-guide), then update this package:

```bash
composer require saade/filament-fullcalendar:"^4.0"
php artisan filament:assets
```

### Requirements

- PHP 8.2 or higher
- Filament 4 or 5

### The stylesheet is now part of your theme

3.x registered a compiled stylesheet for you. 4.x ships CSS that is compiled together with your panel's [custom theme](https://filamentphp.com/docs/5.x/styling/overview#creating-a-custom-theme), so a custom theme is now required. Add these lines to the theme's CSS file and rebuild your assets:

```css
@import '../../../../vendor/saade/filament-fullcalendar/resources/css/filament-fullcalendar.css';

@source '../../../../vendor/saade/filament-fullcalendar/resources/views/**/*.blade.php';
```

The calendar's default colors changed along with this. Events and buttons now use a lighter shade of the panel's primary color with dark text.

### Form components moved in Filament

`getFormSchema()` still returns an array of components, but Filament moved the layout components and replaced the `Form` class:

| 3.x | 4.x |
| --- | --- |
| `Filament\Forms\Components\Grid`, `Section`, `Fieldset`, `Tabs`, `Wizard` | `Filament\Schemas\Components\Grid`, `Section`, `Fieldset`, `Tabs`, `Wizard` |
| `Filament\Forms\Form $form` in action callbacks | `Filament\Schemas\Schema $schema` |
| `->mutateFormDataUsing()` | `->mutateDataUsing()` |

A `mountUsing()` callback that filled the form in 3.x:

```php
Actions\CreateAction::make()
    ->mountUsing(function (Forms\Form $form, array $arguments) {
        $form->fill([
            'starts_at' => $arguments['start'] ?? null,
        ]);
    })
```

becomes this in 4.x:

```php
use Filament\Schemas\Schema;

Actions\CreateAction::make()
    ->mountUsing(function (Schema $schema, array $arguments): void {
        $schema->fill([
            'starts_at' => $arguments['start'] ?? null,
        ]);
    })
```

### Widget internals

- If your widget overrides `$view`, the property is no longer static: use `protected string $view`.
- The `Concerns\InteractsWithHeaderActions` and `Concerns\InteractsWithModalActions` traits were removed in favor of Filament's own. `getCachedModalActions()` is now `getCachedFormActions()`. `headerActions()`, `modalActions()` and `viewAction()` work as before.
