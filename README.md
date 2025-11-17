Nesse desafio desenvolveremos uma API para a adoção de animais, a FindAFriend API, utilizando SOLID e testes.

### Regras da aplicação

- [x] Deve ser possível se cadastrar como uma ORG (ONG)

- [x] Deve ser possível realizar login como uma ORG (ONG)
  - [x] Alterar banco de dados para receber senha
  - [x] Criar autenticação
  - [x] Gerar JWT

- [X] Deve ser possível cadastrar um pet (ONG) 
  - [x] Rota autenticada
  - [] Ajustar as campos que podem receber null na controller e no useCase
 
- Deve ser possível listar todos os pets disponíveis para adoção em uma cidade (Cliente)

- Deve ser possível filtrar pets por suas características (Cliente)

- Deve ser possível visualizar detalhes de um pet para adoção (Cliente)

### Regras de negócio

- Para listar os pets, obrigatoriamente precisamos informar a cidade (Cliente)
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp (ONG)
- [x] Um pet deve estar ligado a uma ORG (ONG)
- O usuário que quer adotar, entrará em contato com a ORG via WhatsApp (Cliente)
- Todos os filtros, além da cidade, são opcionais (Cliente, exceto para listar pets)
- Para uma ORG acessar a aplicação como admin, ela precisa estar logada (ONG)

### Contexto da aplicação

É comum ao estar desenvolvendo uma API, imaginar como esses dados vão estar sendo utilizados pelo cliente web e/ou mobile.

Por isso, deixamos abaixo o link para o layout da aplicação que utilizaria essa API.

[Find A Friend (APP)](https://www.figma.com/community/file/1220006040435238030)

##

## Entrega

Após concluir o desafio, você deve enviar a URL do seu código no GitHub para a plataforma. 

Além disso, que tal fazer um post no LinkedIn compartilhando o seu aprendizado e contando como foi a experiência?

É uma excelente forma de demonstrar seus conhecimentos e atrair novas oportunidades!

Feito com 💜 por Rocketseat 👋

## Repositório de consulta

Antes de acessar o repositório com o desafio concluído, recomendamos fortemente que tente realizar o desafio.

Caso tenha dúvidas/dificuldades técnicas, temos o fórum para te ajudar.
(https://github.com/rocketseat-education/ignite-nodejs-03-api-solid-nodejs-challenge)



# Readme atualizado.

# 🐾 Find a Friend API

> **Desafio SOLID - Módulo 03 | Curso Ignite RocketSeat**

Uma API RESTful desenvolvida com **Node.js, TypeScript e Fastify** para gerenciar organizações (ONGs) e animais de estimação disponíveis para adoção.

---

## 📋 Sobre o Projeto

A **Find a Friend API** é uma solução backend que conecta organizações protetoras de animais com pessoas interessadas em adotar. O projeto segue princípios **SOLID** de arquitetura de software e boas práticas de desenvolvimento.

### Principais funcionalidades:

✅ **Gerenciamento de Organizações (ONGs)**
- Cadastro seguro com criptografia de senha
- Autenticação via JWT
- Listagem de ONGs cadastradas

✅ **Gerenciamento de Animais**
- Cadastro de animais com características (idade, energia, porte)
- Filtros avançados por cidade, porte e nível de energia
- Associação com a ONG responsável

✅ **Monitoramento da API**
- Health check
- Informações do projeto e dependências
- Timestamp do servidor

---

## 🛠️ Tecnologias

| Tecnologia     | Versão           | Propósito                 |
| -------------- | ---------------- | ------------------------- |
| **Node.js**    | 20+              | Runtime JavaScript        |
| **TypeScript** | 5.8.3            | Tipagem estática          |
| **Fastify**    | 5.2.2            | Framework web rápido      |
| **Prisma**     | 6.14.0           | ORM para banco de dados   |
| **PostgreSQL** | 15+              | Banco de dados relacional |
| **JWT**        | via @fastify/jwt | Autenticação              |
| **bcryptjs**   | 3.0.2            | Hash de senhas            |
| **Vitest**     | 3.1.1            | Framework de testes       |
| **VitePress**  | 2.0.0-alpha.12   | Documentação estática     |

---

## 🚀 Quick Start

### Pré-requisitos

- Node.js 20+
- npm ou yarn
- PostgreSQL 15+
- Docker (opcional, para banco de dados)

### Instalação local

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/03_FindaFriendAPI.git
cd 03_FindaFriendAPI

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas credenciais

# 4. Executar migrações do banco
npm run prisma:migrate

# 5. Iniciar o servidor em desenvolvimento
npm run start:dev
```

A API estará disponível em `http://localhost:3333`

### Com Docker

```bash
# Iniciar PostgreSQL com Docker
docker run --name postgres-findafriend \
  -e POSTGRES_PASSWORD=seu_password \
  -e POSTGRES_DB=findafriend \
  -p 5432:5432 \
  -d postgres:15

# Executar migrações
npm run prisma:migrate

# Iniciar servidor
npm run start:dev
```

---

## 📚 Documentação

A documentação completa está disponível em:

### 📖 Rotas da API
- [API Flow Documentation](./docs/api/flow.md) - Documentação detalhada de todas as rotas com exemplos

### 💾 Instalação
- [Instalação Local](./docs/installation/local.md)
- [Configuração do Banco de Dados](./docs/installation/database.md)
- [Setup com Docker](./docs/installation/docker.md)
- [Pré-requisitos](./docs/installation/requirements.md)

### 📖 Guia de Uso
- [Visão Geral](./docs/guide/overview.md)
- [Tecnologias Utilizadas](./docs/guide/technologies.md)
- [Features](./docs/guide/features.md)

### 🧪 Desenvolvimento
- [Testes Automatizados](./docs/development/testing.md)
- [Bibliotecas e Dependências](./docs/development/libraries.md)

### 🗺️ Roadmap
- [Plano de Desenvolvimento](./docs/roadmap/roadmap.md)

---

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Testes unitários
npm run test:unit

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:coverage

# Testes com interface gráfica
npm run test:ui
```

---

## 📥 Postman Collection

Uma collection completa do Postman está disponível na raiz do projeto:

```bash
find_a_friend_API.postman_collection.json
```

### Como importar:

1. Abra o **Postman**
2. Clique em **"Import"**
3. Selecione o arquivo `find_a_friend_API.postman_collection.json`
4. A collection será importada com:
   - ✅ Todas as rotas pré-configuradas
   - ✅ Scripts de pré-request (geração de CNPJ, telefone)
   - ✅ Testes automatizados
   - ✅ Variáveis de ambiente

[Ver documentação completa da collection](./docs/api/flow.md#-importar-collection-no-postman)

---

## 📊 Endpoints Principais

### 🏥 System

| Método | Rota         | Descrição                   |
| ------ | ------------ | --------------------------- |
| `GET`  | `/health`    | Verificar saúde da API      |
| `GET`  | `/about`     | Informações do projeto      |
| `GET`  | `/timestamp` | Timestamp atual do servidor |

### 🏢 Organizações

| Método | Rota    | Descrição      | Auth |
| ------ | ------- | -------------- | ---- |
| `POST` | `/org`  | Criar nova ONG | ❌    |
| `GET`  | `/org`  | Listar ONGs    | ❌    |
| `POST` | `/auth` | Autenticar ONG | ❌    |

### 🐾 Animais

| Método | Rota                  | Descrição          | Auth |
| ------ | --------------------- | ------------------ | ---- |
| `POST` | `/pet/create`         | Criar novo animal  | ✅    |
| `POST` | `/pet/list-by-city`   | Listar por cidade  | ❌    |
| `POST` | `/pet/search-by-city` | Buscar com filtros | ❌    |

---

## 🔐 Autenticação

A API utiliza **Bearer Token (JWT)** para endpoints protegidos.

### Fluxo:

```bash
# 1. Autenticar
curl -X POST http://localhost:3333/auth \
  -H "Content-Type: application/json" \
  -d '{
    "cnpj": "84.541.842/0001-40",
    "password": "Zx8Cv7Bnn"
  }'

# 2. Usar token em requisições protegidas
curl -X POST http://localhost:3333/pet/create \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{...}'
```

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev          # Servidor em modo watch
npm run build              # Build para produção
npm start                  # Executar versão compilada

# Banco de dados (Prisma)
npm run prisma:generate    # Gerar cliente Prisma
npm run prisma:pull        # Sincronizar schema
npm run prisma:migrate     # Criar migração

# Testes
npm test                   # Todos os testes
npm run test:unit          # Testes unitários
npm run test:e2e           # Testes e2e
npm run test:coverage      # Cobertura
npm run test:ui            # Interface gráfica

# Qualidade de código (SonarQube)
npm run sonar              # Análise local
npm run sonar:ci           # Análise com CI

# Documentação
npm run docs:dev           # Servidor local
npm run docs:build         # Build estático
npm run docs:preview       # Preview do build
npm run docs:production    # Produção
```

---

## 🏗️ Arquitetura

O projeto segue princípios **SOLID**:

- **S**ingle Responsibility
- **O**pen/Closed
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion

Estrutura básica:

```bash
src/
├── http/              # Controllers e routes
├── use-cases/         # Lógica de negócio
├── repositories/      # Acesso a dados
├── entities/          # Modelos de domínio
└── server.ts          # Configuração do Fastify
```

---

## 🐛 Status & CI/CD

- ![Unit Tests](https://github.com/seu-usuario/03_FindaFriendAPI/workflows/Run%20Unit%20Tests/badge.svg)
- Testes executados em: `ci_cd` branch
- Workflow: `.github/workflows/run-unit-tests.yml`

---

## 📄 Licença

MIT © 2025 - [Vìtor Guedes](https://github.com/seu-usuario)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Contato & Suporte

Para dúvidas ou sugestões:

- 📧 Email: vitor@guedes.com
- 🐙 GitHub: [@seu-usuario](https://github.com/seu-usuario)
- 📚 Documentação: [Ver documentação completa](./docs)

---

## 🙏 Agradecimentos

- [RocketSeat](https://www.rocketseat.com.br/) pelo excelente curso Ignite
- Comunidade de desenvolvimento Node.js e TypeScript
- Todos os contribuidores

---

**Desenvolvido com ❤️ durante o Desafio SOLID - Ignite RocketSeat**



## README COM REDIRECTED PARA O GITHUB PAGES

# 🐾 Find a Friend API

> **Desafio SOLID - Módulo 03 | Curso Ignite RocketSeat**

Uma API RESTful desenvolvida com **Node.js, TypeScript e Fastify** para gerenciar organizações (ONGs) e animais de estimação disponíveis para adoção.

---

## 📋 Sobre o Projeto

A **Find a Friend API** é uma solução backend que conecta organizações protetoras de animais com pessoas interessadas em adotar. O projeto segue princípios **SOLID** de arquitetura de software e boas práticas de desenvolvimento.

### Principais funcionalidades:

✅ **Gerenciamento de Organizações (ONGs)**
- Cadastro seguro com criptografia de senha
- Autenticação via JWT
- Listagem de ONGs cadastradas

✅ **Gerenciamento de Animais**
- Cadastro de animais com características (idade, energia, porte)
- Filtros avançados por cidade, porte e nível de energia
- Associação com a ONG responsável

✅ **Monitoramento da API**
- Health check
- Informações do projeto e dependências
- Timestamp do servidor

---

## 🛠️ Tecnologias

| Tecnologia     | Versão           | Propósito                 |
| -------------- | ---------------- | ------------------------- |
| **Node.js**    | 20+              | Runtime JavaScript        |
| **TypeScript** | 5.8.3            | Tipagem estática          |
| **Fastify**    | 5.2.2            | Framework web rápido      |
| **Prisma**     | 6.14.0           | ORM para banco de dados   |
| **PostgreSQL** | 15+              | Banco de dados relacional |
| **JWT**        | via @fastify/jwt | Autenticação              |
| **bcryptjs**   | 3.0.2            | Hash de senhas            |
| **Vitest**     | 3.1.1            | Framework de testes       |
| **VitePress**  | 2.0.0-alpha.12   | Documentação estática     |

---

## 🚀 Quick Start

Para instruções detalhadas de instalação e configuração, consulte a documentação completa:

📖 **[Guia de Instalação](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/local.html)**

Lá você encontrará:
- Pré-requisitos do sistema
- Instalação local passo a passo
- Configuração com Docker
- Configuração do banco de dados
- Variáveis de ambiente

---

## 📚 Documentação Completa

A documentação interativa e completa do projeto está disponível em:

### 🌐 **[GitHub Pages - Find a Friend API](https://vitorjobs.github.io/ignite_find_a_friend_api/)**

### 📖 Seções Disponíveis:

**API & Endpoints**
- [Documentação de Rotas](https://vitorjobs.github.io/ignite_find_a_friend_api/api/flow.html) - Todas as rotas com exemplos detalhados
- [Postman Collection](https://vitorjobs.github.io/ignite_find_a_friend_api/api/flow.html#-importar-collection-no-postman) - Como importar e usar

**Instalação & Setup**
- [Instalação Local](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/local.html)
- [Configuração do Banco de Dados](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/database.html)
- [Setup com Docker](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/docker.html)
- [Pré-requisitos](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/requirements.html)

**Guia de Uso**
- [Visão Geral](https://vitorjobs.github.io/ignite_find_a_friend_api/guide/overview.html)
- [Tecnologias Utilizadas](https://vitorjobs.github.io/ignite_find_a_friend_api/guide/technologies.html)
- [Features](https://vitorjobs.github.io/ignite_find_a_friend_api/guide/features.html)

**Desenvolvimento**
- [Testes Automatizados](https://vitorjobs.github.io/ignite_find_a_friend_api/development/testing.html)
- [Bibliotecas e Dependências](https://vitorjobs.github.io/ignite_find_a_friend_api/development/libraries.html)
- [Próximos Passos](https://vitorjobs.github.io/ignite_find_a_friend_api/development/next-steps.html)

**Roadmap**
- [Plano de Desenvolvimento](https://vitorjobs.github.io/ignite_find_a_friend_api/roadmap/roadmap.html)

---

## 🧪 Testes

Para instruções completas sobre como executar testes, consulte:

📖 **[Documentação de Testes](https://vitorjobs.github.io/ignite_find_a_friend_api/development/testing.html)**

---

## 📥 Postman Collection

Uma collection completa do Postman está disponível na raiz do projeto com todas as rotas pré-configuradas, scripts de pré-request e testes automatizados.

Para instruções detalhadas de como importar e utilizar a collection:

📖 **[Guia de Importação - Postman Collection](https://vitorjobs.github.io/ignite_find_a_friend_api/api/flow.html#-importar-collection-no-postman)**

---

## 📊 Endpoints Principais

### 🏥 System

| Método | Rota         | Descrição                   |
| ------ | ------------ | --------------------------- |
| `GET`  | `/health`    | Verificar saúde da API      |
| `GET`  | `/about`     | Informações do projeto      |
| `GET`  | `/timestamp` | Timestamp atual do servidor |

### 🏢 Organizações

| Método | Rota    | Descrição      | Autenticação |
| ------ | ------- | -------------- | ------------ |
| `POST` | `/org`  | Criar nova ONG | ❌            |
| `GET`  | `/org`  | Listar ONGs    | ❌            |
| `POST` | `/auth` | Autenticar ONG | ❌            |

### 🐾 Animais

| Método | Rota                  | Descrição          | Autenticação |
| ------ | --------------------- | ------------------ | ------------ |
| `POST` | `/pet/create`         | Criar novo animal  | ✅            |
| `POST` | `/pet/list-by-city`   | Listar por cidade  | ❌            |
| `POST` | `/pet/search-by-city` | Buscar com filtros | ❌            |

Para exemplos práticos e detalhados de cada endpoint:

📖 **[Documentação Completa de Rotas](https://vitorjobs.github.io/ignite_find_a_friend_api/api/flow.html)**

---

## 🔐 Autenticação

A API utiliza **Bearer Token (JWT)** para endpoints protegidos.

Para entender o fluxo de autenticação e exemplos:

📖 **[Guia de Autenticação](https://vitorjobs.github.io/ignite_find_a_friend_api/api/flow.html#--autenticação)**

---

## 📝 Scripts Disponíveis

Consulte a documentação para lista completa de scripts e como utilizá-los:

📖 **[Documentação de Setup](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/local.html)**

---

## 🏗️ Arquitetura

O projeto segue princípios **SOLID** de arquitetura de software:

- **S** - Single Responsibility
- **O** - Open/Closed
- **L** - Liskov Substitution
- **I** - Interface Segregation
- **D** - Dependency Inversion

Para mais detalhes sobre a arquitetura e estrutura do projeto:

📖 **[Visão Geral da Arquitetura](https://vitorjobs.github.io/ignite_find_a_friend_api/guide/overview.html)**

---

## 🐛 Status & CI/CD

- ![Unit Tests](https://github.com/seu-usuario/03_FindaFriendAPI/workflows/Run%20Unit%20Tests/badge.svg)
- Testes executados automaticamente na branch `ci_cd`
- Workflow configurado em: `.github/workflows/run-unit-tests.yml`

---

## 📄 Licença

MIT © 2025 - [Vìtor Guedes](https://github.com/vitorjobs)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Contato & Suporte

Para dúvidas ou sugestões:

- 📧 Email: vitor@guedes.com
- 🐙 GitHub: [@vitorjobs](https://github.com/vitorjobs)
- 📚 Documentação: [GitHub Pages](https://vitorjobs.github.io/ignite_find_a_friend_api/)

---

## 🙏 Agradecimentos

- [RocketSeat](https://www.rocketseat.com.br/) pelo excelente curso Ignite
- Comunidade de desenvolvimento Node.js e TypeScript
- Todos os contribuidores

---

**Desenvolvido com ❤️ durante o Desafio SOLID - Ignite RocketSeat**