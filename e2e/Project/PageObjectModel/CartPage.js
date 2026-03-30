export class CartPage{
    constructor(page){
        this.page=page
        this.cartitem=page.locator('.cart_item')
        this.Checkout=page.locator('#checkout')
    }
async verifyProductInCart(productName){

    await this.cartitem.first().waitFor() //wait for the first cart item to be visible before proceeding
    const productSeen=await this.page.locator(`.inventory_item_name:has-text("${productName}")`).isVisible()
     
}
async clickCheckout(){
    await this.Checkout.click()
}
}
