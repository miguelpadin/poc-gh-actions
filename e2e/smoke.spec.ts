import { test, expect } from "@playwright/test";

test("home renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#app")).toBeVisible();
});

/* dummy comment */
