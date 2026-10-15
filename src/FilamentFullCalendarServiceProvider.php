<?php

namespace Saade\FilamentFullCalendar;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Asset;
use Filament\Support\Facades\FilamentAsset;
use Livewire\Features\SupportTesting\Testable;
use Saade\FilamentFullCalendar\Commands\MakeFullCalendarWidgetCommand;
use Saade\FilamentFullCalendar\Testing\TestsCalendar;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentFullCalendarServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-fullcalendar';

    public static string $viewNamespace = 'filament-fullcalendar';

    public function configurePackage(Package $package): void
    {
        $package
            ->name(static::$name)
            ->hasViews()
            ->hasRoute('web')
            ->hasCommand(MakeFullCalendarWidgetCommand::class);
    }

    public function packageBooted(): void
    {
        FilamentAsset::register(
            $this->getAssets(),
            $this->getAssetPackageName(),
        );

        Testable::mixin(new TestsCalendar);
    }

    protected function getAssetPackageName(): ?string
    {
        return 'saade/filament-fullcalendar';
    }

    /**
     * @return array<Asset>
     */
    protected function getAssets(): array
    {
        return [
            AlpineComponent::make('filament-fullcalendar-alpine', __DIR__ . '/../resources/dist/filament-fullcalendar.js'),
        ];
    }
}
