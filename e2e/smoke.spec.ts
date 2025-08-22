import { test, expect } from "@playwright/test";

test("home renders 1", async ({ page }) => {
  console.log("smoke test");
  await page.goto("/");
  await expect(page.locator("#app")).toBeVisible();
});

test("home renders 2", async ({ page }) => {
  console.log("smoke test");
  await page.goto("/");
  await expect(page.locator("#app")).toBeVisible();
});

test("home renders 3", async ({ page }) => {
  console.log("smoke test");
  await page.goto("/");
  await expect(page.locator("#app")).toBeVisible();
});
