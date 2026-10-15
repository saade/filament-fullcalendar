import breezy from 'fullcalendar/themes/breezy'
import classic from 'fullcalendar/themes/classic'
import forma from 'fullcalendar/themes/forma'
import monarch from 'fullcalendar/themes/monarch'
import pulse from 'fullcalendar/themes/pulse'
import filament from '../themes/filament.js'

const builtIn = { filament, breezy, classic, forma, monarch, pulse }

const extend = (base, { extends: _, ...theme }, name) => ({
    ...base,
    ...theme,
    name: `theme-${name}`,
    optionDefaults: { ...base.optionDefaults, ...theme.optionDefaults },
    views: Object.fromEntries(
        [...new Set([...Object.keys(base.views ?? {}), ...Object.keys(theme.views ?? {})])].map((view) => [
            view,
            { ...base.views?.[view], ...theme.views?.[view] },
        ]),
    ),
})

const loaded = {}

export async function loadTheme(name, urls) {
    if (builtIn[name] || loaded[name]) {
        return
    }

    if (!urls[name]) {
        throw new Error(
            `[${name}] is not a calendar theme. Register it with [registerTheme()] on the panel plugin, or use one of [${Object.keys(builtIn).join('], [')}].`,
        )
    }

    const theme = (await import(urls[name])).default

    if (!theme) {
        throw new Error(`The calendar theme [${name}] at [${urls[name]}] has no default export.`)
    }

    loaded[name] = theme

    if (theme.extends) {
        await loadTheme(theme.extends, urls)
    }
}

export function resolveTheme(name, seen = []) {
    if (builtIn[name]) {
        return { theme: builtIn[name], base: name }
    }

    const theme = loaded[name]

    if (!theme.extends) {
        return { theme: extend({}, theme, name), base: null }
    }

    if (seen.includes(theme.extends)) {
        throw new Error(`The calendar themes extend each other in a loop: [${[...seen, name, theme.extends].join('] extends [')}].`)
    }

    const parent = resolveTheme(theme.extends, [...seen, name])

    return { theme: extend(parent.theme, theme, name), base: parent.base }
}

export function paletteClassOf(name, base, palette, palettes) {
    const available = palettes[base] ?? []

    if (!available.length) {
        if (palette) {
            throw new Error(`The [${name}] theme has no palettes, so [${palette}] cannot be used with it.`)
        }

        return null
    }

    if (palette && !available.includes(palette)) {
        throw new Error(`[${palette}] is not a palette of the [${name}] theme. Use one of [${available.join('], [')}].`)
    }

    return `fi-fc-palette-${base}-${palette ?? available[0]}`
}
