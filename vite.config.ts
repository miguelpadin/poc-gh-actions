import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/poc-gh-actions/",
  plugins: [vue()],
});
