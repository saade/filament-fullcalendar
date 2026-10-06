// vite.config.js
import { defineConfig } from "vite";
import path from "node:path";

// The output mirrors where Filament publishes assets (Alpine components in
// `components/`, scripts one level up) so the relative imports still resolve.
export default defineConfig({
    root: process.cwd(),
    build: {
        outDir: "resources/dist",
        emptyOutDir: true,
        sourcemap: false,
        minify: true,
        lib: {
            entry: "resources/js/components/filament-fullcalendar.js",
            formats: ["es"],
        },
        rollupOptions: {
            external: [],
            output: {
                entryFileNames: "components/filament-fullcalendar-alpine.js",
                chunkFileNames: "filament-fullcalendar-[name]-[hash].js",
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js")
        }
    }
});
