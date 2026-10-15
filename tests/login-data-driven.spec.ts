import { test, expect } from '../fixtures/auth.fixture';

const cenarios = [
  {
    descricao: 'Login com perfil de Administrador (Sucesso)',
    email: 'admin@system.com',
    senha: 'AdminPassword123',
    deveLogarComSucesso: true,
  },
  {
    descricao: 'Login com perfil de Cliente (Sucesso)',
    email: 'user@system.com',
    senha: 'UserPassword123',
    deveLogarComSucesso: true,
  },
  {
    descricao: 'Login com senha incorreta (Erro)',
    email: 'admin@system.com',
    senha: 'SenhaErrada123',
    deveLogarComSucesso: false,
  },
  {
    descricao: 'Login com usuário bloqueado (Erro)',
    email: 'blocked@system.com',
    senha: 'Blocked123',
    deveLogarComSucesso: false,
  }
];

test.describe('Autenticação - Testes Data-Driven (LojaQA)', () => {

  for (const cenario of cenarios) {
   
    test(`Data-Driven: ${cenario.descricao}`, async ({ loginPage }) => {
      
      await loginPage.login(cenario.email, cenario.senha);

      if (cenario.deveLogarComSucesso) {
        // Valida o redirecionamento acessando a propriedade .page que existe dentro da classe LoginPage
        await expect(loginPage.page).toHaveURL(/.*painel\.html/);
      } else {
        await expect(loginPage.errorMessage).toBeVisible();
      }

    });
  }

});