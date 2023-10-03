import {Page,Locator} from "@playwright/test"
import dotenv from "dotenv"

// Load environment variables from .env file
dotenv.config();

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

    async login(){
        const email:string= process.env.COMPANY_EMAIL as string;
        const password:any = process.env.COMPANY_PASSWORD;

        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()


    }
}