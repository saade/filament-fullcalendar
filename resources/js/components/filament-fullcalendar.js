import { Calendar } from '@fullcalendar/core'
import interaction, { Draggable } from '@fullcalendar/interaction'
import dayGrid from '@fullcalendar/daygrid'
import timeGrid from '@fullcalendar/timegrid'
import list from '@fullcalendar/list'
import multiMonth from '@fullcalendar/multimonth'

const standardPlugins = { interaction, dayGrid, timeGrid, list, multiMonth }

const pluginGroups = [
    {
        names: [
            'scrollGrid',
            'timeline',
            'adaptive',
            'resource',
            'resourceDayGrid',
            'resourceTimeline',
            'resourceTimeGrid',
        ],
        load: () => import('../plugins/premium.js'),
    },
    {
        names: ['moment', 'momentTimezone'],
        load: () => import('../plugins/moment.js'),
    },
    {
        names: ['rrule'],
        load: () => import('../plugins/rrule.js'),
    },
    {
        names: ['googleCalendar'],
        load: () => import('../plugins/google-calendar.js'),
    },
    {
        names: ['iCalendar'],
        load: () => import('../plugins/icalendar.js'),
    },
]

async function loadPlugins(names) {
    const groups = await Promise.all(
        pluginGroups
            .filter((group) => names.some((name) => group.names.includes(name)))
            .map((group) => group.load()),
    )

    const available = Object.assign(
        { ...standardPlugins },
        ...groups.map((group) => group.default),
    )

    return names.map((name) => {
        if (!available[name]) {
            throw new Error(`[${name}] is not a FullCalendar plugin this package knows.`)
        }

        return available[name]
    })
}

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
    ...event.toPlainObject(),
    isRecurring: Boolean(event._def.recurringDef),
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

const isEnglish = (locale) => !locale || /^en([-_]us)?$/i.test(locale)

async function loadLocales(locale) {
    if (isEnglish(locale)) return []

    return (await import('../plugins/locales.js')).default
}

export default function fullcalendar({
    id,
    locale,
    plugins,
    schedulerLicenseKey,
    timeZone,
    config,
    resources,
    eventSources,
    googleCalendarApiKey,
    editable,
    selectable,
    toolbarButtons,
    pollingInterval,
    droppable,
    widget,
    hasSpaMode,
    shouldReportDates,
    callbacks,
}) {
    // A callback from the widget for an option the calendar also handles runs
    // first, and returning false from it stops the calendar's own handling.
    const isCancelledByCallback = (name, ...args) =>
        typeof callbacks[name] === 'function' &&
        callbacks[name](...args) === false

    return {
        /** @type Calendar */
        calendar: null,

        listeners: {},

        pendingDateInteraction: null,

        pollingTimer: null,

        isDragging: false,

        isDestroyed: false,

        resizeObserver: null,

        lastWidth: null,

        initialResources: Array.isArray(resources) ? resources : null,

        async init() {
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

            const allEventSources = [
                ...(config.eventSources ?? []),
                ...eventSources,
            ]

            const sourcePlugins = [
                allEventSources.some((source) => source.googleCalendarId) &&
                    'googleCalendar',
                allEventSources.some((source) => source.format === 'ics') &&
                    'iCalendar',
            ].filter(Boolean)

            const [loadedPlugins, locales] = await Promise.all([
                loadPlugins([
                    ...new Set([...plugins, ...configPlugins, ...sourcePlugins]),
                ]),
                loadLocales(config.locale ?? locale),
            ])

            if (this.isDestroyed) return

            this.calendar = new Calendar(this.$el, {
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay',
                },
                plugins: loadedPlugins,
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
                timeZone,
                ...(isMobile &&
                    mobileInitialView && { initialView: mobileInitialView }),
                locales: [...locales, ...configLocales],
                ...callbacks,
                eventDidMount: (info) => {
                    addTooltip(info)

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
                    ...allEventSources.map((source) =>
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
                customButtons: {
                    ...config.customButtons,
                    ...callbacks.customButtons,
                    ...Object.fromEntries(
                        Object.entries(toolbarButtons).map(
                            ([
                                name,
                                {
                                    text,
                                    hint,
                                    alpineClickHandler,
                                    url,
                                    shouldOpenUrlInNewTab,
                                },
                            ]) => [
                                name,
                                {
                                    text,
                                    hint,
                                    click: () => {
                                        if (alpineClickHandler) {
                                            return window.Alpine.evaluate(
                                                this.$el,
                                                alpineClickHandler,
                                            )
                                        }

                                        if (url) {
                                            return window.open(
                                                url,
                                                shouldOpenUrlInNewTab
                                                    ? '_blank'
                                                    : '_self',
                                            )
                                        }

                                        this.$wire.mountAction(name)
                                    },
                                },
                            ],
                        ),
                    ),
                },
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
                    this.$el.setAttribute('aria-busy', isLoading)

                    isCancelledByCallback('loading', isLoading)
                },
                datesSet: (info) => {
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

            this.calendar.render()

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

            // A calendar created while hidden, in a closed modal or an
            // inactive tab, has no size until its container gets one.
            this.resizeObserver = new ResizeObserver(([entry]) => {
                const width = entry.contentRect.width

                if (width === this.lastWidth) return

                this.lastWidth = width

                requestAnimationFrame(() => this.calendar?.updateSize())
            })

            this.resizeObserver.observe(this.$el)

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
            this.isDestroyed = true

            Object.entries(this.listeners).forEach(([name, listener]) =>
                window.removeEventListener(name, listener),
            )

            clearInterval(this.pollingTimer)

            this.resizeObserver?.disconnect()

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
