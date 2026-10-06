<?php

namespace Saade\FilamentFullCalendar\Actions;

use Filament\Actions\EditAction as BaseEditAction;

/**
 * @deprecated Use `Filament\Actions\EditAction` instead.
 */
class EditAction extends BaseEditAction
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->cancelParentActions();
    }
}
