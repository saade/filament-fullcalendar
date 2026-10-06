<?php

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;

const ASSET_PACKAGE = 'saade/filament-fullcalendar';

function calendarComponentAsset(): AlpineComponent
{
    return collect(FilamentAsset::getAlpineComponents([ASSET_PACKAGE]))->sole();
}

it('registers the component and every file it can load', function () {
    $scripts = collect(FilamentAsset::getScripts([ASSET_PACKAGE]))
        ->map(fn (Js $asset): string => $asset->getId())
        ->sort()
        ->values()
        ->all();

    $built = collect(glob(realpath(__DIR__ . '/../../resources/dist') . '/*.js'))
        ->map(fn (string $path): string => basename($path, '.js'))
        ->sort()
        ->values()
        ->all();

    expect(calendarComponentAsset()->getId())->toBe('filament-fullcalendar-alpine')
        ->and($built)->not->toBeEmpty()
        ->and($scripts)->toBe($built);
});

it('does not put the on-demand files on every page', function () {
    expect(collect(FilamentAsset::getScripts([ASSET_PACKAGE]))->every(fn (Js $asset): bool => $asset->isLoadedOnRequest()))
        ->toBeTrue();
});

it('publishes the files where the imports of the component point', function () {
    $component = calendarComponentAsset();

    preg_match_all('#\.\./[\w.-]+\.js#', file_get_contents($component->getPath()), $matches);

    $imports = array_unique($matches[0]);

    expect($imports)->not->toBeEmpty();

    $publishedScripts = collect(FilamentAsset::getScripts([ASSET_PACKAGE]))
        ->map(fn (Js $asset): string => $asset->getRelativePublicPath())
        ->all();

    foreach ($imports as $import) {
        expect(file_exists(dirname($component->getPath()) . '/' . $import))->toBeTrue();

        $publishedImport = dirname($component->getRelativePublicPath(), 2) . '/' . basename($import);

        expect($publishedScripts)->toContain($publishedImport);
    }
});
