import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://simplemaps.com/svg/country/in');
//await page.getByRole('img', {title :'Blank SVG India Map'})
 page.getByTitle('Blank SVG India Map')
 



})