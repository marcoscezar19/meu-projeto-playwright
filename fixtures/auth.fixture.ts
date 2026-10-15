import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Define o tipo de fixture que sera injectada nos testes
type MyFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        // 1. Instanciar a page object
        const loginPage = new LoginPage(page);

        // 2. Navega automaticamente para a página de login antes de entregar para o teste
        await loginPage.goto();

        // 3. Entrega a instancia pronta para o teste rodar
        await use(loginPage);
    },
});
// Exporta também o expect para mantermos o padrão dos arquivos de spec
export { expect } from '@playwright/test';