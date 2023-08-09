const preset = require('./vendor/filament/filament/tailwind.config.preset')

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [preset],
    content: [
        './resources/views/**/*.blade.php',
        './src/**/*.php'
    ],
}
