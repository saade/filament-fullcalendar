<?php

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Facades\FilamentAsset;
use Saade\FilamentFullCalendar\FilamentFullCalendarPlugin;

const ASSET_PACKAGE = 'saade/filament-fullcalendar';

it('registers the component as the only script', function () {
    $component = collect(FilamentAsset::getAlpineComponents([ASSET_PACKAGE]))->sole();

    expect($component)->toBeInstanceOf(AlpineComponent::class)
        ->and($component->getId())->toBe('filament-fullcalendar-alpine')
        ->and(FilamentAsset::getScripts([ASSET_PACKAGE]))->toBeEmpty();
});

it('builds the styles of every theme and palette', function () {
    $css = file_get_contents(__DIR__ . '/../../resources/dist/fullcalendar.css');

    foreach (FilamentFullCalendarPlugin::THEMES as $theme => $palettes) {
        foreach ($palettes as $palette) {
            expect($css)->toContain(".fi-fc-palette-{$theme}-{$palette} {");
        }
    }
});

it('builds the component as one file that loads no other', function () {
    $dist = realpath(__DIR__ . '/../../resources/dist');

    $component = collect(FilamentAsset::getAlpineComponents([ASSET_PACKAGE]))->sole()->getPath();

    expect(glob("{$dist}/{,*/}*.js", GLOB_BRACE))->toBe([realpath($component)])
        ->and(file_get_contents($component))->not->toMatch('#import\(\s*["\'][./]#');
});
