import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// Vite config for Vercel deployment (without ZMP plugin)
export default defineConfig({
  root: ".",
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});

