<?php

use Composer\InstalledVersions;
use Rector\Config\RectorConfig;
use Rector\Renaming\Rector\Name\RenameClassRector;
use Saade\FilamentFullCalendar\Upgrade\Rector;

return static function (RectorConfig $rectorConfig): void {
    $rectorConfig->skip([
        dirname((new ReflectionClass(InstalledVersions::class))->getFileName(), 2),
    ]);

    $rectorConfig->rule(Rector\FetchEventsFetchInfoRector::class);
    $rectorConfig->rule(Rector\EventHandlerInfoRector::class);
    $rectorConfig->rule(Rector\EventRecordRector::class);
    $rectorConfig->rule(Rector\FormSchemaRector::class);
    $rectorConfig->rule(Rector\FilamentActionsRector::class);
    $rectorConfig->rule(Rector\HandleMethodCallRector::class);

    if (getenv('FILAMENT_FULLCALENDAR_KEEP_CREATE_BUTTON')) {
        $rectorConfig->rule(Rector\KeepCreateButtonRector::class);
    }

    // Whatever still names the package's own action classes, such as a type
    // hint, after the widgets have been moved to Filament's.
    $rectorConfig->ruleWithConfiguration(RenameClassRector::class, [
        'Saade\\FilamentFullCalendar\\Actions\\CreateAction' => 'Filament\\Actions\\CreateAction',
        'Saade\\FilamentFullCalendar\\Actions\\EditAction' => 'Filament\\Actions\\EditAction',
        'Saade\\FilamentFullCalendar\\Actions\\DeleteAction' => 'Filament\\Actions\\DeleteAction',
        'Saade\\FilamentFullCalendar\\Actions\\ViewAction' => 'Filament\\Actions\\ViewAction',
    ]);
};
