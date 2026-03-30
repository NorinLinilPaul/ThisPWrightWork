//playwright tets for checkbox variant
import { test, expect } from '@playwright/test';

test('Check Box Demo with special locators', async ({ page }) => {
  await page.goto('https://selenium.qabible.in/');
  await page.locator('[href="simple-form-demo.php"]').click();
  await page.getByText('Checkbox Demo').click();//clicks on checkbox demo link using text locator

  // ...existing code...
  await page.getByLabel('Click on this check box').nth(0).click();
  //clicks on checkbox using label locator and nth to select the first checkbox
  // ...existing code..
  await page.getByRole('link',{name: 'Radio Buttons Demo'}).click();
  //clicks on radio buttons demo link using role and name locator
  await page.getByRole('radio',{name: 'Male',exact: true}).nth(0).click();
  //clicks on the male radio button using role and name locator
  //two items are there with same name so we have to use nth to select the first one
  //excat true- to select the exact match of the name
  await page.getByRole('button',{name:'Show Selected Value'}).click();
    //clicks on the button to show selected value using role and name locator
    //aseertion to verify the selected value
    await expect(page.getByText("Radio button 'Male' is checked")).toBeVisible();
    //drop downs
    await page.getByRole('link',{name:'Select Input'}).click()
    //clicks on the select input link using role and name locator
    await page.locator('#single-input-field').click();
    await page.selectOption('select',{label:'Red'})
    //this is to select the option from the dropdown using 
    await expect.soft(page.locator('#message-one')).toHaveText('Selected Color : Red');

    //placeholder

    await page.getByText('Form Submit').first().click();
    await page.getByPlaceholder("First name").fill("Norin")



  await page.pause();
});

