<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

use Filament\Actions\Action;
use Saade\FilamentFullCalendar\Data\DatesSetInfo;

class CallbacksCalendarWidget extends EventCalendarWidget
{
    public ?string $exported = null;

    public ?string $lastView = null;

    public bool $canPrint = false;

    public string $callbackName = 'selectAllow';

    public function eventDidMount(): string
    {
        return <<<'JS'
            function ({ el }) { el.dataset.mounted = 'yes' };
        JS;
    }

    public function jsCallbacks(): array
    {
        return [
            $this->callbackName => 'function (info) { return info.start >= new Date() }',
            'dayCellClassNames' => '({ isPast }) => isPast ? ["is-past"] : []',
        ];
    }

    protected function toolbarActions(): array
    {
        return [
            Action::make('export')
                ->label('Export')
                ->tooltip('Download the month')
                ->action(fn () => $this->exported = 'done'),

            Action::make('print')
                ->alpineClickHandler('window.print()')
                ->visible(fn (): bool => $this->canPrint),

            Action::make('docs')
                ->url('https://example.com/docs', shouldOpenInNewTab: true)
                ->visible(fn (): bool => $this->canPrint),
        ];
    }

    protected function onDatesSet(DatesSetInfo $info): void
    {
        $this->lastView = "{$info->view} | {$info->title} | {$info->currentStart->toDateTimeString()} | {$info->start->toDateTimeString()}";
    }
}
