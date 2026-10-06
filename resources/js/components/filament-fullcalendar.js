import { Calendar } from '@fullcalendar/core'
import locales from '@fullcalendar/core/locales-all'

export default function fullcalendar({
    locale,
    plugins,
    schedulerLicenseKey,
    timeZone,
    config,
    editable,
    selectable,
    eventClassNames,
    eventContent,
    eventDidMount,
    eventWillUnmount,
}) {
    return {
        /** @type Calendar */
        calendar: null,

        listeners: {},

        pendingDateInteraction: null,

        init() {
            this.calendar = new Calendar(this.$el, {
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay',
                },
                plugins: plugins.map((plugin) => availablePlugins[plugin]),
                locale,
                ...(schedulerLicenseKey && { schedulerLicenseKey }),
                timeZone,
                editable,
                selectable,
                ...config,
                locales,
                eventClassNames,
                eventContent,
                eventDidMount,
                eventWillUnmount,
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
                eventClick: ({ event, jsEvent }) => {
                    jsEvent.preventDefault()

                    if (event.url) {
                        const isNotPlainLeftClick = (e) =>
                            e.which > 1 ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.metaKey ||
                            e.shiftKey
                        return window.open(
                            event.url,
                            event.extendedProps.shouldOpenUrlInNewTab ||
                                isNotPlainLeftClick(jsEvent)
                                ? '_blank'
                                : '_self',
                        )
                    }

                    this.$wire.handleEventClick(event)
                },
                eventDrop: async ({
                    event,
                    oldEvent,
                    relatedEvents,
                    delta,
                    oldResource,
                    newResource,
                    revert,
                }) => {
                    const shouldRevert = await this.$wire.handleEventDrop(
                        event,
                        oldEvent,
                        relatedEvents,
                        delta,
                        oldResource,
                        newResource,
                    )

                    if (typeof shouldRevert === 'boolean' && shouldRevert) {
                        revert()
                    }
                },
                eventResize: async ({
                    event,
                    oldEvent,
                    relatedEvents,
                    startDelta,
                    endDelta,
                    revert,
                }) => {
                    const shouldRevert = await this.$wire.handleEventResize(
                        event,
                        oldEvent,
                        relatedEvents,
                        startDelta,
                        endDelta,
                    )

                    if (typeof shouldRevert === 'boolean' && shouldRevert) {
                        revert()
                    }
                },
                dateClick: ({ dateStr, allDay, view, resource }) =>
                    this.queueDateInteraction({
                        click: { dateStr, allDay, view, resource },
                    }),
                select: ({ startStr, endStr, allDay, view, resource }) =>
                    this.queueDateInteraction({
                        selection: { startStr, endStr, allDay, view, resource },
                    }),
            })

            this.calendar.render()

            this.listeners = {
                'filament-fullcalendar--refresh': () =>
                    this.calendar.refetchEvents(),
                'filament-fullcalendar--prev': () => this.calendar.prev(),
                'filament-fullcalendar--next': () => this.calendar.next(),
                'filament-fullcalendar--today': () => this.calendar.today(),
                'filament-fullcalendar--view': (event) =>
                    this.calendar.changeView(event.detail.view),
                'filament-fullcalendar--goto': (event) =>
                    this.calendar.gotoDate(event.detail.date),
            }

            Object.entries(this.listeners).forEach(([name, listener]) =>
                window.addEventListener(name, listener),
            )
        },

        destroy() {
            Object.entries(this.listeners).forEach(([name, listener]) =>
                window.removeEventListener(name, listener),
            )

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

import interaction from '@fullcalendar/interaction'
import dayGrid from '@fullcalendar/daygrid'
import timeGrid from '@fullcalendar/timegrid'
import list from '@fullcalendar/list'
import multiMonth from '@fullcalendar/multimonth'
import scrollGrid from '@fullcalendar/scrollgrid'
import timeline from '@fullcalendar/timeline'
import adaptive from '@fullcalendar/adaptive'
import resource from '@fullcalendar/resource'
import resourceDayGrid from '@fullcalendar/resource-daygrid'
import resourceTimeline from '@fullcalendar/resource-timeline'
import resourceTimeGrid from '@fullcalendar/resource-timegrid'
import rrule from '@fullcalendar/rrule'
import moment from '@fullcalendar/moment'
import momentTimezone from '@fullcalendar/moment-timezone'

const availablePlugins = {
    interaction,
    dayGrid,
    timeGrid,
    list,
    multiMonth,
    scrollGrid,
    timeline,
    adaptive,
    resource,
    resourceDayGrid,
    resourceTimeline,
    resourceTimeGrid,
    rrule,
    moment,
    momentTimezone,
}
