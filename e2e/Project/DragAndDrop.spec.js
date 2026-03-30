//test for drag and drop functionality
import {test,expect} from '@playwright/test'
test("Test for Drag and Drop",async({page})=>{
    await page.goto("https://selenium.qabible.in")
    await page.click('#others');
    const dragItem=page.locator('span:has-text("Draggable n°1")')
    const dropDestination=page.locator('#mydropzone')
    await dragItem.dragTo(dropDestination)
    await page.pause();
})
    //to verify that the error message container is hidden