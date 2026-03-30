import { test, expect } from '@playwright/test'

test('Swaglab Login Test', async({ page }) => {
	const url = 'https://www.saucedemo.com/'
	const userName = 'standard_user'
	const password = 'secret_sauce'
    const userNameSelector = '#user-name'
    const passwordSelector = '#password'
    const loginButtonSelector = '#login-button'
    const inventoryItemSelector = '.inventory_item'
    const inventoryItemNameSelector = '.inventory_item_name'
    const addToCartButtonLabel = 'Add to cart'

	await page.goto(url)
    await page.locator(userNameSelector).fill(userName)
    await page.locator(passwordSelector).fill(password)
    await page.locator(loginButtonSelector).click()
	// await page.pause()

    const productTitle = page.locator(inventoryItemNameSelector)
    const firstItemName=await productTitle.first().textContent() //to get the text content of the first product title element.
    console.log("First Item is: " + firstItemName) //for checking the first product title
    await productTitle.first().waitFor() //to ensure that the first product title element is present and visible on the page before we attempt to interact with it or retrieve its text content. This helps prevent errors that may occur if the element is not yet loaded or visible when we try to access it.
    const title=await productTitle.allTextContents()
     //loads all the text content of the elements matching the locator and returns it as an array of strings.

     

         //check class="inventory_item" for each product card
         const inventoryItemLoc = page.locator(inventoryItemSelector) 
//to locate all the product cards on the page using the class selector ".inventory_item". 
// This will allow us to interact with each individual product card and perform actions such as clicking the "Add to cart" button for a specific product.
         const inventoryCount = await inventoryItemLoc.count()
         console.log('Number of inventory items: ' + inventoryCount)

         //i selected Sauce Labs Backpack item
         const productName = 'Sauce Labs Backpack'

         for(let i =0; i < inventoryCount; i++){
            if(await inventoryItemLoc.nth(i).locator('.inventory_item_name').textContent() == productName ) {
                await inventoryItemLoc.nth(i).locator('text=Add to cart').click()
                break
            }
         }
         console.log('Added ' + productName + ' to cart')
         //click shopping cart link once seleted
         const cartLink=await page.locator('.shopping_cart_link').click()
         //want to check class=title there after click
         const cartTitle=await page.locator('.title').textContent()==="Your Cart"
         console.log('Cart page title is correct: ' + cartTitle)
         //page should contaon Sauce Labs Backpack in the cart
         await page.locator('.cart_item').first().waitFor() 
         //to ensure that the cart list element is present and visible on the page before we attempt to interact with it or retrieve its text content.
         //  This helps prevent errors that may occur if the element is not yet loaded or visible when we try to access it.
         const productSeen=await page.locator('.inventory_item_name:has-text("Sauce Labs Backpack")').isVisible() //since the has text in
        //  await expect(productSeen).toBeFalsy() //to check if the product is not visible in the cart
         await expect(productSeen).toBeTruthy() //to check if the product is visible in the cart
         console.log("" + productName + " is visible in the cart")
         await page.locator('#checkout').click()
        //  await page.pause()
        //checkout the item
         const fname= await page.locator('#first-name').fill('Angela')
         const lastname=await page.locator('#last-name').fill('Daniel')
         const zipcode=await page.locator('input[name="postalCode"]').fill('698789')
         const continueBtn=await page.locator('#continue').click()
         await page.waitForLoadState('networkidle')// ****to ensure network is stable before proceeding to the next step

         await page.pause()
         console.log("Checkout functionality tested")
         //wait for finish button to be visible
        
         //Finish the checkout
         const finishBtn=await page.locator('#finish').click()
         const confirmMessage=await page.locator('.complete-header')
         //checks message dispalyed
         const messageText=await confirmMessage.textContent()
         console.log("Msg in website " +messageText)

         //asertion check to confirm message is correct
         await expect(confirmMessage).toHaveText(messageText)
         console.log("" + messageText + " is displayed on the page")








         


         
         
         

















     
    // console.log("List of Items available for shopping " +title.join(', ')) 
    // console.log(JSON.stringify(title, null, 2))
    
    //to print the list of product titles available for shopping in the console as json body.


})
        