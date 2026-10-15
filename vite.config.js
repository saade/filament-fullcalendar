// vite.config.js
import { defineConfig } from "vite";
import path from "node:path";

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
                entryFileNames: "filament-fullcalendar.js",
                codeSplitting: false,
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js")
        }
    }
});
