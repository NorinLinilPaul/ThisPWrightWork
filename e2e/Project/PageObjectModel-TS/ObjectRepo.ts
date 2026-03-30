import { ProductPage} from "./ProductPage.ts"
import { LoginPage } from "../PageObjectModel-TS/LoginPage.ts"
import { CartPage } from "../PageObjectModel-TS/CartPage.ts"
import { CheckoutPage } from "../PageObjectModel-TS/CheckoutPage.ts"
import { Page } from "@playwright/test"

export class ObjectRepo{
    page:Page
    pdt:ProductPage
    loginpage:LoginPage
    cartobj:CartPage
    checkoutobj:CheckoutPage
    checkoutMsgObj:CheckoutPage
constructor(page: Page){
    this.page=page
    this.pdt = new ProductPage(page) //imported the product page class to the test
    this.loginpage=new LoginPage(page)
    this.cartobj=new CartPage(page)
    this.checkoutobj=new CheckoutPage(page)
    this.checkoutMsgObj=new CheckoutPage(page)
    
}
getLoginPage(){
    return this.loginpage 
    //returns the instance of the login page class to access its methods in the test
}
getProductPage(){
    return this.pdt
}
getCartPage(){
    return this.cartobj
}
getCheckoutPage(){
return this.checkoutobj
}


}