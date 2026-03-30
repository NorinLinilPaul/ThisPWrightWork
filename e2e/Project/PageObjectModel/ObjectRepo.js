import { ProductPage} from "./ProductPage"
import { LoginPage } from "./LoginPage"
import { CartPage } from "./CartPage"
import { CheckoutPage } from "./CheckoutPage"

export class ObjectRepo{
constructor(page){
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