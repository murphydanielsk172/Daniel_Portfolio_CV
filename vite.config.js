import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Daniel_Portfolio_CV/",
  plugins: [react()],
  // Use a relative base so assets resolve correctly whether the site is served
  // at the GitHub Pages project path or a custom domain.
  base: "./",
});
