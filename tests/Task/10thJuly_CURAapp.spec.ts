import { test, expect} from '@playwright/test'

test("Verify  cura APP" , async({page})=> {

    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    //Make an appointment
    await page.locator("//a[@id='btn-make-appointment']").click()
    //Enter USername and Password
    await page.locator("//input[@name='username']").fill("John Doe")
    await page.locator("//input[@name='password']").fill("ThisIsNotAPassword")
    //Click Login button
    await page.locator("//button[@id='btn-login']").click()
  
    //Verify the title is same "CURA Healthcare Service"
    await expect(page).toHaveTitle("CURA Healthcare Service")
    
    // Select facility by visible label
    await page.locator("//select[@id='combo_facility']").selectOption({ label: 'Hongkong CURA Healthcare Center' })

   // Check checkbox: Apply for hospital readmission (force in case element is overlapped)
   await page.locator("//input[@id='chk_hospotal_readmission']").check({ force: true })

   // Select radio options
   await page.locator("//input[@id='radio_program_medicare']").check().catch(() => {})
   const checkbox2 = page.locator("//input[@id='radio_program_medicaid']")
   await checkbox2.check()
   await page.locator("//input[@id='radio_program_none']").check().catch(() => {})

     // Select Visit date — set value via JS and dispatch input event to satisfy any validation/calendar widget
     await page.evaluate(() => {
         const el = document.getElementById('txt_visit_date') as HTMLInputElement | null;
         if (el) {
             el.value = '20/07/2026';
             el.dispatchEvent(new Event('input', { bubbles: true }));
             el.dispatchEvent(new Event('change', { bubbles: true }));
         }
     });

    // Enter Comment
   await page.locator("//textarea[@id='txt_comment']").fill('For myself')

  // Book appointment
   await page.locator("//button[@id='btn-book-appointment']").click()
    
   // Check appointment message is successful
   await expect(page.locator("//h2[text()='Appointment Confirmation']")).toBeVisible()

})