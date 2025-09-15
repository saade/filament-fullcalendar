// vite.config.js
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
    root: process.cwd(),
    build: {
        outDir: "resources/dist",
        emptyOutDir: false,
        sourcemap: true,
        lib: {
            entry: "resources/js/components/filament-fullcalendar.js",
            name: "FullCalendar",
            formats: ["es"],
            fileName: () => "filament-fullcalendar.js"
        },
        rollupOptions: {
            external: []
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js")
        }
    }
});
