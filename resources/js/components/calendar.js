import { Calendar } from '@fullcalendar/core'
import rrulePlugin from '@fullcalendar/rrule'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import momentPlugin from '@fullcalendar/moment'
import momentTimezonePlugin from '@fullcalendar/moment-timezone'
import locales from '@fullcalendar/core/locales-all'

export default (Alpine) => {
    Alpine.data(
        'calendarComponent',
        ({
            key,
            config,
            locale,
            events,
            initialView,
            initialDate,
            shouldSaveState,
            handleEventClickUsing,
            handleEventDropUsing,
            handleEventResizeUsing,
            handleDateClickUsing,
            handleSelectUsing,
            fetchEventsUsing,
        }) => {
            return {
                calendar: null,

                cachedEvents: new Object(),

                init: function () {
                    this.calendar = new Calendar(this.$refs.calendar, {
                        ...config,
                        plugins: [
                            ...(config.plugins.dayGrid ? [dayGridPlugin] : []),
                            ...(config.plugins.timeGrid ? [timeGridPlugin] : []),
                            ...(config.plugins.interaction ? [interactionPlugin] : []),
                            ...(config.plugins.list ? [listPlugin] : []),
                            ...(config.plugins.rrule ? [rrulePlugin] : []),
                            ...(config.plugins.resourceTimeline ? [resourceTimelinePlugin] : []),
                            momentPlugin,
                            momentTimezonePlugin,
                        ],
                        locales,
                        locale,
                        eventClick: handleEventClickUsing,
                        eventDrop: handleEventDropUsing,
                        eventResize: handleEventResizeUsing,
                        dateClick: handleDateClickUsing,
                        select: handleSelectUsing,
                        eventSources: [{ events }, fetchEventsUsing],
                        ...(shouldSaveState && {
                            initialView:
                                localStorage.getItem(
                                    'fullcalendar.view.' + key,
                                ) ??
                                initialView ??
                                undefined,
                            initialDate:
                                localStorage.getItem(
                                    'fullcalendar.date.' + key,
                                ) ??
                                initialDate ??
                                undefined,
                            datesSet: function ({ start, view }) {
                                localStorage.setItem(
                                    'fullcalendar.view.' + key,
                                    view.type,
                                )
                                localStorage.setItem(
                                    'fullcalendar.date.' + key,
                                    start.toISOString(),
                                )
                            },
                        }),
                    })

                    this.calendar.render()
                },
            }
        },
    )
}
