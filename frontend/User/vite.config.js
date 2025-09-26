import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import zaloMiniApp from "zmp-vite-plugin";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [
      zaloMiniApp({
        configPath: path.resolve(__dirname, "app-config.json")
      }), 
      react()
    ],
    build: {
      assetsInlineLimit: 0,
      outDir: "../www",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
