import { test, expect } from "@playwright/test";

test("Identify Employee Country", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const row = page
        .locator("#companies-table tr")
        .filter({ hasText: "Yoshi Tannamuri" });

    const country = await row.locator("td.country").innerText();

    console.log(`Yoshi Tannamuri belongs to ${country}`);
});