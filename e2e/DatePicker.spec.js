import {test} from '@playwright/test';        

test('Date picker Test', async({page})=>{
    await page.goto("https://selenium.qabible.in/date-picker.php")

    await page.waitForLoadState('networkidle');
    await page.locator('input.form-control.datepicker').waitFor({ state: 'visible' });
    //waiting for the date picker input field to be visible before interacting with it.
    await page.locator('#single-input-field').click()
    await page.locator("div[class='datepicker-days'] th[class='datepicker-switch']").click()
    await page.locator("div[class='datepicker-months'] th[class='datepicker-switch']").click()
    const year= 2000
    const month= 6
    const date=19
    // await page.locator('div[class="datepicker-years"] th[class="datepicker-switch"]').click()
    
    // console.log(yearlisted)
    while(true){
    const yearlisted=await page.locator('div[class="datepicker-years"] th[class="datepicker-switch"]').textContent()        
    //split the yearlisted to get the start and end year
    const startyear=parseInt(yearlisted.split('-')[0]) //use parseint method to convert the string to number
    //startyear is array and we are using split method to split the string into an array and then we are using 0th index to get the start year
    const endyear=parseInt(yearlisted.split('-')[1]) //use parseint method to convert the string to number
    //start year is in 0th index and end year is in 1st index
    console.log(startyear)
    console.log(endyear)
    if(year>=startyear && year<=endyear){
        console.log("year is in the list") //to check in between the start and end year
        
        //if true then click on the year then break the loop
        break
    }
    await page.locator('div[class="datepicker-years"] th[class="prev"]').click()
    //then click the year listed with the previous button to get the previous year list until we get the year in the list
}// close while loop since we have to click the previous button until we get the year in the list    
    await page.locator('div[class="datepicker-years"]').getByText(year.toString(), { exact: true }).click()
    //now goes to month; then select month
    await page.locator('.month').nth(month-1).click() //month is in 0 index so we are using month-1
    //now select date
    await page.locator('.day').nth(date-1).click() //date is in 0 index so we are using date-1



       
    await page.pause()
})
            
// test("Date Picker",async({page})=>{
//     await page.goto('https://selenium.qabible.in/date-picker.php')
//     const datepicker=page.locator("#single-input-field")
//     await datepicker.waitFor({state:"visible"})
//     await datepicker.click()

//     await page.locator("div[class='datepicker-days'] th[class='datepicker-switch']").click()

//     await page.locator("div[class='datepicker-month'] th[class='datepicker-switch']").click()
//      //for month
    
    
//     await page.pause()
// })