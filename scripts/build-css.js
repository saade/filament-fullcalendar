import { readdirSync, readFileSync, writeFileSync } from 'node:fs'

const themes = ['breezy', 'classic', 'forma', 'monarch', 'pulse']

const read = (file) => readFileSync(`node_modules/fullcalendar/${file}`, 'utf8')

const palette = (theme, name, file) => {
    const scope = `.fi-fc-palette-${theme}-${name}`

    return read(file)
        .replaceAll(':root {', `${scope} {`)
        .replaceAll(
            '[data-color-scheme=dark] {',
            `${scope}[data-color-scheme=dark], [data-color-scheme=dark] ${scope} {`,
        )
}

const palettes = themes.flatMap((theme) =>
    theme === 'classic'
        ? [palette(theme, 'default', 'themes/classic/palette.css')]
        : readdirSync(`node_modules/fullcalendar/themes/${theme}/palettes`).sort().map((file) =>
              palette(theme, file.replace('.css', ''), `themes/${theme}/palettes/${file}`),
          ),
)

writeFileSync(
    'resources/dist/fullcalendar.css',
    [
        read('skeleton.css'),
        ...themes.map((theme) => read(`themes/${theme}/theme.css`)),
        ...palettes,
    ].join('\n'),
)
