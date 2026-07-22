import { test, expect } from '@playwright/test';

test('To select source and destination from Spice Jet', async ({ page }) => {
    // 1. Navigate to the SpiceJet homepage
    await page.goto("https://www.spicejet.com/");

    // 2. Click on the 'From' field to activate the departure input dropdown
    await page.getByText('From', { exact: true }).click();

    // 3. Locate the origin input box inside the origin container and type 'de'
    await page.locator("//div[@data-testid='to-testID-origin']/descendant::input").fill("de");

    // 4. Select 'Delhi' from the suggested dropdown list
    await page.getByText('Delhi', { exact: true }).click();

    // 5. Click on the 'To' field to activate the arrival input dropdown
    await page.getByText('To', { exact: true }).click();

    // 6. Locate the destination input box inside the destination container and type 'ban'
    await page.locator("//div[@data-testid='to-testID-destination']/descendant::input").fill("ban");

    // 7. Select 'Bengaluru' from the suggested dropdown list
    await page.getByText('Bengaluru', { exact: true }).click();
});