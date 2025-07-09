import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()], // Suporte a aliases do tsconfig

  test: {
    dir: 'src', // Diretório base para os testes

    include: ['**/*.spec.ts'], // Padrão de arquivos de teste
    exclude: [
      '**/node_modules/**',
      '**/build/**',
      'vite.config.ts'
    ],

    environment: 'node', // Ambiente Node.js para os testes
    globals: true, // Permite uso de describe/it/expect sem import

    clearMocks: true, // Limpa mocks entre os testes
    isolate: true, // Isola cada arquivo de teste para evitar vazamento de estado
    watch: false, // Desativa modo watch por padrão
    allowOnly: !process.env.CI, // Bloqueia uso de .only no CI

    coverage: {
      provider: 'v8', // Engine de cobertura mais rápida
      reporter: ['text', 'json', 'lcov'], // Tipos de relatório
      reportsDirectory: './coverage',
      // all: true, // Gera cobertura para todos os arquivos, testados ou não
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
          // environment: './prisma/vitest-environment-prisma/prisma-test-environment.ts'
        }
      }
    ]
  }
})
