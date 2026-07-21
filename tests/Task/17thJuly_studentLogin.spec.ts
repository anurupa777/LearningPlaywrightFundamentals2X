import { test, expect} from '@playwright/test'

test("Student Login" , async({page})=> {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter/")

await page.locator('#email').clear()
await page.locator('#email').fill("anurupa45@gmail.com")
await page.locator('#password').clear()
await page.locator('#password').fill("abc123")
await page.locator('.login-btn').click()
expect (page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=anurupa45%40gmail.com&password=abc123#login-success")

})