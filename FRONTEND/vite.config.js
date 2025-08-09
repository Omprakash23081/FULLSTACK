import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api/users": "http://localhost:3000/",
      "/api": "fullstack-production-6f93.up.railway.app/",
    },
  },
});
