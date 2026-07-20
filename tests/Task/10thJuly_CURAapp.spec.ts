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
    expect(page).toHaveTitle("CURA Healthcare Service")
    
    //Select other facility 2nd option:
    page.locator("//select[@id ='combo_facility']").selectOption('Hongkong CURA Healthcare Center')
   //Check checkbox: Apply for hospital readmission

    page.locator("//input[@id='chk_hospotal_readmission']").check()

   //Check all the radio

    page.locator("//input[@id='radio_program_medicare']")
    const checkbox2 = page.locator("//input[@id='radio_program_medicaid']")
    page.locator("//input[@id='radio_program_none']")

  //Selct radio_program_medicaid button

   await checkbox2.check()

   //Select Visit adte
   page.locator("//input[@id='txt_visit_date']").fill('20/7/2026')

    //Enter Comment
   page.locator("//textarea[@id='txt_comment']").fill('For myself')

  //Book appontment
   page.locator("//button[@id='btn-book-appointment']").click()
    
   //Check appointment message is succeful
   page.locator("//h2[text()='Appointment Confirmation']")
   
})