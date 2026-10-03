# Upgrading

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
