# Changelog

All notable changes to `filament-fullcalendar` will be documented in this file.

## v5.0.0-beta1 - 2026-10-08

> [!IMPORTANT]
This is the first beta release of Filament FullCalendar v5.

At this point, I’m not planning any more breaking changes unless something comes up that really requires one. In practice, that means the API and upgrade path should now be pretty close to what will ship in 5.0.0.

You can start testing it now, including in production if you're comfortable running a beta. And please do test it.

I’ve tried to keep breaking changes to the minimum necessary so upgrading from v4 is as painless as possible, while still giving the plugin room to move forward.

To make upgrading even easier, v5 now ships with an **automated upgrade script** that rewrites most v4 calendar widgets and their tests to the v5 API using Rector, without needing the application to boot.

```bash
composer require saade/filament-fullcalendar:"^5.0"
composer require rector/rector:^2.5 --dev --no-scripts
vendor/bin/filament-fullcalendar-v5

```
The first Composer command may end with an error, and that's expected. The package is installed first, then Laravel's package discovery may try to load your existing v4 widgets before they've been upgraded. Installing Rector with `--no-scripts` prevents that discovery from running again, and the upgrade script can then do its work.

The script handles the main mechanical changes required for v5, including handler signatures, record APIs, deprecated actions, `getFormSchema()`, test calls, and optionally preserving the create button behavior from v4. You can also run it with `--dry-run` first to see what would change.

It is still an upgrade assistant, not a replacement for reading the upgrade guide. When it finishes, it prints a checklist of anything that may still need manual attention.

As always, if you run into anything, please open an issue. PRs are also very welcome against the `5.x` branch.

If the community doesn't uncover any major issues, I’m planning to release v5 stable in roughly a week.

And finally, thank you to everyone who has kept using, contributing to, and believing in Filament FullCalendar despite the, let's call it, *less-than-ideal* maintenance cycle over the last while. 💛

v5 is a big step forward, and I'm really happy to finally get it into your hands.

### Filament FullCalendar v5 is here

After a long time of incremental improvements, fixes, feature requests, and more than a few things I wanted to rethink, **Filament FullCalendar v5 is ready**.

This is much more than a compatibility release.

The goal with v5 was to make FullCalendar feel less like something embedded inside Filament and much more like something that actually **belongs there**.

The calendar now follows Filament's design language, uses Filament's actions and schemas more deeply, understands your models better, and gives you considerably more control without having to reach for custom JavaScript or Livewire workarounds.

In short: **the calendar is now a much better Filament citizen.**

#### It finally feels like Filament

One of the biggest changes in v5 is something you'll notice immediately.

The calendar has been redesigned to better match the rest of a Filament application.

Toolbars now use Filament buttons. Events look like Filament badges. Colors work with Filament's color system. Headers, dropdowns, dark mode, list views and the `+more` popover all received the same treatment.

The result is a calendar that feels much less like a third-party component dropped into your panel.

And the integration goes beyond styling.

You can now give the widget a heading, description and header actions just like other Filament components, while the calendar toolbar itself can be composed from navigation buttons, views, filters, Filament actions and your own custom tools.

#### Filters and tabs are now first-class features

This has been one of the most requested areas of the plugin.

In v5, calendars can finally use **Filament-style filters and tabs**.

Filters are built using familiar Filament form fields and can appear in a dropdown, modal, slide-over, above the calendar or below it.

Tabs work much like resource list tabs, including badges and query modification.

Both can also remember their state between visits.

So things like:

- filtering appointments by employee
- switching between confirmed and pending bookings
- showing events for a specific department
- filtering resources, categories or locations

can now be part of the calendar itself instead of something you have to build around it.

#### Your models can be calendar events

Another major change in v5 is a much tighter relationship between your application models and the calendar.

Models can now describe how they should appear on a calendar themselves.

That means a calendar can work directly with your models instead of forcing every project to repeatedly transform them into event arrays.

Even better, **one calendar can contain events backed by different models**.

The plugin keeps track of which record each event represents and uses the appropriate model, policy, label and actions when the event is opened.

Forms and infolists can also come directly from your Filament resources when you don't need something calendar-specific.

The end result is considerably less duplication between your resources and your calendar.

#### Actions are just Filament actions

Creating, viewing, editing and deleting events now uses Filament's own action system.

That means the same concepts you already use throughout a Filament application also apply to the calendar.

Custom actions can live alongside the defaults, authorization works through model policies, and actions automatically receive the relevant record.

After an action changes something, the calendar refreshes itself.

It sounds simple, but it removes a surprising amount of special handling that used to exist around calendar interactions.

#### Dragging events can actually update your records

Drag-and-drop has also been significantly improved.

Tell the calendar which model attributes represent the start and end of an event and it can automatically persist changes when an event is moved or resized.

If you don't want changes to happen immediately, you can require confirmation and let the user review the updated dates in the edit action first.

Users can also drag items **from outside the calendar** onto it.

That opens up workflows like an unscheduled task list beside a calendar where users simply drag work onto the day or person responsible for it.

Resource calendars can do the same thing when moving events between rooms, employees, machines or other resources.

#### Resource calendars are much easier to build

For applications using FullCalendar's resource views, v5 introduces a proper PHP API for providing resources.

Rooms, employees, vehicles, machines or anything else represented by a resource can now be returned directly from the widget.

The calendar understands when an event moves between resources and can persist that relationship automatically.

Resource data can also be refreshed independently from events.

#### Bring other calendars into yours

v5 can display external calendars alongside your application's events.

That includes **iCalendar feeds** and **Google Calendar**.

So a booking calendar could, for example, display public holidays, a shared company calendar or another external schedule without having to import those events into your own database.

External calendars remain separate and read-only.

Private iCalendar addresses are fetched by your application rather than exposed directly to the browser.

#### More control, less JavaScript

There are now PHP methods for navigating and controlling the calendar directly.

You can move to a date, change views, navigate forward or backward, scroll to a time, change options and refresh events or resources.

For cases where JavaScript really is the right tool, v5 also provides a cleaner way to register FullCalendar callbacks.

The idea isn't to hide FullCalendar.

It's to make the common things feel natural in Filament while still giving you access to FullCalendar when you need it.

#### Better defaults for real applications

There are a lot of smaller additions in v5 that become very useful once a calendar is running in production.

Calendars can now be made completely read-only.

You can choose a different initial view on mobile devices.

Events can refresh automatically on an interval.

Calendars correctly resize when they are first rendered inside hidden tabs or modals.

SPA navigation is handled properly.

Multiple calendars on the same page can be controlled independently.

And loading events now has a proper loading state.

#### Security and tenancy are part of the calendar now

v5 also tightens several areas that previously required developers to be more careful themselves.

Filament model policies are respected by the calendar's view, create, edit and delete actions.

Applications using Filament tenancy automatically scope calendar records to the current tenant.

And operations such as moving, resizing or selecting dates are validated on the server as well as in the browser.

These aren't particularly flashy features, but they're important ones.

#### A better experience for package authors and tests too

There's now a dedicated Artisan generator for creating FullCalendar widgets.

It can ask for your panel, resource, model and date attributes and generate a working starting point for you.

v5 also introduces dedicated Livewire testing helpers for common calendar interactions such as:

- finding events
- clicking events
- dragging events
- selecting dates
- testing calendar actions

The package itself now has a test suite running against both Filament 4 and Filament 5 as well.

#### Smaller where it matters

The JavaScript bundle has also been split so calendars only download features they actually use.

Premium views, recurrence support, locales and external calendar integrations don't need to be included when your calendar doesn't use them.

For a standard calendar, the measured gzipped bundle dropped from roughly **204 KB to 155 KB**.

#### And a lot of things were fixed along the way

v5 includes fixes for issues around SPA navigation, recurring events, timezones, hidden calendars, all-day events, date selection, external event sources, dark mode, event serialization and more.

Some of these were long-standing edge cases.

Others came directly from issues and discussions opened by people using the plugin in real applications.

Thank you to everyone who reported them, tested fixes, opened pull requests, shared workarounds or simply explained where the plugin was getting in their way.

#### This is the direction going forward

Filament FullCalendar started as a relatively small integration between Filament and FullCalendar.

Over time, people started building much more serious scheduling interfaces with it.

v5 reflects that.

Instead of treating FullCalendar as a JavaScript component with a Filament wrapper around it, the plugin now tries to connect the two ecosystems properly.

Filament provides the actions, forms, infolists, policies, colors, filters, tabs and application structure.

FullCalendar provides an extremely capable calendar engine.

Filament FullCalendar should be the bridge between them.

And v5 is a pretty big step in that direction.

#### Compatibility

Filament FullCalendar v5 supports:

- **Filament 4 and 5**
- **FullCalendar 6**
- **PHP 8.2+**

```bash
composer require saade/filament-fullcalendar:"^5.0"
php artisan filament:assets

```
If you're upgrading an existing application from v3 or v4, **please read the upgrade guide before updating**. v5 changes some existing behavior and APIs in addition to adding all of the features above.

Full documentation, examples and the complete changelog are available in the repository.

Thanks to everyone who has been using the plugin, reporting issues and suggesting improvements.

I'm excited to finally get v5 into your hands.

## 5.x

### Changed

These change the behavior of existing calendars. See the [upgrade guide](UPGRADING.md).

- Moving, resizing and selecting are refused on the server when the calendar is not `editable` or `selectable`. Before, those settings only stopped the calendar itself from asking.
- `editable`, `selectable` and `droppable` set in the panel plugin's `config()` array are now respected.
- The JavaScript is split into parts that are downloaded on demand. A calendar with the standard views loads 155 KB gzipped, down from 204 KB, or 93 KB without the `moment` plugins. The premium plugins, `rrule` and the locales are only downloaded by calendars that use them. Run `php artisan filament:assets` after updating.
- The view, create, edit and delete actions follow the model's policy when it has one. In 4.x, any user who could see the widget could open, edit or delete any record of the model by id unless `authorize()` was called on each action.
- Records are scoped to the current tenant in panels with tenancy.
- The toolbar shows the month, week and day view buttons by default, as it did in 3.x.
- The calendar has no header actions by default. The create button is gone unless `headerActions()` returns a `CreateAction`; selecting dates still opens the create modal.
- The header and footer toolbars are drawn by the widget with Filament buttons, in place of FullCalendar's own. `headerToolbar`, `footerToolbar` and `customButtons` are still read for their layout. CSS that targets `.fc-toolbar` or `.fc-button` no longer applies to them.
- The calendar is framed like a Filament table, with rounded corners, a ring and a header band for the day names. Button labels are capitalised, the title is smaller and semibold, the "+more" link uses the primary color, and its popover looks like a Filament dropdown. The list view's day rows and the resource timeline's header use the same header band, and the navigation arrows and the popover's close button are Filament's icons.
- Events look like Filament badges: a tinted background with colored text, in the panel's primary color unless the event has its own. Before, they were filled with the primary color.
- FullCalendar's `color` property on an event, set in a plain array or through `extraProperties()`, only takes the name of a Filament color, such as `success`. A CSS color there now throws. Use `backgroundColor`, `borderColor` and `textColor` for CSS colors.
- Date selection uses the timezone configured on the panel plugin.
- `selectable` and `editable` set in a widget's `config()` are respected by the date click and selection handlers.
- The calendar refetches its events after any action other than viewing has run, not only after the package's own actions.
- `fetchEvents()` receives a `FetchInfo` object, and `onEventClick()`, `onEventDrop()`, `onEventResize()` and `onDateSelect()` each receive a typed info object in place of several arrays. See the upgrade guide for the new signatures.
- `refreshRecords()` and the new control methods only affect their own calendar, so several calendars on one page no longer react together.
- Cancelling the edit action after a drag or resize moves the event back, and so does a drag or resize the user is not allowed to make.
- The clicked event moved from `$record` to `$eventRecord`, so the widget can be used on a resource page without overwriting the page's record ([#209](https://github.com/saade/filament-fullcalendar/issues/209)). `getRecord()`, `resolveRecord()` and the related helpers were renamed to match.

### Fixed

- In dark mode, the popover that lists a day's hidden events had a white background and an unreadable title.
- The popover that lists a day's hidden events stayed on top of the modal opened from it.
- Dragging an event from one calendar onto another calendar that accepts dropped items threw an error in the browser.
- `$info->view` in `onDateClick()` and `onDateSelect()` held only the view's type and a large block of internals. It now holds `type`, `title`, `currentStart`, `currentEnd`, `activeStart` and `activeEnd`.
- `EventData::allDay(false)` was not sent, so an event with a date-only start could not be shown as timed.
- Custom locale objects in the `locales` key of `config()` were discarded.
- A `plugins` key in `config()` stopped the calendar from rendering. Its names are now loaded like the ones from `plugins()`.
- A `timeZone` set in `config()` changed the calendar in the browser while the server kept reading dates in the panel's timezone. Both use it now.
- An event from another event source that happened to have an id was looked up in the widget's `$model`, which could open or move the wrong record, or fail when no record matched. Only the widget's own events are looked up now.
- Dragging or resizing one occurrence of a recurring event wrote that occurrence's dates to the record, moving the start of the whole series. A recurring event now moves back unless the widget handles it, and `$info->event->isRecurring` tells the handlers which is which.
- An all-day event dragged to a time slot was saved with its new start and its old end. It is now saved with the default duration the calendar shows, an hour unless `defaultTimedEventDuration` says otherwise.
- A calendar created while hidden, in a closed modal or an inactive tab, rendered collapsed. It now sizes itself when it becomes visible.
- Clicking an event with no record behind it, such as a holiday, opened a broken modal ([#238](https://github.com/saade/filament-fullcalendar/discussions/238)). It now does nothing.
- An event with a `url` caused a full page load in panels with SPA mode. It now navigates like any other link.
- Filling the create form from a date selection discarded the fields' `default()` values ([#207](https://github.com/saade/filament-fullcalendar/issues/207)).

### Added

- `color()` on an event or an event source, and `eventColor()` on a resource, color the events like a Filament badge of that color, in light and dark mode.
- `backgroundColor()` and `borderColor()` on an event source.
- `$startAttribute` and `$endAttribute` make the widget fill the create form from a date selection and save a dragged or resized event's new dates, and `$shouldConfirmEventChanges` opens the edit action with them filled in.
- `goToDate()`, `changeView()`, `next()`, `previous()` and `today()` drive the calendar from PHP.
- Models that implement `Eventable` describe their own event, and `fetchEvents()` can return them as an array, a collection or a query. One calendar can show several models: each event resolves to a record of its own model through a signed reference, with that model's label and policy.
- When the widget defines no `form()` or `infolist()`, the one from the model's resource is used.
- `EventData::title()` takes `html: true` to render the title as HTML.
- `scrollToTime()` and `setOption()` join the methods that drive the calendar from PHP.
- `changeView()` takes an optional date to go to at the same time.
- `$info->event->source` and `$info->event->resourceIds` tell the event handlers which event source an event came from and which resources it is shown in.
- `$isReadOnly` makes a calendar read-only: events can be viewed, and nothing can be created, changed, moved or deleted.
- `php artisan make:filament-fullcalendar-widget` creates a working calendar widget, optionally for a model.
- `vendor/bin/filament-fullcalendar-v5` applies the changes of the upgrade guide to your widgets and their tests with Rector.
- Testing helpers for Livewire tests, such as `clickCalendarEvent()`, `dropCalendarEvent()`, `selectCalendarDates()` and `assertCalendarHasEvent()`.
- `$pollingInterval` makes the calendar fetch its events again at an interval.
- `mobileInitialView` in `config()` opens the calendar in a different view on narrow screens.
- `EventData::tooltip()` shows a tooltip when an event is hovered.
- `eventSources()` shows read-only events from iCalendar feeds and public Google Calendars next to the calendar's own. iCalendar feeds are read by the application and cached, so private feed addresses stay out of the page.
- Items from outside the calendar can be dragged onto it with the `draggable` Blade component and `droppable` in `config()`. A dropped record is saved with its new dates, and any other item opens the create action.
- `jsCallbacks()` passes any FullCalendar option that takes a function, such as `selectAllow` or `dayCellClassNames`. A callback for something the calendar handles itself runs first and can cancel it by returning `false`.
- `$heading` and `$description` give the widget's card a header, where `:title` stands for the period the calendar is showing. Header actions are shown in that header, as on a table.
- `toolbarButtons()` lays out the toolbar by tool name, like the toolbar of Filament's rich editor. The calendar comes with tools for navigation, the title, each view and the filters. `toolbarActions()` adds Filament actions as tools, `tools()` adds `CalendarTool`s of your own, and `ToolbarButtonGroup` puts several tools in a dropdown. `footerToolbarButtons()` does the same for a toolbar under the calendar.
- `onDatesSet()` is called with the view and its dates when the user navigates, and the calendar is marked `aria-busy` and dimmed while it fetches events.
- `filtersSchema()` filters the calendar with form fields, laid out like the filters of a Filament table: in a dropdown opened by a filter button in the calendar's toolbar by default, or in a modal, above or below the calendar, with the same layout, column, width, deferral and action settings. The applied state is in `$this->filters`.
- `getTabs()` shows tabs above the calendar, like the ones on a resource's list page. Filters and the active tab are remembered in the session, and changing either fetches the events again.
- `fetchResources()` returns the resources of a resource view from PHP, as arrays or `ResourceData` objects. They are sent with the page, `refreshResources()` fetches them again, and `$resourceAttribute` saves the resource an event was dragged to.
- The timezone, locale, plugins and license key can be overridden per widget, and the panel plugin's setters accept closures.
- The calendar works on a panel that does not register the plugin and on Filament pages outside a panel ([#67](https://github.com/saade/filament-fullcalendar/issues/67)).
- `onDateClick()` is called for a click or tap on a single day or time slot, separately from `onDateSelect()` for a dragged selection.
- `FetchInfo::overlapping()` limits a query to the records that overlap the visible range.
- `form(Schema $schema)` defines the fields for creating and editing, and `infolist(Schema $schema)` the entries shown when viewing an event.
- Filament's own `CreateAction`, `EditAction`, `DeleteAction` and `ViewAction`, and custom actions, get their model, record and schema from the widget. The calendar now uses Filament's actions by default.

### Deprecated

- `getFormSchema()`. Define `form()` instead.
- The action classes in `Saade\FilamentFullCalendar\Actions`. Use the ones from `Filament\Actions`.

## Unreleased

### Fixed

- A single click on a selectable calendar opened the create action twice.
- The calendar and its window listeners were never cleaned up, so they piled up on every visit in SPA mode ([#311](https://github.com/saade/filament-fullcalendar/issues/311)).
- `EventData` with a `DateTime` object was serialised as an object instead of an ISO 8601 string, and an array of `EventData` objects rendered nothing unless `toArray()` was called on each.
- `EventData` threw when `id`, `title` or `start` was not set.
- `$record` could be read before it was initialised ([#131](https://github.com/saade/filament-fullcalendar/issues/131)).
- `schedulerLicenseKey()` threw when given `null`.
- The JavaScript dependencies could not be installed because of a `moment-timezone` peer conflict, so the bundle could not be rebuilt.

### Changed

- The bundle is built with FullCalendar 6.1.21 and no longer ships a source map.

### Added

- A test suite, running against Filament 4 and 5.
- An [upgrade guide](https://github.com/saade/filament-fullcalendar/blob/4.x/UPGRADING.md) from 3.x.

## v4.0.0 - 2026-10-02

- Support for Filament 4 and Filament 5, and for Laravel 13.
- The stylesheet is now compiled with your panel's custom theme. See the [upgrade guide](https://github.com/saade/filament-fullcalendar/blob/4.x/UPGRADING.md).

## v1.9.2 - 2023-07-11

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.9.1...v1.9.2

## v1.9.1 - 2023-07-06

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.9.0...v1.9.1

## v1.9.0 - 2023-07-05

### What's Changed

- add esbuild by @saade in https://github.com/saade/filament-fullcalendar/pull/94
- enable/ disable plugins by @saade in https://github.com/saade/filament-fullcalendar/pull/95

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.8.0...v1.9.0

## v1.8.0 - 2023-06-21

### What's Changed

- Add rrule plugin by @Larry-Home in https://github.com/saade/filament-fullcalendar/pull/90

### New Contributors

- @Larry-Home made their first contribution in https://github.com/saade/filament-fullcalendar/pull/90

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.7.1...v1.8.0

## v1.7.1 - 2023-05-23

### What's Changed

- Bump dependabot/fetch-metadata from 1.3.6 to 1.4.0 by @dependabot in https://github.com/saade/filament-fullcalendar/pull/76
- Fix responsiveness issue by @mansoorkhan96 in https://github.com/saade/filament-fullcalendar/pull/78
- Bump dependabot/fetch-metadata from 1.4.0 to 1.5.0 by @dependabot in https://github.com/saade/filament-fullcalendar/pull/83
- Add editEventForm->fill() if canView() by @miguelurtado in https://github.com/saade/filament-fullcalendar/pull/85
- Added support for Slideover on modal by @billmn in https://github.com/saade/filament-fullcalendar/pull/82
- Added support for UUID as Event ID by @billmn in https://github.com/saade/filament-fullcalendar/pull/81

### New Contributors

- @mansoorkhan96 made their first contribution in https://github.com/saade/filament-fullcalendar/pull/78
- @miguelurtado made their first contribution in https://github.com/saade/filament-fullcalendar/pull/85
- @billmn made their first contribution in https://github.com/saade/filament-fullcalendar/pull/82

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.7.0...v1.7.1

## v1.7.0 - 2023-02-15

### What's Changed

- L10 support by @saade
- Fix missing syntax error by @chengkangzai in https://github.com/saade/filament-fullcalendar/pull/65
- added resource-timeline plugin by @steveadamsfixedit in https://github.com/saade/filament-fullcalendar/pull/66

### New Contributors

- @chengkangzai made their first contribution in https://github.com/saade/filament-fullcalendar/pull/65
- @steveadamsfixedit made their first contribution in https://github.com/saade/filament-fullcalendar/pull/66

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.6.0...v1.7.0

## v1.6.0 - 2022-09-25

### What's Changed

- v1.6.0 by @saade in https://github.com/saade/filament-fullcalendar/pull/55

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.5.1...v1.6.0

## v.1.5.1 - 2022-09-18

### What's Changed

- Revert "Allow event's model to have relationship" by @saade in https://github.com/saade/filament-fullcalendar/pull/53

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.5.0...v1.5.1

## v1.5.0 - 2022-09-18

### What's Changed

- Add View Modal and corresponding canView authorization. by @tiagof in https://github.com/saade/filament-fullcalendar/pull/46
- Avoids error when full-calendar timezone is 'local' by @tiagof in https://github.com/saade/filament-fullcalendar/pull/48
- Add ability for custom modal titles and button labels by @flord22 in https://github.com/saade/filament-fullcalendar/pull/52
- Fixes wrong permissions check. by @tiagof in https://github.com/saade/filament-fullcalendar/pull/51
- feat: save state by @fauzie811 in https://github.com/saade/filament-fullcalendar/pull/50
- Allow event's model to have relationship by @tiagof in https://github.com/saade/filament-fullcalendar/pull/47

### New Contributors

- @tiagof made their first contribution in https://github.com/saade/filament-fullcalendar/pull/46
- @flord22 made their first contribution in https://github.com/saade/filament-fullcalendar/pull/52
- @fauzie811 made their first contribution in https://github.com/saade/filament-fullcalendar/pull/50

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.4.0...v1.5.0

## v1.4.0 - 2022-08-04

### What's Changed

- eventResize by @invaders-xx in https://github.com/saade/filament-fullcalendar/pull/40
- BREAKING CHANGE: Rename `$record` and `$record_id` to `$event` and `$event_id` by @invaders-xx in https://github.com/saade/filament-fullcalendar/pull/41
- feat: Livewire event triggered for cancelled modal by @ashleyhood in https://github.com/saade/filament-fullcalendar/pull/30

### New Contributors

- @invaders-xx made their first contribution in https://github.com/saade/filament-fullcalendar/pull/40

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.3.1...v1.4.0

## v1.3.1 - 2022-07-20

### What's Changed

- fix: use array_merge instead of spread to support php versions < 8.1 by @saade in https://github.com/saade/filament-fullcalendar/pull/31
- refactor: property type hints by @ashleyhood in https://github.com/saade/filament-fullcalendar/pull/29

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.3.0...v1.3.1

## v1.3.0 - 2022-07-13

### What's Changed

- feat: change modal label by @ashleyhood in https://github.com/saade/filament-fullcalendar/pull/28

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.2.1...v1.2.2

## v1.2.1 - 2022-07-05

### What's Changed

- Bump dependabot/fetch-metadata from 1.3.1 to 1.3.3 by @dependabot in https://github.com/saade/filament-fullcalendar/pull/26
- fix: stop event flash when using `fetchEvents` method by @ashleyhood in https://github.com/saade/filament-fullcalendar/pull/27

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.2.0...v1.2.1

## v1.2.0 - 2022-07-03

### What's Changed

- fix: correct onEventDrop parameter order by @ashleyhood in https://github.com/saade/filament-fullcalendar/pull/20
- feat: change modal size by @ashleyhood in https://github.com/saade/filament-fullcalendar/pull/19
- Fix/fetch events cache by @wychoong in https://github.com/saade/filament-fullcalendar/pull/25
- Fix/store record id for edit by @wychoong in https://github.com/saade/filament-fullcalendar/pull/18

### New Contributors

- @ashleyhood made their first contribution in https://github.com/saade/filament-fullcalendar/pull/20

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.1.0...v1.2.0

## v1.1.0 - 2022-07-01

### What's Changed

- feat: open modal on calendar click by @wychoong in https://github.com/saade/filament-fullcalendar/pull/16
- feat: lazy loading the events data by @wychoong in https://github.com/saade/filament-fullcalendar/pull/17

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v1.0.0...v1.1.0

## v1.0.0 - 2022-06-27

### What's Changed

- feature: Modals for creating / editing events by @saade in https://github.com/saade/filament-fullcalendar/pull/11

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v0.3.0...v1.0.0

## v0.3.0 - 2022-06-27

### What's Changed

- Update FiresEvents.php by @wychoong in https://github.com/saade/filament-fullcalendar/pull/8
- feat: allow opening or not events in a new tab by @saade in https://github.com/saade/filament-fullcalendar/pull/12
- feat: refresh calendar events by @saade in https://github.com/saade/filament-fullcalendar/pull/13
- fix: convert laravel locale to fullcalendar compatible locale by @saade in https://github.com/saade/filament-fullcalendar/pull/14

### New Contributors

- @wychoong made their first contribution in https://github.com/saade/filament-fullcalendar/pull/8

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v0.2.1...v0.3.0

## v0.2.1 - 2022-02-21

## What's Changed

- fix: calender disappearing on livewire update by @saade in https://github.com/saade/filament-fullcalendar/pull/3

## New Contributors

- @saade made their first contribution in https://github.com/saade/filament-fullcalendar/pull/3

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v0.2.0...v0.2.1

## v0.2.0 - 2022-02-09

L9 update ❤️  Enjoy

**Full Changelog**: https://github.com/saade/filament-fullcalendar/compare/v0.1.0...v0.2.0

## v0.1.0 - 2022-01-27

Initial release of `saade/filament-fullcalendar`. Enjoy! 🎉

## 1.0.0 - 202X-XX-XX

- initial release
