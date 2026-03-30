import { test, expect } from '@playwright/test';

test('Alert Testing', async ({ page }) => {
  await page.goto('https://selenium.qabible.in/');

  await page.locator('#alert-modal').click();// to click on the alert modal link to trigger the alert

  // Dismiss JS alert when it appears
  page.once('dialog', async (dialog) => { //to listen for the 'dialog' event, which is triggered when a JavaScript alert appears on the page. The callback function is executed when the alert is detected, allowing us to interact with it.
    await dialog.dismiss();
  });

  await page.locator("a[href='javascript-alert.php']").click(); //to click on the link that triggers the JavaScript alert, which will then be dismissed by the dialog event listener we set up earlier.
  await page.locator('.btn.btn-warning').click();
  await page.locator('#others').hover();

  await page.goto('https://demoqa.com/frames');

  // frameLocator is synchronous (no await needed)
  const frame = page.frameLocator('#frame1');
  const heading = frame.locator('#sampleHeading');

  await expect(heading).toHaveText('This is a sample page');
});

