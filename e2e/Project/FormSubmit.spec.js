//playwright test for form submit

import {test,expect} from '@playwright/test'
test("Form Submit @Validation",async({page})=>{
    await page.goto('https://selenium.qabible.in/form-submit.php')
    const firstName=page.locator('#validationCustom01')
    firstName.click()
    await page.keyboard.type("Leena")
    await page.keyboard.press('Control+a')// to select all the text in the first name field, which is "Leena" in this case. This allows us to perform operations like copying the text to the clipboard.

    await page.keyboard.press("Control+C")// to copy the selected text ("Leena") to the clipboard, so that we can paste it into another field later.



    const lastName=page.locator('#validationCustom02')
    lastName.click()
    await page.keyboard.press("Control+V") //to paste the copied text from first name to last name field
    const username=page.locator('#validationCustomUsername')
    const city=page.locator('#validationCustom03')
    const state=page.locator('#validationCustom04')
    const zip=page.locator('#validationCustom05')
    await page.pause();
    


})
