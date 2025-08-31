let preset = {}
try {
    // Use Filament preset when available (in consumer app). In package dev, vendor may be absent.
    preset = require('./vendor/filament/filament/tailwind.config.preset')
} catch (e) {
    preset = {}
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [preset],
    content: [
        './resources/views/**/*.blade.php',
        './src/**/*.php'
    ],
}
