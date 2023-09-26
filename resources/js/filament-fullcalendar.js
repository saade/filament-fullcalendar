import { Calendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'
import scrollGridPlugin from '@fullcalendar/scrollgrid'
import timelinePlugin from '@fullcalendar/timeline'
import adaptivePlugin from '@fullcalendar/adaptive'
import resourcePlugin from '@fullcalendar/resource'
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import rrulePlugin from '@fullcalendar/rrule'
import momentPlugin from '@fullcalendar/moment'
import momentTimezonePlugin from '@fullcalendar/moment-timezone'
import locales from '@fullcalendar/core/locales-all'

export default function fullcalendar({
    locale,
    plugins,
    schedulerLicenseKey,
    timeZone,
    config,
    editable,
    selectable,
}) {
    return {
        init() {
            /** @type Calendar */
            const calendar = new Calendar(this.$el, {
                headerToolbar: {
                    'left': 'prev,next today',
                    'center': 'title',
                    'right': 'dayGridMonth,dayGridWeek,dayGridDay',
                },
                plugins: plugins.map(plugin => availablePlugins[plugin]),
                locale,
                schedulerLicenseKey,
                timeZone,
                editable,
                selectable,
                ...config,
                locales,
                events: (info, successCallback, failureCallback) => {
                    this.$wire.fetchEvents({ start: info.startStr, end: info.endStr, timezone: info.timeZone })
                        .then(successCallback)
                        .catch(failureCallback)
                },
                eventClick: ({ event, jsEvent }) => {
                    jsEvent.preventDefault()

                    if (event.url) {
                        return window.open(event.url, event.extendedProps.shouldOpenInNewTab ? '_blank' : '_self')
                    }

                    this.$wire.onEventClick(event)
                },
                eventDrop: async ({ event, oldEvent, relatedEvents, delta, revert }) => {
                    const shouldRevert = await this.$wire.onEventDrop(event, oldEvent, relatedEvents, delta)

                    if (typeof shouldRevert === 'boolean' && shouldRevert) {
                        revert()
                    }
                },
                eventResize: async ({ event, oldEvent, relatedEvents, startDelta, endDelta, revert }) => {
                    const shouldRevert = await this.$wire.onEventResize(event, oldEvent, relatedEvents, startDelta, endDelta)

                    if (typeof shouldRevert === 'boolean' && shouldRevert) {
                        revert()
                    }
                },
                dateClick: ({ dateStr, allDay }) => {
                    if (!selectable) return;
                    this.$wire.onDateSelect(dateStr, null, allDay)
                },
                select: ({ startStr, endStr, allDay }) => {
                    if (!selectable) return;
                    this.$wire.onDateSelect(startStr, endStr, allDay)
                },
            })

            calendar.render()

            window.addEventListener('filament-fullcalendar--refresh', () => calendar.refetchEvents())
        },
    }
}

const availablePlugins = {
    'interaction': interactionPlugin,
    'dayGrid': dayGridPlugin,
    'timeGrid': timeGridPlugin,
    'list': listPlugin,
    'multiMonth': multiMonthPlugin,
    'scrollGrid': scrollGridPlugin,
    'timeline': timelinePlugin,
    'adaptive': adaptivePlugin,
    'resource': resourcePlugin,
    'resourceDayGrid': resourceDayGridPlugin,
    'resourceTimeline': resourceTimelinePlugin,
    'rrule': rrulePlugin,
    'moment': momentPlugin,
    'momentTimezone': momentTimezonePlugin,
}