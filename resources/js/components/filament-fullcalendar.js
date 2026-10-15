import { Calendar } from 'fullcalendar'
import { Draggable } from 'fullcalendar/interaction'
import allLocales from 'fullcalendar/locales-all'
import availablePlugins from '../plugins/index.js'
import themes from '../plugins/themes.js'
import * as v6 from '../plugins/v6-compat.js'
import { joinClasses } from '../support/classes.js'

const resolvePlugins = (names) =>
    names.map((name) => {
        if (!availablePlugins[name]) {
            throw new Error(`[${name}] is not a FullCalendar plugin this package knows.`)
        }

        return availablePlugins[name]
    })

const draggableSelector = '[data-filament-fullcalendar-draggable]'

const readDraggable = (el) => JSON.parse(el.dataset.filamentFullcalendarDraggable)

function makeItemsDraggable() {
    window.filamentFullCalendarDraggable ??= new Draggable(document.body, {
        itemSelector: draggableSelector,
        eventData: (el) => {
            const { title, duration } = readDraggable(el)

            return {
                title: title ?? el.innerText,
                ...(duration && { duration }),
                create: false,
            }
        },
    })
}

const ownSourceId = 'filament-fullcalendar'

const serializeEvent = (event) => ({
    id: event.id,
    groupId: event.groupId,
    title: event.title,
    start: event.startStr,
    end: event.endStr || null,
    allDay: event.allDay,
    url: event.url,
    display: event.display,
    extendedProps: event.extendedProps,
    isRecurring: Boolean(event._def?.recurringDef),
    source: event.source?.id || null,
    resourceIds: event.getResources?.().map((resource) => resource.id) ?? [],
})

const escapeHtml = (text) => {
    const el = document.createElement('div')
    el.textContent = text

    return el.innerHTML
}

// Set as an attribute value, not an Alpine expression, so it cannot run as code.
function addTooltip({ event, el }) {
    const { tooltip, isTooltipHtml } = event.extendedProps

    if (!tooltip || (Array.isArray(tooltip) && !tooltip.length)) return

    const theme = window.Alpine.store('theme') ?? 'light'

    el.setAttribute(
        `x-tooltip.html.raw.theme.${theme}`,
        [tooltip]
            .flat()
            .map((line) => (isTooltipHtml ? line : escapeHtml(line)))
            .join('<br>'),
    )
}

// FullCalendar writes the title as text. Only the element that holds the
// title is rewritten, so the time, the dot and the link stay as they are.
function renderHtmlTitle({ event, el }) {
    if (!event.extendedProps.isTitleHtml) return

    const title = el.querySelector('.fi-fc-event-title')

    if (title) title.innerHTML = event.title
}

const colorScheme = () =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'

const isEnglish = (locale) => !locale || /^en([-_]us)?$/i.test(locale)

export default function fullcalendar({
    id,
    locale,
    plugins,
    theme,
    paletteClass,
    nativeToolbar,
    schedulerLicenseKey,
    timeZone,
    config,
    resources,
    eventSources,
    googleCalendarApiKey,
    editable,
    selectable,
    filtersCount,
    pollingInterval,
    droppable,
    widget,
    hasSpaMode,
    shouldReportDates,
    callbacks,
}) {
    ;({ plugins, callbacks } = v6.options({ plugins, callbacks, config }))

    // A callback from the widget for an option the calendar also handles runs
    // first, and returning false from it stops the calendar's own handling.
    const isCancelledByCallback = (name, ...args) =>
        typeof callbacks[name] === 'function' &&
        callbacks[name](...args) === false

    const activeNativeButtons = {}

    const ownClasses = {
        viewClass: 'fi-fc-view',
        eventClass: paletteClass,
        eventTitleClass: 'fi-fc-event-title',
        popoverClass: paletteClass,
    }

    return {
        /** @type Calendar */
        calendar: null,

        listeners: {},

        pendingDateInteraction: null,

        pollingTimer: null,

        colorSchemeObserver: null,

        isDragging: false,

        id,

        filtersCount,

        title: '',

        viewType: null,

        isTodayDisabled: false,

        optionChanges: 0,

        initialResources: Array.isArray(resources) ? resources : null,

        init() {
            const {
                mobileInitialView,
                mobileBreakpoint = 768,
                plugins: configPlugins = [],
                locales: configLocales = [],
                ...fullCalendarConfig
            } = config

            const isMobile = window.matchMedia(
                `(max-width: ${mobileBreakpoint - 1}px)`,
            ).matches

            const sourcePlugins = [
                eventSources.some((source) => source.googleCalendarId) &&
                    'googleCalendar',
                eventSources.some((source) => source.format === 'ics') &&
                    'iCalendar',
            ].filter(Boolean)

            this.calendar = new Calendar(this.$refs.calendar, {
                plugins: [
                    ...resolvePlugins([
                        ...new Set([...plugins, ...configPlugins, ...sourcePlugins]),
                    ]),
                    themes[theme],
                ],
                locale,
                ...(schedulerLicenseKey && { schedulerLicenseKey }),
                editable,
                selectable,
                ...(resources !== false && {
                    resources: (info, successCallback, failureCallback) => {
                        if (this.initialResources) {
                            successCallback(this.initialResources)
                            this.initialResources = null

                            return
                        }

                        this.$wire
                            .handleFetchResources(
                                info?.startStr
                                    ? {
                                          start: info.startStr,
                                          end: info.endStr,
                                          timezone: info.timeZone,
                                      }
                                    : null,
                            )
                            .then(successCallback)
                            .catch(failureCallback)
                    },
                }),
                ...fullCalendarConfig,
                headerToolbar: nativeToolbar?.headerToolbar ?? false,
                footerToolbar: nativeToolbar?.footerToolbar ?? false,
                colorScheme: colorScheme(),
                timeZone,
                ...(isMobile &&
                    mobileInitialView && { initialView: mobileInitialView }),
                locales: [
                    ...(isEnglish(config.locale ?? locale) ? [] : allLocales),
                    ...configLocales,
                ],
                ...callbacks,
                ...Object.fromEntries(
                    Object.entries(ownClasses).map(([name, ownClass]) => [
                        name,
                        joinClasses(
                            ownClass,
                            callbacks[name] ?? fullCalendarConfig[name],
                        ),
                    ]),
                ),
                eventDidMount: (info) => {
                    addTooltip(info)
                    renderHtmlTitle(info)

                    callbacks.eventDidMount?.(info)
                },
                ...(googleCalendarApiKey && { googleCalendarApiKey }),
                // A Google Calendar event links to its page on Google, which
                // should not replace the application's own page.
                eventSources: [
                    {
                        id: ownSourceId,
                        events: (info, successCallback, failureCallback) => {
                            this.$wire
                                .handleFetchEvents({
                                    start: info.startStr,
                                    end: info.endStr,
                                    timezone: info.timeZone,
                                })
                                .then(successCallback)
                                .catch(failureCallback)
                        },
                    },
                    ...eventSources.map((source) =>
                        source.googleCalendarId
                            ? {
                                  ...source,
                                  eventDataTransform: (event) => ({
                                      ...event,
                                      shouldOpenUrlInNewTab: true,
                                  }),
                              }
                            : source,
                    ),
                ],
                buttons: this.getButtons(),
                ...(droppable && {
                    droppable: true,
                    dropAccept: (el) => {
                        if (!el.matches(draggableSelector)) return false

                        const { calendar } = readDraggable(el)

                        if (calendar && calendar !== widget) return false

                        const accept = callbacks.dropAccept ?? config.dropAccept

                        if (typeof accept === 'function') return accept(el)

                        return typeof accept === 'string'
                            ? el.matches(accept)
                            : true
                    },
                    drop: (info) => {
                        if (isCancelledByCallback('drop', info)) return

                        // An event dragged over from another calendar ends
                        // up here too, and is not one of our items.
                        if (!info.draggedEl.matches(draggableSelector)) return

                        const { calendar, ...item } = readDraggable(
                            info.draggedEl,
                        )

                        this.$wire.handleExternalDrop(
                            item,
                            info.dateStr,
                            info.allDay,
                            info.resource ?? null,
                        )
                    },
                }),
                loading: (isLoading) => {
                    this.$refs.calendar.setAttribute('aria-busy', isLoading)

                    isCancelledByCallback('loading', isLoading)
                },
                datesSet: (info) => {
                    this.syncToolbar()

                    if (isCancelledByCallback('datesSet', info)) return

                    if (!shouldReportDates) return

                    this.$wire.handleDatesSet({
                        view: info.view.type,
                        title: info.view.title,
                        start: info.startStr,
                        end: info.endStr,
                        currentStart: this.calendar.formatIso(
                            info.view.currentStart,
                        ),
                        currentEnd: this.calendar.formatIso(
                            info.view.currentEnd,
                        ),
                    })
                },
                eventClick: (info) => {
                    const { event, jsEvent } = info

                    jsEvent.preventDefault()

                    if (isCancelledByCallback('eventClick', info)) return

                    if (event.url) {
                        const isNotPlainLeftClick = (e) =>
                            e.which > 1 ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.metaKey ||
                            e.shiftKey
                        const shouldOpenInNewTab =
                            event.extendedProps.shouldOpenUrlInNewTab ||
                            isNotPlainLeftClick(jsEvent)

                        const isSameOrigin =
                            new URL(event.url, window.location.href).origin ===
                            window.location.origin

                        if (hasSpaMode && isSameOrigin && !shouldOpenInNewTab) {
                            return window.Livewire.navigate(event.url)
                        }

                        return window.open(
                            event.url,
                            shouldOpenInNewTab ? '_blank' : '_self',
                        )
                    }

                    this.$wire.handleEventClick(serializeEvent(event))
                },
                eventDragStart: (info) => {
                    this.isDragging = true

                    callbacks.eventDragStart?.(info)
                },
                eventDragStop: (info) => {
                    this.isDragging = false

                    callbacks.eventDragStop?.(info)
                },
                eventResizeStart: (info) => {
                    this.isDragging = true

                    callbacks.eventResizeStart?.(info)
                },
                eventResizeStop: (info) => {
                    this.isDragging = false

                    callbacks.eventResizeStop?.(info)
                },
                eventDrop: async (info) => {
                    const {
                        event,
                        oldEvent,
                        relatedEvents,
                        delta,
                        oldResource,
                        newResource,
                        revert,
                    } = info

                    if (isCancelledByCallback('eventDrop', info)) return

                    const shouldRevert = await this.$wire.handleEventDrop(
                        serializeEvent(event),
                        serializeEvent(oldEvent),
                        relatedEvents.map(serializeEvent),
                        delta,
                        oldResource,
                        newResource,
                    )

                    if (typeof shouldRevert === 'boolean' && shouldRevert) {
                        revert()
                    }
                },
                eventResize: async (info) => {
                    const {
                        event,
                        oldEvent,
                        relatedEvents,
                        startDelta,
                        endDelta,
                        revert,
                    } = info

                    if (isCancelledByCallback('eventResize', info)) return

                    const shouldRevert = await this.$wire.handleEventResize(
                        serializeEvent(event),
                        serializeEvent(oldEvent),
                        relatedEvents.map(serializeEvent),
                        startDelta,
                        endDelta,
                    )

                    if (typeof shouldRevert === 'boolean' && shouldRevert) {
                        revert()
                    }
                },
                dateClick: (info) => {
                    if (isCancelledByCallback('dateClick', info)) return

                    const { dateStr, allDay, view, resource } = info

                    this.queueDateInteraction({
                        click: {
                            dateStr,
                            allDay,
                            view: this.serializeView(view),
                            resource,
                        },
                    })
                },
                select: (info) => {
                    if (isCancelledByCallback('select', info)) return

                    const { startStr, endStr, allDay, view, resource } = info

                    this.queueDateInteraction({
                        selection: {
                            startStr,
                            endStr,
                            allDay,
                            view: this.serializeView(view),
                            resource,
                        },
                    })
                },
            })

            this.trackOptions()
            this.watchActiveNativeButtons()

            this.calendar.render()
            this.syncToolbar()

            this.colorSchemeObserver = new MutationObserver(() => {
                if (this.calendar?.getOption('colorScheme') === colorScheme()) return

                this.calendar?.setOption('colorScheme', colorScheme())
            })

            this.colorSchemeObserver.observe(document.documentElement, {
                attributeFilter: ['class'],
            })

            if (droppable) makeItemsDraggable()

            if (pollingInterval) {
                // Fetching replaces the events, which would interrupt a drag
                // and discard what was moved behind an open modal.
                this.pollingTimer = setInterval(() => {
                    if (
                        document.hidden ||
                        this.isDragging ||
                        this.$wire.mountedActions?.length
                    ) {
                        return
                    }

                    this.calendar.refetchEvents()
                }, pollingInterval)
            }

            const handlers = {
                refresh: () => this.calendar.refetchEvents(),
                'refresh-resources': () => this.calendar.refetchResources(),
                prev: () => this.calendar.prev(),
                next: () => this.calendar.next(),
                today: () => this.calendar.today(),
                view: ({ view, date }) =>
                    this.calendar.changeView(view, date ?? undefined),
                goto: ({ date }) => this.calendar.gotoDate(date),
                scroll: ({ time }) => this.calendar.scrollToTime(time),
                option: ({ option, value }) =>
                    this.calendar.setOption(option, value),
                filters: ({ count }) => {
                    this.filtersCount = count
                },
            }

            // An event that names a calendar is only meant for that one.
            // One that names none is for every calendar on the page.
            this.listeners = Object.fromEntries(
                Object.entries(handlers).map(([name, handler]) => [
                    `filament-fullcalendar--${name}`,
                    ({ detail }) => {
                        if (detail?.calendar && detail.calendar !== id) return

                        handler(detail ?? {})
                    },
                ]),
            )

            Object.entries(this.listeners).forEach(([name, listener]) =>
                window.addEventListener(name, listener),
            )
        },

        syncToolbar() {
            const { view } = this.calendar

            this.title = view.title

            window.dispatchEvent(
                new CustomEvent('filament-fullcalendar--title', {
                    detail: { calendar: id, title: view.title },
                }),
            )
            this.viewType = view.type
            this.isTodayDisabled = this.calendar.getButtonState().today.isDisabled
        },

        getToolLabel(name) {
            if (!this.viewType) return ''

            return (
                this.calendar.getOption('buttons')?.[name]?.text ??
                this.calendar.getButtonState()[name]?.text ??
                name
            )
        },

        getToolHint(name) {
            if (!this.viewType) return ''

            return (
                this.calendar.getOption('buttons')?.[name]?.hint ??
                this.calendar.getButtonState()[name]?.hint ??
                ''
            )
        },

        getButtons() {
            return {
                ...config.buttons,
                ...callbacks.buttons,
                ...Object.fromEntries(
                    Object.entries(nativeToolbar?.buttons ?? {}).map(
                        ([name, tool]) => [name, this.makeNativeButton(name, tool)],
                    ),
                ),
            }
        },

        makeNativeButton(name, { text, handler, icon, isIconOnly, isPrimary, isToggle, tooltip, active, disabled, badge }) {
            return {
                text,
                hint: text,
                display: icon ? (isIconOnly ? 'icon' : 'icon-text') : 'text',
                ...(icon && { iconContent: { html: icon } }),
                isPrimary: Boolean(isPrimary || activeNativeButtons[name]),
                class: 'fi-fc-tool',
                click: (event) => {
                    event.preventDefault()

                    window.Alpine.evaluate(this.$el, handler, {
                        scope: { $el: event.currentTarget, $event: event },
                    })
                },
                didMount: ({ el }) => {
                    if (tooltip) {
                        el.setAttribute('x-tooltip', `{ content: ${tooltip}, theme: $store.theme }`)
                    }

                    if (disabled) el.setAttribute('x-bind:disabled', disabled)

                    if (isToggle && active) {
                        el.setAttribute('x-bind:aria-pressed', `(${active}) ? 'true' : 'false'`)
                    }

                    if (badge) {
                        const badgeEl = document.createElement('span')
                        badgeEl.className = 'fi-fc-tool-badge'
                        badgeEl.setAttribute('x-show', badge)
                        badgeEl.setAttribute('x-text', badge)
                        badgeEl.setAttribute('x-cloak', '')
                        el.append(badgeEl)
                    }
                },
            }
        },

        trackOptions() {
            const calendar = window.Alpine.raw(this.calendar)
            const { getOption, setOption } = calendar

            calendar.getOption = (name) => {
                void this.optionChanges

                return getOption.call(calendar, name)
            }

            calendar.setOption = (name, value) => {
                setOption.call(calendar, name, value)

                this.optionChanges++
            }
        },

        watchActiveNativeButtons() {
            Object.entries(nativeToolbar?.buttons ?? {}).forEach(([name, { active }]) => {
                if (!active) return

                activeNativeButtons[name] = Boolean(window.Alpine.evaluate(this.$el, active))

                this.$watch(active, (isActive) => {
                    activeNativeButtons[name] = Boolean(isActive)

                    window.Alpine.raw(this.calendar)?.setOption('buttons', this.getButtons())
                })
            })

            if (Object.values(activeNativeButtons).some(Boolean)) {
                window.Alpine.raw(this.calendar).setOption('buttons', this.getButtons())
            }
        },

        clickCustomButton(name, event) {
            this.calendar?.getOption('buttons')?.[name]?.click?.(event)
        },

        // A view only serialises to its type; the rest are getters.
        serializeView(view) {
            return {
                type: view.type,
                title: view.title,
                currentStart: this.calendar.formatIso(view.currentStart),
                currentEnd: this.calendar.formatIso(view.currentEnd),
                activeStart: this.calendar.formatIso(view.activeStart),
                activeEnd: this.calendar.formatIso(view.activeEnd),
            }
        },

        destroy() {
            Object.entries(this.listeners).forEach(([name, listener]) =>
                window.removeEventListener(name, listener),
            )

            clearInterval(this.pollingTimer)

            this.colorSchemeObserver?.disconnect()

            this.calendar?.destroy()
            this.calendar = null
        },

        // A click on a selectable calendar fires `select` and then, a few
        // milliseconds later in a separate task, `dateClick`. Dragging over
        // several cells only fires `select`, and a tap on a touch device only
        // fires `dateClick`. Both are collected for a short window so the
        // server gets one call: a click when there was a `dateClick`, and a
        // selection otherwise.
        queueDateInteraction(interaction) {
            if (!selectable) return

            const isFirstInteraction = this.pendingDateInteraction === null

            this.pendingDateInteraction = {
                ...this.pendingDateInteraction,
                ...interaction,
            }

            if (!isFirstInteraction) return

            setTimeout(() => {
                const { click, selection } = this.pendingDateInteraction
                this.pendingDateInteraction = null

                if (click) {
                    this.$wire.handleDateClick(
                        click.dateStr,
                        click.allDay,
                        click.view,
                        click.resource,
                        selection?.endStr ?? null,
                    )

                    return
                }

                this.$wire.handleDateSelect(
                    selection.startStr,
                    selection.endStr,
                    selection.allDay,
                    selection.view,
                    selection.resource,
                )
            }, 50)
        },
    }
}
