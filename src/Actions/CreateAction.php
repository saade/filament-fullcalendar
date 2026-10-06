<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\CreateAction as BaseCreateAction;

/**
 * @deprecated Use `Filament\Actions\CreateAction` instead.
 */
class CreateAction extends BaseCreateAction
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->cancelParentActions();
    }
}
