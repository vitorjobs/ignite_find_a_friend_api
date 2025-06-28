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
      all: true, // Gera cobertura para todos os arquivos, testados ou não
      branches: 80,
      lines: 80,
      functions: 80,
      statements: 80, // Metas mínimas de cobertura
      exclude: [
        '**/node_modules/**',
        '**/build/**',
        '**/prisma/**',
        '**/*.spec.ts',
        '**/test/**',
        '**/*.d.ts',
        '**/types/**'
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
})
