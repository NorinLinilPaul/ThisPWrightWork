import {test,expect} from '@playwright/test'

test("Test with Capture Screenshot",async({page})=>{
await page.goto("https://www.saucedemo.com/")
const errorContainer=await page.locator('.error-message-container.error')
await expect(errorContainer).toBeHidden() 
//to verify that the error message container is hidden

//first time when page loads its hidden
const loginBtn=await page.locator('#login-button').click()
//take screenshot
await page.screenshot({path:"testscreenshot.png"})
//only screeenshot of element
const loginElement=page.locator('#login-button')
await loginElement.screenshot({path:"loginbtn.png"})
await expect(errorContainer).toBeVisible()
//after clicking login button error message should be visible

})