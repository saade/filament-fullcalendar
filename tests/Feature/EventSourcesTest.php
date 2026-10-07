<?php

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Http;
use Livewire\Livewire;
use Saade\FilamentFullCalendar\Tests\Fixtures\EventCalendarWidget;
use Saade\FilamentFullCalendar\Tests\Fixtures\SourcesCalendarWidget;

const ICS = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:1\r\nDTSTART:20261012\r\nSUMMARY:Holiday\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n";

function calendarEventSources(): array
{
    return Livewire::test(SourcesCalendarWidget::class)->instance()->getEventSources();
}

it('has no event sources unless they are defined', function () {
    expect(Livewire::test(EventCalendarWidget::class)->instance()->getEventSources())->toBe([]);
});

it('describes a Google Calendar as a source that cannot be edited', function () {
    expect(calendarEventSources()[0])->toBe([
        'googleCalendarId' => 'holidays@group.v.calendar.google.com',
        'id' => 'holidays',
        'editable' => false,
        'className' => ['fc-event-gray'],
    ]);
});

it('keeps the address of an iCalendar feed out of the page', function () {
    $source = calendarEventSources()[1];

    expect($source['format'])->toBe('ics')
        ->and($source['url'])->toStartWith(url('filament-fullcalendar/icalendar-feed'))
        ->and($source['url'])->not->toContain('token-123');

    Livewire::test(SourcesCalendarWidget::class)->assertDontSee('token-123');
});

it('passes plain arrays through', function () {
    expect(calendarEventSources()[2])->toBe(['url' => '/feeds/custom.json', 'backgroundColor' => 'red', 'textColor' => '#fff']);
});

it('serves the feed from this application and reads it once while it is cached', function () {
    Http::fake(['example.com/*' => Http::response(ICS)]);

    $url = calendarEventSources()[1]['url'];

    $this->get($url)
        ->assertOk()
        ->assertHeader('Content-Type', 'text/calendar; charset=utf-8')
        ->assertSee('SUMMARY:Holiday');

    $this->get($url)->assertOk();

    Http::assertSentCount(1);
    Http::assertSent(fn ($request): bool => $request->url() === 'https://example.com/private/token-123/team.ics');
});

it('does not serve an address it did not hand out', function () {
    Http::fake();

    $this->get(route('filament-fullcalendar.icalendar-feed', ['feed' => 'made-up']))->assertNotFound();
    $this->get(route('filament-fullcalendar.icalendar-feed', ['feed' => base64_encode('https://example.com/x.ics')]))->assertNotFound();

    Http::assertNothingSent();
});

it('fails when the feed cannot be read, without caching the failure', function () {
    Http::fake(['example.com/*' => Http::sequence()->push('', 500)->push(ICS)]);

    $url = calendarEventSources()[1]['url'];

    $this->get($url)->assertStatus(500);
    $this->get($url)->assertOk()->assertSee('SUMMARY:Holiday');
});

it('reads the Google Calendar API key from the plugin', function () {
    expect(Livewire::test(EventCalendarWidget::class)->instance()->getGoogleCalendarApiKey())->toBeNull();

    filament('filament-fullcalendar')->googleCalendarApiKey(fn (): string => 'key-123');

    expect(Livewire::test(EventCalendarWidget::class)->instance()->getGoogleCalendarApiKey())->toBe('key-123');

    filament('filament-fullcalendar')->googleCalendarApiKey(null);
});
