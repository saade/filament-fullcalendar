import interaction from 'fullcalendar/interaction'
import dayGrid from 'fullcalendar/daygrid'
import timeGrid from 'fullcalendar/timegrid'
import list from 'fullcalendar/list'
import multiMonth from 'fullcalendar/multimonth'
import rrule from '@fullcalendar/rrule'
import googleCalendar from '@fullcalendar/google-calendar'
import iCalendar from '@fullcalendar/icalendar'
import premium from './premium.js'

export default {
    interaction,
    dayGrid,
    timeGrid,
    list,
    multiMonth,
    rrule,
    googleCalendar,
    iCalendar,
    ...premium,
}
