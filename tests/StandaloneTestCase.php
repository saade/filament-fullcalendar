<?php

namespace Saade\FilamentFullCalendar\Tests;

use Saade\FilamentFullCalendar\Tests\Fixtures\BarePanelProvider;
use Saade\FilamentFullCalendar\Tests\Fixtures\TestPanelProvider;

class StandaloneTestCase extends TestCase
{
    protected function getPackageProviders($app): array
    {
        return array_values(array_diff(parent::getPackageProviders($app), [
            TestPanelProvider::class,
            BarePanelProvider::class,
        ]));
    }
}
