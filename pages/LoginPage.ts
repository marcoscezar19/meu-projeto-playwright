import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMessage: Locator;
  readonly statusMessage: Locator;
  readonly credentialsBox: Locator;

  // Construtor com o private page exigido pelo Requisito 1
  constructor(private page: Page) {
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginBtn = page.locator('#loginBtn');
    this.errorMessage = page.locator('#errorMessage');
    this.statusMessage = page.locator('#statusMessage');
    this.credentialsBox = page.locator('.credentials-info');
  }

  async goto() {
    await this.page.goto('');
  }

  async login(email: string, pass: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.loginBtn.click();
  }
}