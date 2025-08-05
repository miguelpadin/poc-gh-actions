// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: "http://localhost:5173", // ahora `page.goto('/')` funciona
    headless: true,
  },
  webServer: {
    // construye y sirve la app en modo preview
    command: "npm run preview:test",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI, // en local, reutiliza si ya está levantado
    timeout: 60_000,
  },
});
