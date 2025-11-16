# Guia de Testes de Desenvolvimento

Este documento apresenta uma visão geral dos testes de desenvolvimento do projeto, detalhando os tipos de testes, ferramentas utilizadas e instruções para execução.

---

## 1. Visão Geral

A adoção de testes automatizados é fundamental para garantir a qualidade, estabilidade e evolução segura do código. Utilizamos o **Vitest** como framework principal, por sua rapidez, leveza e facilidade de configuração, sendo ideal para projetos Node.js modernos.

---

## 2. Estrutura dos Testes

### 2.1 Tipos de Testes

#### **Testes Unitários**
- **Objetivo:** Validar unidades isoladas de código (funções, métodos, classes).
- **Localização:** `src/use-cases`
- **Características:**
  - Arquivos terminam com `.spec.ts`
  - Utilizam mocks para isolar dependências
  - Executados em ambiente Node.js
  - Rápidos, fornecem feedback imediato
  - Facilitam refatoração e documentação do comportamento esperado

#### **Testes End-to-End (E2E)**
- **Objetivo:** Simular fluxos completos do usuário, garantindo integração entre componentes.
- **Localização:** `src/http/controllers`
- **Características:**
  - Arquivos terminam com `.spec.ts`
  - Utilizam ambiente de teste customizado com Prisma
  - Executados em ambiente Node.js
  - Mais lentos, mas abrangentes
  - Validam requisitos do usuário e fluxos críticos

---

## 3. Configuração do Vitest

A configuração principal está no arquivo `vitest.config.ts` na raiz do projeto. Principais pontos:

```ts
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    host: '0.0.0.0',
    port: 51205,
  },
  test: {
    include: ['**/*.spec.ts'],
    exclude: [
      '**/node_modules/**',
      '**/build/**',
      'vite.config.ts'
    ],
    environment: 'node',
    globals: true,
    clearMocks: true,
    isolate: true,
    allowOnly: !process.env.CI,
    ui: true,
    api: { port: 51024 },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'lcov', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        '**/node_modules/**',
        '**/build/**',
        '**/prisma/**',
        '**/*.spec.ts',
        '**/test/**',
        '**/*.d.ts',
        '**/types/**',
        '**/docker/**',
        '**/my-docs-site/**',
        '**/vitest.config.ts',
        '**/READE/**',
        '**/src/.env/**',
        '**/src/.env_example/**',
        '**/vitest.config.ts',
        '**/eslint.config.mjs',
      ]
    },
    workspace: [
      {
        extends: true,
        test: {
          name: 'unit',
          dir: 'src/use-cases'
        }
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          dir: 'src/http/controllers',
          environment: './prisma/vitest-environment-prisma/prisma-test-environment.ts'
        }
      }
    ]
  }
});
```

---

## 4. Execução dos Testes

Os principais scripts disponíveis no projeto são:

| Script          | Descrição                                                             |
| --------------- | --------------------------------------------------------------------- |
| `test`          | Executa todos os testes uma única vez.                                |
| `test:watch`    | Executa os testes em modo observador (watch).                         |
| `test:unit`     | Executa apenas os testes unitários (`src/use-cases`).                 |
| `test:e2e`      | Executa apenas os testes E2E (`src/http/controllers`).                |
| `test:coverage` | Executa todos os testes e gera relatórios de cobertura de código.     |
| `test:ci`       | Executa testes com cobertura e relatório em formato adequado para CI. |
| `test:ui`       | Inicia a interface gráfica do Vitest em modo observador.              |

> **Observação:**  
> No ambiente Docker, o container executa apenas o script `test:ui`, disponibilizando a interface de testes em:  
> [http://172.27.0.40:51024/__vitest__/#/](http://172.27.0.40:51024/__vitest__/#/)

A interface permite visualizar o status dos testes, detalhes de falhas e relatórios de cobertura de forma interativa. Certifique-se de que o servidor de testes esteja em execução para acessar a interface.

---

## 5. Relatórios de Cobertura

Após a execução dos testes, os relatórios de cobertura são gerados na pasta `coverage`, disponíveis em vários formatos (incluindo HTML para visualização detalhada).

---

## 6. Conclusão

A implementação de testes automatizados com Vitest garante qualidade, segurança e facilidade de manutenção do código. Manter uma boa cobertura de testes previne regressões e contribui para a evolução sustentável do projeto.

