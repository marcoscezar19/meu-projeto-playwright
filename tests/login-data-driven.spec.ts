import { test, expect } from '../fixtures/auth.fixture';

// Massa de dados 
const cenarios = [
    {
        descricao: 'Login com perfil de administrador (Sucesso)',
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
        senha: 'AdmimPassword123',
        deveLogarcomSucesso: false,
    },
    {
        descricao: 'login com usuário bloqueado (erro)',
        email: 'blocked@system.com',
        senha: 'Blocked123',
        deveLogarComSucesso: false,
    }
];

test.describe('Autenticação - Testes Data-Driven (LojaQA', () => {
    
    for (const cenario of cenarios) {
        test(`Data-Driven: ${cenario.descricao}`, async ({ LoginPage , page}) => {
            // Executa login com os dados da array atual
            await LoginPage.login(cenario.email, cenario.senha);

            if (cenario.deveLogarComSucesso) {
                // Valida o redirecionamento para o painel no caminho feliz
                await expect(page).toHaveURL(/.*painel\.html/);
            } else {
                // Valida que a mensagem de erro aparece para os cenários inválidos/bloqueados
                await expect(loginPage.errorMessage).toBeVisible();
            }
        });
    }
});