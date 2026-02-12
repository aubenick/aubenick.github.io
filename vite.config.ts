import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //base: "/aubenick.github.io/",
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://0.0.0.0:3003",
        changeOrigin: true,
      },
    },
  },
});
