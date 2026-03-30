import {expect,Locator, Page} from '@playwright/test' 



export class ProductPage{
  productTitle:Locator
inventoryItemLoc:Locator
shoppingCart:Locator
page:Page
  constructor(page: Page){
    this.productTitle = page.locator('.inventory_item_name')
    this.inventoryItemLoc = page.locator('.inventory_item_description')
    this.shoppingCart = page.locator('.shopping_cart_link')
    this.page = page
  }

  async searchProduct(productName:string){
    //const productTitle = page.locator('.inventory_item_name')
    await this.productTitle.first().waitFor()
    const titles = await this.productTitle.allTextContents()
    // const inventoryItemLoc = this.page.locator('.inventory_item_description')
    const inventoryCount = await this.inventoryItemLoc.count()
    console.log("Count" + inventoryCount)
    for(let i =0; i < inventoryCount; i++){
      if(await this.inventoryItemLoc.nth(i).locator('.inventory_item_name').textContent() === productName ){
        await this.inventoryItemLoc.nth(i).locator('text=Add to cart').click()
        break
      }
    }
  }

async clickCart(){
  await this.shoppingCart.click()
}

}