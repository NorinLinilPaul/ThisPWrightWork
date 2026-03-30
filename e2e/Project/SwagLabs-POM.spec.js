import { test, expect } from '@playwright/test'
import { ObjectRepo } from './PageObjectModel/ObjectRepo.js'
const testdata=require('../Utils/Data.json') //imported the data from the JSON file to use in the test
const i=JSON.parse(JSON.stringify(testdata)) //converted the data to a string format to use in the test
//now its not used; since we have for loop to iterate through the test data; 
// if we use this then it will only run for the last data in the JSON file; since the data is in string format;
//  it will be treated as a single string and not as an array of objects; so we need to convert it back to JSON object to access the data in the test;
//then json.parse is used to convert the string back to a JSON object to access the data in the test; string cant be used to call functions
for(const i of testdata)
    {


test(`Swaglab Login Test${i.productName}`, async({ page }) => {
	const url = i.url
	const userName = i.userName
	const password = i.password
    const userNameSelector = '#user-name'
    const passwordSelector = '#password'
    const loginButtonSelector = '#login-button'
    const inventoryItemSelector = '.inventory_item'
    const inventoryItemNameSelector = '.inventory_item_name'
    const addToCartButtonLabel = 'Add to cart'
    const objectRepo = new ObjectRepo(page) //created an instance of the object repository class to access the page objects
    const loginpage=objectRepo.getLoginPage() //called the getLoginPage method from the object repository class to get the instance of the login page class
    const pdt=objectRepo.getProductPage() //called the getProductPage method from the object repository class to get the instance of the product page class
    const cartobj=objectRepo.getCartPage() //called the getCartPage method from the object repository class to get the instance of the cart page class
    const checkoutobj=objectRepo.getCheckoutPage() //called the getCheckoutPage method from the object repository class to get the instance of the checkout page class





	await loginpage.goToWebsite(i.url) //called the goToWebsite method from the login page class to navigate to the website
    await loginpage.login(i.userName,i.password) //called the login method from the login page class to perform login action
	// await page.pause()
    await pdt.searchProduct(i.productName) //called the searchProduct method from the product page class to search for a product and add it to the cart
    await pdt.clickCart()
    
    await cartobj.verifyProductInCart(i.productName)
    await cartobj.clickCheckout()
    await page.pause()
    
    await checkoutobj.checkOutFunctionality()
    const messageText="Thank you for your order!"
    
    await checkoutobj.confirmCheckoutMsg(messageText)
    await page.pause()

        
})

}
        