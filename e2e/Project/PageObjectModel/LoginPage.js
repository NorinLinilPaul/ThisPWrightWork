export class LoginPage{
constructor(page){
    this.page=page
    this.username=page.locator('#user-name')
    this.password=page.locator('#password')
    this.loginBtn=page.locator('#login-button')
    

        
}
async goToWebsite(url){
    await this.page.goto(url)

}
async login(userName,password){
    await this.username.fill(userName)
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.loginBtn.click()
        console.log("Login successful")
}

}