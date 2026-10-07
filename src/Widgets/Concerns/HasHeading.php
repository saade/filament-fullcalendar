<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Js;

trait HasHeading
{
    protected ?string $heading = null;

    protected ?string $description = null;

    /**
     * Shown in the header of the widget. `:title` in it is replaced with the
     * period the calendar is showing, such as "October 2026".
     */
    public function getHeading(): ?string
    {
        return $this->heading;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getHeadingHtml(): ?Htmlable
    {
        return $this->replaceCalendarTitle($this->getHeading());
    }

    public function getDescriptionHtml(): ?Htmlable
    {
        return $this->replaceCalendarTitle($this->getDescription());
    }

    /**
     * The title is only known in the browser, which announces it whenever
     * the calendar moves.
     */
    protected function replaceCalendarTitle(?string $text): ?Htmlable
    {
        if (blank($text)) {
            return null;
        }

        $listener = 'if ($event.detail.calendar === ' . Js::from($this->getId()) . ') title = $event.detail.title';

        $title = '<span wire:ignore x-data="{ title: \'\' }" x-on:filament-fullcalendar--title.window="' . e($listener) . '" x-text="title"></span>';

        return new HtmlString(str_replace(':title', $title, e($text)));
    }
}
