import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;`,
      },
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
    rollupOptions: {
      input: "src/index.ts",
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash][extname]",
      },
      external: [
        // Add any Storybook-related files or directories here
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.stories.js",
        "**/*.stories.jsx",
        "**/storybook/**",
        "react",
      ],
      onwarn(warning, warn) {
        // Ignore specific warnings
        if (warning.code === "SOME_WARNING_CODE") {
          return;
        } // Use default warning handler for other warnings
        console.warn("warning CODE", warning.code);
        warn(warning);
      },
    },
  },
});
