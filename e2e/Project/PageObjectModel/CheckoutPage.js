import { expect } from "@playwright/test"

export class CheckoutPage{
    constructor(page){
        this.page=page
        this.fname=page.locator('#first-name')
        this.lastname=page.locator('#last-name')
        this.zip=page.locator('input[name="postalCode"]')
        this.continueBtn=page.locator('#continue')
        this.finishBtn=page.locator('#finish')
        this.confirmMessage=page.locator('.complete-header')

        // const finishBtn=await page.locator('#finish').click()
        // //  const confirmMessage=await page.locator('.complete-header')
        // //  
    }

 async checkOutFunctionality(){   
    await this.fname.fill("Angela")
    await this.lastname.fill("Danny")
    await this.zip.fill("789888")

    await this.continueBtn.click()
    await this.page.waitForLoadState('networkidle')
    console.log("Checkout functionality tested")
 }

 
async confirmCheckoutMsg(messageText){

    await this.finishBtn.click()
     
     console.log("Msg in website " +messageText)
    //asertion check to confirm message is correct
    await expect(this.confirmMessage).toHaveText(messageText)
    console.log("" + messageText + " is displayed on the page")

}
 
} 