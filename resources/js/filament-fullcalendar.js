import calendarComponent from './components/calendar'

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(calendarComponent)
})
