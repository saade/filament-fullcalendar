# Upgrading

- [Upgrading](#upgrading)
  - [What to expect](#what-to-expect)
  - [Installing](#installing)
  - [Required changes](#required-changes)
    - [Step 1: Change the type hint of `fetchEvents()`](#step-1-change-the-type-hint-of-fetchevents)
    - [Step 2: Update the event handlers](#step-2-update-the-event-handlers)
    - [Step 3: Rename `$record` to `$eventRecord`](#step-3-rename-record-to-eventrecord)
    - [Step 4: Rename what clashes with the widget's new names](#step-4-rename-what-clashes-with-the-widgets-new-names)
    - [Step 5: Update your tests](#step-5-update-your-tests)
  - [Behavior changes](#behavior-changes)
    - [Actions follow model policies](#actions-follow-model-policies)
    - [Records are scoped to the current tenant](#records-are-scoped-to-the-current-tenant)
    - [The toolbar has view buttons by default](#the-toolbar-has-view-buttons-by-default)
    - [There is no create button by default](#there-is-no-create-button-by-default)
    - [The widget draws the toolbars](#the-widget-draws-the-toolbars)
    - [Date selection uses the panel's timezone](#date-selection-uses-the-panels-timezone)
    - [`selectable` and `editable` in a widget's `config()` take effect](#selectable-and-editable-in-a-widgets-config-take-effect)
    - [Dragging and resizing](#dragging-and-resizing)
    - [A calendar only reacts to its own refresh and navigation](#a-calendar-only-reacts-to-its-own-refresh-and-navigation)
    - [The panel plugin is optional, and its settings can be overridden per widget](#the-panel-plugin-is-optional-and-its-settings-can-be-overridden-per-widget)
    - [The JavaScript is split into several files](#the-javascript-is-split-into-several-files)
    - [A calendar with nothing to show in its modal fails with a message](#a-calendar-with-nothing-to-show-in-its-modal-fails-with-a-message)
  - [Deprecations](#deprecations)
    - [The package's action classes are deprecated in favor of Filament's](#the-packages-action-classes-are-deprecated-in-favor-of-filaments)
    - [`getFormSchema()` is deprecated in favor of `form()`](#getformschema-is-deprecated-in-favor-of-form)


## What to expect
5.x has the same requirements as 4.x (PHP 8.2 or higher, Filament 4 or 5) and is installed the same way. What changes is the widget's API and some of its behavior:

|                                       | What to expect                                                                                                                                                    |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Required changes](#required-changes) | Five steps. A widget that overrides none of the event handlers and does not read `$this->record` needs only the first to load.                                    |
| [Behavior changes](#behavior-changes) | Twelve to review. The most visible: model policies are enforced, the create button is no longer there by default, and the toolbar is drawn with Filament buttons. |
| [Deprecations](#deprecations)         | Two. Both still work in 5.x.                                                                                                                                      |

For what is new in 5.x, see the [changelog](CHANGELOG.md) and the [README](README.md).

## Installing

```bash
composer require saade/filament-fullcalendar:"^5.0"
php artisan filament:assets
```

## Required changes

Without these, a widget or its tests fail. A widget that overrides none of the event handlers and does not read `$this->record` needs only step 1 to load.

| Step                                                        | Change                                          | Applies when                                                                          |
| ----------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| [1](#step-1-change-the-type-hint-of-fetchevents)            | Change the type hint of `fetchEvents()`         | Always                                                                                |
| [2](#step-2-update-the-event-handlers)                      | Update the event handlers                       | You override `onEventClick()`, `onEventDrop()`, `onEventResize()` or `onDateSelect()` |
| [3](#step-3-rename-record-to-eventrecord)                   | Rename `$record` to `$eventRecord`              | You read `$this->record` or call `getRecord()` or `resolveRecord()`                   |
| [4](#step-4-rename-what-clashes-with-the-widgets-new-names) | Rename what clashes with the widget's new names | Your widget has a method or property the widget now defines                           |
| [5](#step-5-update-your-tests)                              | Update your tests                               | You test the widget                                                                   |

---

### Step 1: Change the type hint of `fetchEvents()`

`fetchEvents()` now receives a `FetchInfo` object in place of an array. Change the type hint; reading `$info['start']`, `$info['end']` and `$info['timezone']` still returns the same strings as before, so the body can stay as it is.

```diff
+use Saade\FilamentFullCalendar\Data\FetchInfo;
+
-public function fetchEvents(array $info): array
+public function fetchEvents(FetchInfo $info): array
```

`$info->start` and `$info->end` are `CarbonImmutable` instances in the application's timezone, and `$info->overlapping($query, 'starts_at', 'ends_at')` adds the range condition to a query.

---

### Step 2: Update the event handlers

The four handlers each receive one object in place of several arrays, and are now `protected`:

```diff
-public function onEventClick(array $event): void
+protected function onEventClick(EventClickInfo $info): void

-public function onEventDrop(array $event, array $oldEvent, array $relatedEvents, array $delta, ?array $oldResource, ?array $newResource): bool
+protected function onEventDrop(EventDropInfo $info): bool

-public function onEventResize(array $event, array $oldEvent, array $relatedEvents, array $startDelta, array $endDelta): bool
+protected function onEventResize(EventResizeInfo $info): bool

-public function onDateSelect(string $start, ?string $end, bool $allDay, ?array $view, ?array $resource): void
+protected function onDateSelect(DateSelectInfo $info): void
+protected function onDateClick(DateClickInfo $info): void
```

The info classes are in `Saade\FilamentFullCalendar\Data`. What was an argument is now a property of the object:

```diff
+use Saade\FilamentFullCalendar\Data\EventDropInfo;
+
-public function onEventDrop(array $event, array $oldEvent, array $relatedEvents, array $delta, ?array $oldResource, ?array $newResource): bool
+protected function onEventDrop(EventDropInfo $info): bool
 {
-    $this->record = $this->resolveRecord($event['id']);
-    $this->record->update(['starts_at' => $event['start'], 'ends_at' => $event['end']]);
+    $this->eventRecord->update(['starts_at' => $info->event->start, 'ends_at' => $info->event->end]);

     return false;
 }
```

A click or tap on a single day or time slot now calls `onDateClick()`, and only a selection made by dragging calls `onDateSelect()` directly. The default `onDateClick()` passes the clicked day or slot on to `onDateSelect()`, so an override of `onDateSelect()` still sees both unless you override `onDateClick()` as well.

The record is resolved before the handler runs, so an override no longer has to do it. `$info->event['start']` still returns the raw string the calendar sent.

What the default handlers pass to the actions as `$arguments` has not changed, so `mountUsing()` callbacks that read `$arguments['event']['start']` or `$arguments['start']` keep working. `$arguments['start']` and `$arguments['end']` after a date selection are now `CarbonImmutable` instances.

An event that has no `id` is treated as having no record: clicking it does nothing, and dragging or resizing it moves it back. In 4.x this failed with an "undefined array key" error. Use it for events that are only there to be seen, such as holidays.

---

### Step 3: Rename `$record` to `$eventRecord`

The widget no longer declares a `$record` property. The event a user clicked, dragged or resized is now kept in `$eventRecord`, which leaves `$record` free for the record of a resource page ([#209](https://github.com/saade/filament-fullcalendar/issues/209)).

Rename these wherever your widget uses or overrides them:

| 4.x                                              | 5.x                                                        |
| ------------------------------------------------ | ---------------------------------------------------------- |
| `$this->record`                                  | `$this->eventRecord`                                       |
| `getRecord()`                                    | `getEventRecord()`                                         |
| `resolveRecord()`                                | `resolveEventRecord()`                                     |
| `resolveRecordRouteBinding()`                    | `resolveEventRecordRouteBinding()`                         |
| `$recordRouteKeyName`, `getRecordRouteKeyName()` | `$eventRecordRouteKeyName`, `getEventRecordRouteKeyName()` |

If your widget redeclared `$record` to work around the conflict, remove that property, or keep it only if the widget sits on a resource page and should receive the page's record. If you passed the owner record in under another name, such as `CalendarWidget::make(['owner' => $this->record])`, that keeps working.

The `$record` injected into action callbacks, as in `->mountUsing(function (Event $record) { ... })`, is Filament's and has not changed.

---

### Step 4: Rename what clashes with the widget's new names

The widget defines more methods and properties than it did in 4.x. If your widget already has one with the same name, rename yours, or, where it is meant to be the same thing, give it the same signature, type and default.

- **Methods that drive the calendar:** `getTimezone()`, `getLocale()`, `getPlugins()`, `getSchedulerLicenseKey()`, `goToDate()`, `changeView()`, `next()`, `previous()`, `today()`, `scrollToTime()`, `setOption()`, `refreshResources()`, `applyFilters()`, `resetFilters()`
- **Methods you override to configure it:** `fetchResources()`, `filtersSchema()`, `getTabs()`, `jsCallbacks()`, `eventSources()`, `toolbarActions()`, `toolbarButtons()`, `footerToolbarButtons()`, `tools()`, `createAction()`, `getHeading()`, `getDescription()`, `onDatesSet()`, `onExternalDrop()`, `isDroppable()`, `isReadOnly()`
- **Properties:** `$filters`, `$deferredFilters`, `$activeTab`, `$heading`, `$description`, `$filtersLayout`, `$hasDeferredFilters`, `$pollingInterval`

They belong to the new [filter form and tabs](README.md#filtering-events), [header](README.md#heading-and-header-actions), [toolbars](README.md#toolbar-buttons), [control methods](README.md#controlling-the-calendar) and the other features listed in the [changelog](CHANGELOG.md).

---

### Step 5: Update your tests

**Call the `handle*` methods.** The browser now calls `handleFetchEvents()`, `handleEventClick()`, `handleEventDrop()`, `handleEventResize()`, `handleDateClick()` and `handleDateSelect()`, which build the info objects and call the methods above. If your tests call the handlers through Livewire, or call `fetchEvents()` with an array, call these instead, with the same arguments as before:

```diff
-->call('onEventClick', ['id' => $event->id])
+->call('handleEventClick', ['id' => $event->id])
```

**Pass the schema name after an action has finished.** If you test your calendar widget, Filament's form assertions no longer find a default schema once the action has completed. Pass the schema name:

```diff
 ->callMountedAction()
-->assertHasNoFormErrors();
+->assertHasNoFormErrors([], 'form');
```

Assertions made while the action is still open, such as `->fillForm()` or `->assertHasFormErrors()` right after `->callMountedAction()` fails validation, need no change.

**Optional: move to the new helpers.** 5.x adds [testing helpers](README.md#testing) such as `clickCalendarEvent($record)`, `dropCalendarEvent()` and `selectCalendarDates()`, which replace calls to the `handle*` methods with hand-written payloads.

## Behavior changes

Nothing here stops a widget from loading, but each changes what an existing calendar does:

---

### Actions follow model policies

The view, create, edit and delete actions now check the model's policy (`view`, `create`, `update`, `delete`) when it has one. Dragging and resizing open the edit action and date selection opens the create action, so they follow it too. In 4.x the calendar did not check policies unless you called `authorize()` yourself.

Users who are not allowed no longer see the button, and the modal does not open. If your users should be able to do more on the calendar than the policy allows, call `authorize()` on the action with your own rule. Models without a policy are not affected.

---

### Records are scoped to the current tenant

In a panel with tenancy, records are looked up within the current tenant when the model has the panel's tenant ownership relationship. Set `$tenantOwnershipRelationshipName` on the widget if the relationship has another name, or turn the scope off:

```php
protected static bool $isScopedToTenant = false;
```

---

### The toolbar has view buttons by default

Calendars that do not set `headerToolbar` now show month, week and day buttons, as they did in 3.x. Define `toolbarButtons()` to keep the 4.x toolbar:

```php
protected function toolbarButtons(): array
{
    return [
        'start' => ['title'],
        'end' => ['today', ['prev', 'next']],
    ];
}
```

---

### There is no create button by default

`headerActions()` returns nothing now, so a calendar that relied on the default has lost its "New" button. Selecting dates still opens the create modal. To get the button back:

```php
use Filament\Actions\CreateAction;

protected function headerActions(): array
{
    return [
        CreateAction::make(),
    ];
}
```

---

### The widget draws the toolbars

The header and footer toolbars are made of Filament buttons now, not FullCalendar's. Your `headerToolbar` and `footerToolbar` options keep working, including buttons from `customButtons`, but CSS written for `.fc-toolbar`, `.fc-toolbar-title` or `.fc-button` no longer reaches them. The new elements are `.fi-fc-toolbar`, `.fi-fc-toolbar-heading` and `.fi-fc-tool`. See [Toolbar buttons](README.md#toolbar-buttons) for the new `toolbarButtons()` method.

---

### Date selection uses the panel's timezone

The `start` and `end` passed to the create action after a date selection are now in the timezone set with `FilamentFullCalendarPlugin::timezone()`. In 4.x they were always in `config('app.timezone')`. If you did not set a timezone on the plugin, nothing changes.

---

### `selectable` and `editable` in a widget's `config()` take effect

In 4.x, a widget that set `'selectable' => true` in `config()` let users select dates but did not open the create action. It now does, and `'selectable' => false` on a widget turns selection off even when the panel plugin enables it. The same applies to `editable`.

They are also enforced on the server now. A drop or resize on a calendar that is not `editable`, and a date click or selection on one that is not `selectable`, is refused even when the request is made by hand. If your tests call `handleEventDrop()`, `handleEventResize()`, `handleDateClick()` or `handleDateSelect()` on a widget, make sure the widget or the panel enables the matching setting.

---

### Dragging and resizing

Nothing changes for an existing widget until you opt in, with two exceptions that fix long-standing problems:

- When the edit action that opens after a drag or resize is cancelled, the calendar fetches its events again, so the event returns to where it was. In 4.x it stayed in the dropped position until the next reload.
- When that edit action cannot be opened, for example because the policy denies updating, the event moves back straight away.

New in 5.x: set `$startAttribute` and `$endAttribute` on the widget and a dropped or resized event is saved without a modal. Add `$shouldConfirmEventChanges = true` to open the edit action with the new dates filled in. Either way, a `mountUsing()` callback whose only job was to copy `$arguments['event']['start']` into the form is no longer needed.

---

### A calendar only reacts to its own refresh and navigation

The widget now has `goToDate()`, `changeView()`, `next()`, `previous()` and `today()` next to `refreshRecords()`, and each of them only affects the calendar it is called on. In 4.x, `refreshRecords()` on one calendar made every calendar on the page fetch its events again.

The `filament-fullcalendar--*` browser events still reach every calendar when dispatched as before. Add `calendar: $livewireId` to target one. If your widget defines its own `next()`, `previous()`, `today()`, `goToDate()` or `changeView()`, rename it or make it compatible.

---

### The panel plugin is optional, and its settings can be overridden per widget

The widget no longer fails on a panel that does not register `FilamentFullCalendarPlugin`, or on a page outside a panel. It falls back to the default settings. Filament's own styles and scripts are still needed on such a page.

`getTimezone()`, `getLocale()`, `getPlugins()` and `getSchedulerLicenseKey()` are new public methods on the widget. They return the panel plugin's values unless you override them. If your widget already has a method with one of these names, rename it or make it compatible.

If you published or replaced the widget's Blade view, it should read these from `$this` instead of from `FilamentFullCalendarPlugin::get()`.

---

### The JavaScript is split into several files

The calendar's script is no longer one file. `php artisan filament:assets` publishes the component and the parts it loads on demand, so run it after updating, as after any Filament update. If you referenced `resources/dist/filament-fullcalendar.js` in a build of your own, the component is now `resources/dist/components/filament-fullcalendar-alpine.js` and imports the files next to it by relative path.

---

### A calendar with nothing to show in its modal fails with a message

Opening the create, edit or view modal of a widget that defines no `form()`, and whose model has no resource in the panel, now fails with a message that says so. In 4.x it opened an empty modal.

## Deprecations

These still work in 5.x:

- [The package's action classes are deprecated in favor of Filament's](#the-packages-action-classes-are-deprecated-in-favor-of-filaments)
- [`getFormSchema()` is deprecated in favor of `form()`](#getformschema-is-deprecated-in-favor-of-form)

---

### The package's action classes are deprecated in favor of Filament's

In 4.x only the actions in `Saade\FilamentFullCalendar\Actions` knew about the widget's model, the clicked event and the form. Now the widget supplies those to every action, so the calendar uses `Filament\Actions\CreateAction`, `EditAction`, `DeleteAction` and `ViewAction` directly, and a custom action receives the clicked event as `$record`.

The four classes in `Saade\FilamentFullCalendar\Actions` still work in 5.x and will be removed in the next major. To move off them, change the import and add the two things they did for you:

```diff
-use Saade\FilamentFullCalendar\Actions;
+use Filament\Actions\DeleteAction;
+use Filament\Actions\EditAction;
+use Filament\Actions\ViewAction;

 protected function modalActions(): array
 {
     return [
-        Actions\EditAction::make(),
-        Actions\DeleteAction::make(),
+        EditAction::make()
+            ->cancelParentActions(),
+
+        DeleteAction::make()
+            ->cancelParentActions(),
     ];
 }

 protected function viewAction(): Action
 {
-    return Actions\ViewAction::make();
+    return ViewAction::make()
+        ->modalFooterActions(fn (ViewAction $action): array => [
+            ...$this->getCachedFormActions(),
+            $action->getModalCancelAction(),
+        ]);
 }
```

`cancelParentActions()` closes the view modal after an action run from inside it, and `modalFooterActions()` puts the actions from `modalActions()` in the view modal's footer. If you only override `viewAction()` to tweak it, `parent::viewAction()` already has the footer. `CreateAction` needs nothing extra.

Two things behave differently as a result:

- The calendar refetches its events after any action other than `ViewAction` has run, including your own. In 4.x only the package's actions did this, so you can remove `->after(fn () => $this->refreshRecords())` from custom actions.
- A custom action in `modalActions()` that did not set a record now has the clicked event as its record. If it declared its own `->record()` or `->model()`, that still wins.

---

### `getFormSchema()` is deprecated in favor of `form()`

Define the fields with `form(Schema $schema): Schema`, as on other Filament components. `getFormSchema()` still works in 5.x and will be removed in the next major.

```diff
+use Filament\Schemas\Schema;
+
-public function getFormSchema(): array
+public function form(Schema $schema): Schema
 {
-    return [
+    return $schema->components([
         TextInput::make('name'),
-    ];
+    ]);
 }
```

There is also a new `infolist(Schema $schema): Schema`. When it is defined, clicking an event shows its entries instead of the disabled form.

The widget now implements `Filament\Schemas\Contracts\HasSchemas` and uses `InteractsWithSchemas`, in place of the deprecated `HasForms` and `InteractsWithForms`. This only matters if your code type-hints the widget as `HasForms` or calls `getForm()`, `getForms()` or `getCachedForms()` on it.