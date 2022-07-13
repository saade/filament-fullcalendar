<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

trait CanManageModals
{
    protected string $modalLabel = 'Event';

    protected string $modalWidth = 'sm';

    protected function getModalLabel(): string
    {
        return $this->modalLabel;
    }

    protected function getModalWidth(): string
    {
        return $this->modalWidth;
    }
}
