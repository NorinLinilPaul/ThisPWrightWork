import { expect,Locator,Page } from "@playwright/test"




export class LoginPage{
    page: Page
    username:Locator
    password:Locator
    loginBtn:Locator

constructor(page: Page){
    this.page=page
    this.username=page.locator('#user-name')
    this.password=page.locator('#password')
    this.loginBtn=page.locator('#login-button')
    

        
}
async goToWebsite(url: string){
    await this.page.goto(url)

}
async login(userName: string,password: string){
    await this.username.fill(userName)
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.loginBtn.click()
        console.log("Login successful")
}

}