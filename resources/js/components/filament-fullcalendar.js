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
        title: null,

        /** @type Calendar */
        calendar: null,

        init() {
            this.calendar = new Calendar(this.$refs.calendar, {
                plugins: plugins.map((plugin) => availablePlugins[plugin]),
                locale,
                ...(schedulerLicenseKey && { schedulerLicenseKey }),
                timeZone,
                editable,
                selectable,
                ...config,
                headerToolbar: false,
                locales,
                eventClassNames,
                eventContent,
                eventDidMount,
                eventWillUnmount,
                events: (info, successCallback, failureCallback) => {
                    this.$wire
                        .fetchEvents({
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

                    this.$wire.onEventClick(event)
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
                    const shouldRevert = await this.$wire.onEventDrop(
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
                    const shouldRevert = await this.$wire.onEventResize(
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
                dateClick: ({ dateStr, allDay, view, resource }) => {
                    if (!selectable) return
                    this.$wire.onDateSelect(
                        dateStr,
                        null,
                        allDay,
                        view,
                        resource,
                    )
                },
                select: ({ startStr, endStr, allDay, view, resource }) => {
                    if (!selectable) return
                    this.$wire.onDateSelect(
                        startStr,
                        endStr,
                        allDay,
                        view,
                        resource,
                    )
                },
            })

            this.calendar.render()
            this.title = this.calendar.view.title
            this.listenEvents()
        },

        listenEvents() {
            this.calendar.on('datesSet', (info) => {
                this.title = info.view.title
            })

            window.addEventListener('filament-fullcalendar--refresh', () =>
                this.calendar.refetchEvents(),
            )

            window.addEventListener('filament-fullcalendar--prev', () =>
                this.calendar.prev(),
            )

            window.addEventListener('filament-fullcalendar--next', () =>
                this.calendar.next(),
            )

            window.addEventListener('filament-fullcalendar--today', () =>
                this.calendar.today(),
            )

            window.addEventListener('filament-fullcalendar--view', (event) =>
                this.calendar.changeView(event.detail.view),
            )

            window.addEventListener('filament-fullcalendar--goto', (event) =>
                this.calendar.gotoDate(event.detail.date),
            )
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
