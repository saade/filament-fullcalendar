# Upgrading

## From 4.x to 5.x

5.x supports the same Filament versions as 4.x (Filament 4 and 5) and needs no changes to how the package is installed:

```bash
composer require saade/filament-fullcalendar:"^5.0"
php artisan filament:assets
```

It changes six behaviors. Check each one against your calendars.

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
