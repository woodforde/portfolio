import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    envDir: "../",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
    build: {
        // Relative to the root
        root: "src",
        outDir: "../dist",
        emptyOutDir: true,
        minify: true,
    },
});
