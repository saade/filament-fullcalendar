
## Task Esterno — Porting FullCalendar v4 (saade/filament-fullcalendar)

- Obiettivo: portare il plugin `saade/filament-fullcalendar` a Filament v4.x + Livewire v3, mantenendo API simili (plugin fluente + widget) e stile coerente con Filament.
- Repo fork: `https://github.com/simoneaveotti/filament-fullcalendar` (branch target: `feat/filament-v4`).

### Deliverables
- `composer.json` aggiornato (Filament ^4, Livewire ^3, PHP >= 8.2).
- Plugin v4 che registra asset via Panel->assets (AlpineComponent + Css) in `src/FilamentFullCalendarPlugin.php`.
- Widget v4 base in `src/Widgets/FullCalendarWidget.php` con:
  - `fetchEvents(array $fetchInfo): array` (obbligatorio da implementare nel consumer)
  - hook opzionali: `onEventClick`, `onEventDrop`, `onEventResize`, `onDateSelect`
  - header actions rendibili via `<x-filament-actions::actions>` + `getCachedHeaderActions()`
  - `getConfig(): array` per la config FullCalendar
- Blade v4 in `resources/views/widget.blade.php` con `x-load`, `x-load-src` e `x-load-css` + container `filament-fullcalendar`.
- JS Alpine `resources/js/filament-fullcalendar.js` che inizializza FullCalendar v6 con:
  - mapping plugin string → import ESM (`availablePlugins`)
  - locale (locales-all), timezone, hooks (click/drop/resize/select), fetch eventi via Livewire
  - window events: `filament-fullcalendar--refresh|--prev|--next|--today|--goto`
- CSS tema `resources/css/filament-fullcalendar.css` (palette Filament, light/dark, utility coerenti).
- Build assets con Vite (`vite.config.mjs`, `package.json`) che genera `dist/filament-fullcalendar.js` e `dist/filament-fullcalendar.css`.
- README aggiornato (installazione, plugin usage su Filament v4, snippet widget consumer).

### Vincoli & Compatibilità
- Mantieni parità semantica del metodo `plugins(array $plugins, bool $merge = true)` con il pacchetto originale: accetta le stesse chiavi (es. `dayGrid`, `timeGrid`, `list`, `multiMonth`, `scrollGrid`, `timeline`, `adaptive`, `resource*`, `rrule`, `moment*`).
- Non pubblicare/richiamare Blade interni Filament; usa hook CSS/Actions.
- Localizzazione: usare `locales-all` di FullCalendar; `locale` ricavato da `config('app.locale')` (solo lingua).

### Passi Implementativi (ordine)
1) composer.json: aggiorna constraints (Filament ^4, Livewire ^3, PHP >= 8.2).
2) Aggiungi `src/FilamentFullCalendarPlugin.php` (Plugin v4) con registrazione asset:
   - AlpineComponent: `dist/filament-fullcalendar.js`
   - Css: `dist/filament-fullcalendar.css`
3) Aggiungi/aggiorna `src/Widgets/FullCalendarWidget.php` (Widget v4) con API sopra.
4) Aggiungi `resources/views/widget.blade.php` con:
   - Header actions: `<x-filament-actions::actions :actions="$this->getCachedHeaderActions()" />`
   - Container: `x-load`, `x-load-src`, `x-load-css`, `x-data="fullcalendar({...})"`
5) Aggiungi `resources/js/filament-fullcalendar.js`:
   - Inizializza Calendar con `headerToolbar`, `plugins: plugins.map(p => availablePlugins[p])`, `locales` e hook.
   - Fetch eventi via `$wire.fetchEvents({ start, end, timezone })`.
   - Hook window events per controllo esterno.
6) Aggiungi `resources/css/filament-fullcalendar.css` (tema coerente Filament, dark mode inclusa).
7) Aggiungi `vite.config.mjs` e `package.json` (dipendenze FullCalendar v6 + script build) e genera `dist/` (`npm i && npm run build`).

### Validazione Locale (repo pacchetto)
- Build: `npm i && npm run build` → verifica `dist/filament-fullcalendar.{js,css}`.
- Test registrazione asset (Orchestra Testbench opzionale): registra plugin su un Panel e verifica che `FilamentAsset::getAlpineComponentSrc(...)` e `getStyleHref(...)` tornino path validi.
- QA manuale (con consumer minimo o guida README): plugin registrato nel Panel v4, widget che estende `FullCalendarWidget` e implementa `fetchEvents()` rende il calendario in stile Filament, con viste Mese/Settimana/Giorno, prev/next/today, locale IT.

### Note per l’agente
- Attenzione al mapping `plugins`: deve accettare le stesse stringhe del pacchetto originale e mappare a import ESM corretti.
- Usa `x-load(-src|-css)` per defer asset nel Blade del widget.
- Evita di cambiare pubbliche signature del widget oltre a quanto sopra; documenta differenze nel README.
