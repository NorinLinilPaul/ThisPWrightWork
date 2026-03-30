import{expect, Locator, Page} from '@playwright/test'


export class CartPage{
    cartitem: Locator
    Checkout: Locator
    page: Page
    constructor(page: Page){
        this.page=page
        this.cartitem=page.locator('.cart_item')
        this.Checkout=page.locator('#checkout')
    }
async verifyProductInCart(productName:string){

    await this.cartitem.first().waitFor() //wait for the first cart item to be visible before proceeding
    const productSeen=await this.page.locator(`.inventory_item_name:has-text("${productName}")`).isVisible()
     
}
async clickCheckout(){
    await this.Checkout.click()
}
}
