import { joinClasses } from '../support/classes.js'

const builtInPlugins = ['moment', 'momentTimezone', 'resource']

const classes = {
    viewClass: (info) => `fc-view fc-${info.view?.type}-view`,
    eventClass: 'fc-event',
    eventTitleClass: 'fc-event-title',
    eventTimeClass: 'fc-event-time',
    backgroundEventClass: 'fc-bg-event',
    dayCellClass: 'fc-daygrid-day',
    dayHeaderClass: 'fc-col-header-cell',
    moreLinkClass: 'fc-more-link',
    highlightClass: 'fc-highlight',
    nonBusinessHoursClass: 'fc-non-business',
}

const classOptions = (callbacks, config) =>
    Object.fromEntries(
        Object.keys({ ...callbacks, ...classes })
            .filter((name) => name.endsWith('Class'))
            .map((name) => [
                name,
                joinClasses(classes[name], callbacks[name] ?? config[name]),
            ]),
    )

const buttons = (buttons) =>
    Object.fromEntries(
        Object.entries(buttons).map(([name, button]) => [
            name,
            button.click
                ? {
                      ...button,
                      click: (event) =>
                          button.click(event, event.currentTarget),
                  }
                : button,
        ]),
    )

export const options = ({ plugins, callbacks, config }) => ({
    plugins: plugins.filter((name) => !builtInPlugins.includes(name)),
    callbacks: {
        ...callbacks,
        ...classOptions(callbacks, config),
        ...(callbacks.buttons && { buttons: buttons(callbacks.buttons) }),
    },
})
