<?php

namespace Saade\FilamentFullCalendar\Http\Controllers;

use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Http;
use JsonException;

/**
 * Serves an iCalendar feed from this application's own address. A browser
 * cannot read most feeds directly, because their servers do not allow
 * requests from other sites, and going through here also keeps a feed's
 * private address out of the page.
 */
class ICalendarFeedController
{
    public function __invoke(Request $request): Response
    {
        try {
            $feed = json_decode(Crypt::decryptString((string) $request->query('feed')), associative: true, flags: JSON_THROW_ON_ERROR);
        } catch (DecryptException | JsonException) {
            abort(404);
        }

        $url = $feed['url'];

        $calendar = Cache::remember(
            'filament-fullcalendar.icalendar-feed.' . sha1($url),
            now()->addMinutes($feed['cacheFor'] ?? 15),
            fn (): string => Http::timeout(10)->get($url)->throw()->body(),
        );

        return response($calendar, headers: ['Content-Type' => 'text/calendar; charset=utf-8']);
    }
}
