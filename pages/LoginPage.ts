import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;
    readonly errorMessage: Locator;
    readonly statusMessage: Locator;

    constructor(private page: Page) {
        this.page = page;

        this.emailImput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('#loginBtn');
        this.errorMessage = page.locator('#errorMessage');
        this.statusMessage = page.locator('#statusMessage');
    }

    async goto() {
        await this.page.goto('login.html');
    }

    async login(email: string, pass: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginBtn.click();
    }
}