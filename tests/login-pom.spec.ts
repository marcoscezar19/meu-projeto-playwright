import { test, expect } from '../fixtures/auth.fixture';

test.describe('Autenticação - LojaQA (POM com Fixture)', () => {

  test('Cenário 1 (Caminho Feliz): Deve realizar login com sucesso e redirecionar para o painel', async ({ loginPage, page }) => {
    await loginPage.login('admin@system.com', 'AdminPassword123');
    await expect(page).toHaveURL(/.*painel\.html/);
  });

  test('Cenário 2 (Caminho Triste): Deve exibir mensagem de erro ao tentar logar com senha incorreta', async ({ loginPage }) => {
    await loginPage.login('admin@system.com', 'AdminPassword123'); // Ou uma senha incorreta
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('Cenário 3 (Regra de Negócio): O botão de login deve iniciar desabilitado', async ({ loginPage }) => {
    await expect(loginPage.loginBtn).toBeDisabled();
  });

});