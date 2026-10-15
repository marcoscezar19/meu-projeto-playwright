# 🛒 Automação de Testes E2E - LojaQA (Playwright & TypeScript)

Repositório desenvolvido como parte da atividade prática de automação de testes E2E, aplicando padrões profissionais de engenharia de qualidade de software. O projeto moderniza uma suíte de testes legada de login utilizando **Page Object Model (POM)**, **Fixtures Customizadas** e **Data-Driven Testing** com **Playwright** e **TypeScript**.

---

## 🗂️ Estrutura do Projeto

O projeto segue uma arquitetura limpa e organizada em camadas:

```text
meu-projeto-playwright/
├── fixtures/
│   └── auth.fixture.ts          # Fixture customizada estendendo o base.extend
├── pages/
│   └── LoginPage.ts             # Classe Page Object encapsulando elementos e ações
├── tests/
│   ├── login-pom.spec.ts        # Testes E2E consumindo o Page Object e Fixture
│   └── login-data-driven.spec.ts# Testes dinâmicos baseados em massa de dados (for...of)
├── .gitignore                   # Arquivos e pastas ignorados pelo Git
├── package.json                 # Dependências e scripts do projeto
├── package-lock.json            # Rastreamento exato de versões de pacotes
└── playwright.config.ts         # Arquivo de configuração global do Playwright
```
## 🛠️ Tecnologias Utilizadas
** * Playwright - Framework moderno para testes E2E.

** * TypeScript - Superset do JavaScript para tipagem estática e segurança de código.

** * Node.js - Ambiente de execução de pacotes.

## 📋 Requisitos Implementados
1. Page Object Model (pages/LoginPage.ts):

Construtor com injeção de dependência (private page: Page).

Mapeamento encapsulado de seletores (#email, #password, #loginBtn, #errorMessage, #statusMessage).

Métodos goto() e login(email, password) estruturados sem nenhuma asserção do tipo expect() interna.

2. Testes E2E Limpos (tests/login-pom.spec.ts):

Cenários cobrindo caminho feliz, caminho triste e regras de negócio.

Total ausência de seletores CSS dispersos nos arquivos de spec.

3. Fixture Customizada (fixtures/auth.fixture.ts):

Utilização de base.extend para injetar instâncias e automatizar a navegação inicial.

4. Data-Driven Testing (tests/login-data-driven.spec.ts):

Validação dinâmica de múltiplos perfis e cenários utilizando loops for...of com massa de dados oficial.

## 🚀 Como Executar o Projeto
Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina.

Instalação
* ** 1. Clone o repositório:
```bash
git clone https://github.com/marcoscezar19/meu-projeto-playwright.git
```

* ** 2. Acesse a pasta do projeto:
```bash
cd meu-projeto-playwright
```

* ** 3. Instale as dependências:

npm install

* ** 4. Instale os navegadores do Playwright:

npx playwright install

## 🧪 Executando os Testes
* **Rodar os testes em modo headless (fundo):**
```bash
npx playwright test
```

* **Rodar os testes com a interface gráfica interativa (Playwright UI):**
```bash
npx playwright test --ui
```
## 👤 Autor

Desenvolvido por Marcos Cézar do Nascimento Carneiro.

---

### Como criar o arquivo no VS Code:
1. Clique no ícone de **Novo Arquivo** na barra lateral do VS Code (na raiz do projeto).
2. Nomeie o arquivo exatamente como **`README.md`**.
3. Cole o texto acima lá dentro, salve com `Ctrl + S` e faça o seu último commit para o GitHub!