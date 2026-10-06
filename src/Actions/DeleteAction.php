<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\DeleteAction as BaseDeleteAction;

/**
 * @deprecated Use `Filament\Actions\DeleteAction` instead.
 */
class DeleteAction extends BaseDeleteAction
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->cancelParentActions();
    }
}
