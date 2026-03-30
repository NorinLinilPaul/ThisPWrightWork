import {test,expect} from '@playwright/test';

// test("radio button",async({page})=>{
//   await page.goto('https://selenium.qabible.in/radio-button-demo.php')
//   const radiobutton=page.locator("#inlineRadio2")
//   await radiobutton.check()
//   await expect(radiobutton).toBeChecked() //to verify that the radio button is checked after performing the check action.
//   await page.pause()




// })


test("select input",async({page})=>{
await page.goto('https://selenium.qabible.in')
await page.locator('.nav-link').nth(1).click();
await page.goto('https://selenium.qabible.in/select-input.php')
const selectinput=page.locator("#single-input-field")
await selectinput.selectOption("Yellow")

await page.pause()

})