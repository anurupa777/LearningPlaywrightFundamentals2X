import { test, expect } from "@playwright/test";

test("Verify the locators for Herokuapp make appointment flow.", async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    //Make appoitment button
    let makeAppoitmentBtn = page.locator("//a[@id='btn-make-appointment']");
    makeAppoitmentBtn.click();


    //Username Password
    let userName = page.locator("//input[@id='txt-username']");
    let passWord = page.locator("//input[@id = 'txt-password']");
    let loginBtn = page.locator("//button[@id = 'btn-login']");

    await userName.fill('John Doe');
    await passWord.fill('ThisIsNotAPassword');
    await loginBtn.click();

    //Make Appointment
    let facility = page.locator("//select[@id = 'combo_facility']");
    let chekboxReadmission = page.locator("//input[@id = 'chk_hospotal_readmission']");
    let medicareRadio = page.locator("//input[@id = 'radio_program_medicare']");
    let medicaidRadio = page.locator("//input[@id = 'radio_program_medicaid']");
    let noneRadio = page.locator("//input[@id = 'radio_program_none']");
    let visitDate = page.locator("//input[@id = 'txt_visit_date']");
    let comment = page.locator('//textarea[@id = "txt_comment"]');
    let bookAppointmentBtn = page.locator("//button[@id = 'btn-book-appointment']");

    await facility.selectOption('Seoul CURA Healthcare Center');
    await chekboxReadmission.check();
    await medicaidRadio.check();
    await visitDate.fill('18/07/2026');
    await comment.fill('I am booking appointment for myself');
    await bookAppointmentBtn.click();
})
