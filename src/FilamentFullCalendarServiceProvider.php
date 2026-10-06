<?php

namespace Saade\FilamentFullCalendar;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Asset;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
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
            ->hasRoute('web');
    }

    public function packageBooted(): void
    {
        FilamentAsset::register(
            $this->getAssets(),
            $this->getAssetPackageName(),
        );
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
        $directory = __DIR__ . '/../resources/dist';

        // The component imports these by relative path, so they have to be
        // published under the names they were built with.
        return [
            AlpineComponent::make('filament-fullcalendar-alpine', "{$directory}/components/filament-fullcalendar-alpine.js"),
            ...array_map(
                fn (string $path): Js => Js::make(basename($path, '.js'), $path)->loadedOnRequest(),
                glob("{$directory}/*.js") ?: [],
            ),
        ];
    }
}
