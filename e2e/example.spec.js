import {test,expect} from '@playwright/test'; //usage-importing test from Playwright
test('my first test',async ({browser})=>{ //before using => we used fucntion keyword but now we are using arrow function, which is more concise and easier to read.
  //creating a new page
  const context=await browser.newContext();//creating a new context;means opening a new browser

  const page=await context.newPage();//creating a new page;means opening a new tab in the browser
  await page.goto('https://www.google.com/');//navigating to google.com
  await page.pause();
})
// //   //pauses the execution of the test, allowing you to inspect the state of the page and debug if necessary.
// //   //  This is useful for troubleshooting and understanding how the test is interacting with the webpage.


// // //why async and await? 
// // // because we are performing asynchronous operations like navigating to a webpage, which takes time. 
// // // Using async and await allows us to write code that looks synchronous 
// // // but actually handles asynchronous operations properly, ensuring that we wait for the page to load before proceeding with any further actions.
// // })

// //Run this test using the command: npx playwright test example.spec.js

test("Second Test",async({page})=>{ //use of {page} instead of {browser} because we are directly using the page object provided by Playwright, which simplifies our code and allows us to interact with the webpage without needing to create a new context or page.
  await page.goto('https://selenium.qabible.in/simple-form-demo.php')
  const pagetitlename=await page.title();
  console.log(pagetitlename);
  // await page.locator('.form-control').fill('God is great'); //returns 3 so error 

  await page.locator('#single-input-field').fill("God is great");
  // await page.pause();

})

// test.only("Assignment-Login",async({page})=>{
test("Assignment-Login",async({page})=>{
await page.goto('https://www.saucedemo.com/');
const pagetitlename=await page.title();
console.log("Page with Title: " + pagetitlename +" loaded successfully");
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('red');
await page.click('#login-button')
const errorloginmsg=page.locator('.error-message-container.error') //2 classes used.so use "." for both classes
const errormsgdisplayed=await errorloginmsg.textContent()
await expect(errorloginmsg).toContainText("Epic sadface: Username and password do not match any user in this service")
//check if Epic sadface: Username and password do not match any user in this service is seen
console.log(errormsgdisplayed)
await page.pause();

})

test("class locator based-CheckBOX",async({page})=>{
 await page.goto('https://selenium.qabible.in/index.php')
  await page.locator('.nav-link').nth(1).click();
  await page.goto('https://selenium.qabible.in/check-box-demo.php')
  const checkbox=page.locator("label[for='gridCheck']")
  await checkbox.check()
  await expect(checkbox).toBeChecked() //to verify that the checkbox is checked after performing the check action.
  await checkbox.uncheck() //to uncheck the checkbox after verifying that it is checked.
  await expect(checkbox).toBeChecked() //to verify that the checkbox is unchecked after performing the uncheck action.
  await page.pause()

})

test.skip("radio button",async({page})=>{
  await page.goto('https://selenium.qabible.in/radio-button-demo.php')
  const radiobutton=page.locator("#inlineRadio2")
  await radiobutton.check()
  await page.pause()

})