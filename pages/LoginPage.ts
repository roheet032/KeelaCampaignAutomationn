import {Page,Locator} from "@playwright/test"

export default class LoginPage{

     page: Page;
     emailInput: Locator;
     passwordInput: Locator;
     loginBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#user-email');
        this.passwordInput = page.locator('#user-password');
        this.loginBtn = page.locator('[type="submit"]');
    }

    async gotoKeelaLoginPage(){
        await this.page.goto('https://test3.keela.co/')
    }

    async login(email:string,password:any){

        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()


    }
}