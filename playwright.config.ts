// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  use: {
    // Así `page.goto("/")` funciona tanto en local como en CI
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:5173",
    headless: true,
  },
  // Playwright levanta y espera al server (Vite preview)
  webServer: {
    command: "npm run preview:test", // debe existir en package.json
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI, // en local reutiliza; en CI no
    timeout: 120_000, // 2 min
  },
});
