import { test, expect } from "@playwright/test";

test("home renders", async ({ page }) => {
  console.log("smoke test");
  await page.goto("/");
  await expect(page.locator("#app")).toBeVisible();
});

/* dummy comment */
