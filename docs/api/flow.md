
# 🐾 Find a Friend API - Documentação Completa

Documentação detalhada de todas as rotas e recursos da **Find a Friend API** - Desafio SOLID do curso Ignite da RocketSeat.

## Índice

- [🐾 Find a Friend API - Documentação Completa](#-find-a-friend-api---documentação-completa)
  - [Índice](#índice)
    - [Health](#health)
    - [About](#about)
    - [Timestamp](#timestamp)
  - [ORG (Organizações)](#org-organizações)
    - [Create Org](#create-org)
    - [Authenticate](#authenticate)
    - [List Ongs](#list-ongs)
  - [PET (Animais)](#pet-animais)
    - [Create Pet](#create-pet)
    - [List Pet By City](#list-pet-by-city)
    - [Search Pet By City](#search-pet-by-city)
  - [📥 Importar Collection no Postman](#-importar-collection-no-postman)
    - [Como importar a collection:](#como-importar-a-collection)
      - [Método 1: Importar arquivo JSON](#método-1-importar-arquivo-json)
      - [Método 2: Importar da URL](#método-2-importar-da-url)
    - [O que está incluído na collection:](#o-que-está-incluído-na-collection)
    - [Usando a collection após importação:](#usando-a-collection-após-importação)
    - [Dicas importantes:](#dicas-importantes)
    - [Arquivo da collection:](#arquivo-da-collection)
  - [🔐 Autenticação](#-autenticação)
    - [Fluxo de Autenticação](#fluxo-de-autenticação)
    - [Como autenticar:](#como-autenticar)
    - [Exemplo de fluxo:](#exemplo-de-fluxo)
  - [📊 Status Codes](#-status-codes)
  - [🚀 Exemplo de Fluxo Completo](#-exemplo-de-fluxo-completo)
  - [📝 Notas Importantes](#-notas-importantes)
    - [Postman Collection](#postman-collection)
    - [Validações](#validações)
    - [Segurança](#segurança)
  - [🔗 Links Úteis](#-links-úteis)

---


### Health

Verifica o status de saúde da aplicação e retorna informações do servidor.

**Endpoint:** `GET /health`

**URL:** `http://localhost:3333/health`

**Request:**
```bash
curl -X GET http://localhost:3333/health
```

**Resposta esperada (200 OK):**

```json
{
  "Version": "1.0.0",
  "Status": "UP",
  "Timestamp": "2025-11-16T10:30:45.123Z",
  "Environment": "development",
  "Database": {
    "type": "PostgreSQL"
  },
  "Server": {
    "host": "localhost",
    "port": 3333
  }
}
```

**Validações:**
- ✅ Status code deve ser `200`
- ✅ Resposta deve conter: `Version`, `Status`, `Timestamp`, `Environment`, `Database`, `Server`
- ✅ `Database.type` deve ser uma string não vazia
- ✅ `Server.host` deve ser uma string não vazia
- ✅ `Server.port` deve ser um número positivo

---

### About

Retorna informações sobre o projeto, tecnologias utilizadas e dependências principais.

**Endpoint:** `GET /about`

**URL:** `http://localhost:3333/about`

**Request:**
```bash
curl -X GET http://localhost:3333/about
```

**Resposta esperada (200 OK):**

```json
{
  "Projeto": "Find a Friend API - Desafio SOLID",
  "Tecnologias": [
    "Node.js",
    "TypeScript",
    "Fastify",
    "Prisma",
    "PostgreSQL"
  ],
  "Documentação": "VitePress",
  "Dependencies": {
    "fastify": "^5.2.2",
    "prisma": "^6.14.0",
    "bcryptjs": "3.0.2",
    "env": "dotenv",
    "supertest": "^7.1.1",
    "vitest": "^3.1.1"
  }
}
```

**Validações:**
- ✅ Status code deve ser `200`
- ✅ Content-Type deve ser `application/json`
- ✅ Resposta deve conter: `Projeto`, `Tecnologias`, `Documentação`, `Dependencies`
- ✅ `Dependencies` deve incluir chaves: `fastify`, `prisma`, `bcryptjs`, `env`, `supertest`, `vitest`
- ✅ Cada dependência deve ser uma string não vazia

---

### Timestamp

Retorna o timestamp atual do servidor em milissegundos.

**Endpoint:** `GET /timestamp`

**URL:** `http://localhost:3333/timestamp`

**Request:**
```bash
curl -X GET http://localhost:3333/timestamp
```

**Resposta esperada (200 OK):**

```bash
1731754245123
```

**Headers:** `Content-Type: text/plain`

**Validações:**
- ✅ Status code deve ser `200`
- ✅ Content-Type deve ser `text/plain`
- ✅ Body deve ser um inteiro válido
- ✅ Valor não deve ser negativo
- ✅ Tempo de resposta < 200ms

---

## ORG (Organizações)

Rotas para gerenciamento de Organizações (ONGs) cadastradoras de animais.

### Create Org

Cria uma nova organização no sistema.

**Endpoint:** `POST /org`

**URL:** `http://localhost:3333/org`

**Headers:**
```json
Content-Type: application/json
```

**Request Body:**

```json
{
  "cnpj": "84.541.842/0001-40",
  "password": "Zx8Cv7Bnn",
  "nome": "Organização de Proteção Animal",
  "email": "contato@org.com.br",
  "contato": "(31) 99999-8888",
  "endereco": "Rua Principal, 123, Belo Horizonte - MG"
}
```

**Request cURL:**
```bash
curl -X POST http://localhost:3333/org \
  -H "Content-Type: application/json" \
  -d '{
    "cnpj": "84.541.842/0001-40",
    "password": "Zx8Cv7Bnn",
    "nome": "Organização de Proteção Animal",
    "email": "contato@org.com.br",
    "contato": "(31) 99999-8888",
    "endereco": "Rua Principal, 123, Belo Horizonte - MG"
  }'
```

**Validações de entrada:**
- ✅ `cnpj`: String formatada (XX.XXX.XXX/XXXX-XX) - gerada dinamicamente no Postman
- ✅ `password`: Mínimo 8 caracteres
- ✅ `nome`: String não vazia
- ✅ `email`: Email válido
- ✅ `contato`: Telefone válido (DD) 9XXXX-XXXX
- ✅ `endereco`: String não vazia

**Resposta esperada (201 Created):**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "cnpj": "84.541.842/0001-40",
  "nome": "Organização de Proteção Animal",
  "email": "contato@org.com.br",
  "contato": "(31) 99999-8888",
  "endereco": "Rua Principal, 123, Belo Horizonte - MG"
}
```

**Possíveis erros:**
- `409 Conflict`: CNPJ ou email já cadastrado
- `400 Bad Request`: Dados inválidos ou campos obrigatórios faltando

**Nota:** O Postman gera automaticamente:
- CNPJ válido e único
- Telefone com DDD brasileiro válido
- Email aleatório
- Endereço aleatório

---

### Authenticate

Autentica uma organização e retorna um token JWT para requisições autenticadas.

**Endpoint:** `POST /auth`

**URL:** `http://localhost:3333/auth`

**Headers:**
```bash
Content-Type: application/json
```

**Request Body:**

```json
{
  "cnpj": "84.541.842/0001-40",
  "password": "Zx8Cv7Bnn"
}
```

**Request cURL:**
```bash
curl -X POST http://localhost:3333/auth \
  -H "Content-Type: application/json" \
  -d '{
    "cnpj": "84.541.842/0001-40",
    "password": "Zx8Cv7Bnn"
  }'
```

**Resposta esperada (200 OK):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NTBlODQwMC1lMjliLTQxZDQtYTcxNi00NDY2NTU0NDAwMDAiLCJpYXQiOjE3MzE3NTQyNDUsImV4cCI6MTczMTg0MDY0NX0.xyz..."
}
```

**Validações:**
- ✅ Status code deve ser `200`
- ✅ `token` deve ser uma string não vazia
- ✅ Content-Type deve ser `application/json`
- ✅ Tempo de resposta < 200ms
- ✅ Token deve ser válido JWT

**Possíveis erros:**
- `401 Unauthorized`: CNPJ ou senha incorretos
- `400 Bad Request`: Campos obrigatórios faltando

**Importante:** O token retornado é automaticamente armazenado na variável `authToken` do Postman para ser usado em requisições subsequentes.

---

### List Ongs

Lista todas as organizações cadastradas no sistema.

**Endpoint:** `GET /org`

**URL:** `http://localhost:3333/org`

**Request cURL:**
```bash
curl -X GET http://localhost:3333/org
```

**Resposta esperada (200 OK):**

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "cnpj": "84.541.842/0001-40",
    "nome": "Organização de Proteção Animal",
    "email": "contato@org.com.br",
    "contato": "(31) 99999-8888",
    "endereco": "Rua Principal, 123, Belo Horizonte - MG",
    "password_hash": "$2a$10$hashed_password_here..."
  },
  {
    "id": "660f9511-f30c-52e5-b827-557766551111",
    "cnpj": "12.345.678/0001-99",
    "nome": "Outra ONG",
    "email": "contato@outraong.com.br",
    "contato": "(21) 98888-7777",
    "endereco": "Avenida Secundária, 456",
    "password_hash": "$2a$10$another_hashed_password..."
  }
]
```

**Validações:**
- ✅ Status code deve ser `200`
- ✅ Content-Type deve ser `application/json`
- ✅ Resposta deve ser um array não vazio
- ✅ Cada objeto deve conter: `id`, `cnpj`, `nome`, `email`, `contato`, `endereco`, `password_hash`
- ✅ `id` deve ser string não vazia (UUID)
- ✅ `email` deve estar em formato válido

---

## PET (Animais)

Rotas para gerenciamento de animais de estimação cadastrados para adoção.

### Create Pet

Cria um novo animal no sistema. **Requer autenticação via JWT**.

**Endpoint:** `POST /pet/create`

**URL:** `http://localhost:3333/pet/create`

**Headers:**
```bash
Authorization: Bearer {authToken}
Content-Type: application/json
```

**Request Body:**

```json
{
  "nome": "Mel",
  "descricao": "Gata dócil e sociável",
  "idade": 3,
  "energia": "Média",
  "porte": "Pequeno",
  "cidade": "Belo Horizonte",
  "requisitos": "Gosta de companhia"
}
```

**Request cURL:**
```bash
curl -X POST http://localhost:3333/pet/create \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Mel",
    "descricao": "Gata dócil e sociável",
    "idade": 3,
    "energia": "Média",
    "porte": "Pequeno",
    "cidade": "Belo Horizonte",
    "requisitos": "Gosta de companhia"
  }'
```

**Validações de entrada:**
- ✅ `nome`: String não vazia
- ✅ `descricao`: String não vazia
- ✅ `idade`: Número inteiro não negativo (0-20)
- ✅ `energia`: Uma das opções: "Baixa" | "Média" | "Alta"
- ✅ `porte`: Uma das opções: "Pequeno" | "Médio" | "Grande"
- ✅ `cidade`: String não vazia
- ✅ `requisitos`: String não vazia

**Resposta esperada (201 Created):**

```json
{
  "id": "660f9511-f30c-52e5-b827-557766551111",
  "nome": "Mel",
  "descricao": "Gata dócil e sociável",
  "idade": 3,
  "energia": "Média",
  "porte": "Pequeno",
  "cidade": "Belo Horizonte",
  "requisitos": "Gosta de companhia",
  "org_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Possíveis erros:**
- `401 Unauthorized`: Token inválido, expirado ou não fornecido
- `400 Bad Request`: Dados inválidos ou campos obrigatórios faltando

**Nota:** No Postman, os dados são gerados dinamicamente:
- Nome, descrição, idade, energia e porte selecionados aleatoriamente
- Cidade selecionada de lista pré-definida
- Requisitos padronizados

---

### List Pet By City

Lista todos os animais cadastrados em uma cidade específica com informações da ONG responsável.

**Endpoint:** `POST /pet/list-by-city`

**URL:** `http://localhost:3333/pet/list-by-city`

**Headers:**
```bash
Content-Type: application/json
```

**Request Body:**

```json
{
  "cidade": "Belo Horizonte"
}
```

**Request cURL:**
```bash
curl -X POST http://localhost:3333/pet/list-by-city \
  -H "Content-Type: application/json" \
  -d '{"cidade": "Belo Horizonte"}'
```

**Resposta esperada (200 OK):**

```json
[
  {
    "id": "660f9511-f30c-52e5-b827-557766551111",
    "nome": "Mel",
    "descricao": "Gata dócil e sociável",
    "idade": 3,
    "energia": "Média",
    "porte": "Pequeno",
    "requisitos": "Gosta de companhia",
    "cidade": "Belo Horizonte",
    "org_id": "550e8400-e29b-41d4-a716-446655440000",
    "org": {
      "nome": "Organização de Proteção Animal",
      "contato": "(31) 99999-8888"
    }
  },
  {
    "id": "770g0622-g41d-63f6-c938-668877662222",
    "nome": "Rex",
    "descricao": "Cachorro brincalhão",
    "idade": 5,
    "energia": "Alta",
    "porte": "Grande",
    "requisitos": "Necessita de espaço",
    "cidade": "Belo Horizonte",
    "org_id": "550e8400-e29b-41d4-a716-446655440000",
    "org": {
      "nome": "Organização de Proteção Animal",
      "contato": "(31) 99999-8888"
    }
  }
]
```

**Validações:**
- ✅ Status code deve ser `200`
- ✅ Content-Type deve ser `application/json`
- ✅ Resposta deve ser um array
- ✅ Cada objeto deve conter: `id`, `nome`, `descricao`, `idade`, `energia`, `porte`, `requisitos`, `cidade`, `org_id`, `org`
- ✅ Objeto `org` deve conter: `nome` e `contato`
- ✅ `id` deve ser string não vazia (UUID)
- ✅ `idade` deve ser número não negativo

**Resposta quando nenhum animal é encontrado:**

```json
[]
```

---

### Search Pet By City

Busca animais em uma cidade específica com filtros opcionais de porte e nível de energia.

**Endpoint:** `POST /pet/search-by-city`

**URL:** `http://localhost:3333/pet/search-by-city`

**Headers:**
```bash
Content-Type: application/json
```

**Request Body (com filtros):**

```json
{
  "cidade": "Belo Horizonte",
  "porte": "Grande",
  "energia": "Alta"
}
```

**Request cURL:**
```bash
curl -X POST http://localhost:3333/pet/search-by-city \
  -H "Content-Type: application/json" \
  -d '{
    "cidade": "Belo Horizonte",
    "porte": "Grande",
    "energia": "Alta"
  }'
```

**Parâmetros de filtro (opcionais):**
- `cidade`: String (obrigatório)
- `porte`: "Pequeno" | "Médio" | "Grande" (opcional)
- `energia`: "Baixa" | "Média" | "Alta" (opcional)
- `idade`: Número inteiro (opcional)

**Resposta esperada (200 OK):**

```json
{
  "pets": [
    {
      "id": "660f9511-f30c-52e5-b827-557766551111",
      "nome": "Rex",
      "descricao": "Cachorro grande e energético",
      "idade": 5,
      "energia": "Alta",
      "porte": "Grande",
      "requisitos": "Espaço amplo",
      "cidade": "Belo Horizonte",
      "org_id": "550e8400-e29b-41d4-a716-446655440000",
      "org": {
        "nome": "Organização de Proteção Animal",
        "contato": "(31) 99999-8888"
      }
    }
  ]
}
```

**Resposta quando nenhum resultado é encontrado (200 OK):**

```json
{
  "pets": []
}
```

**Validações:**
- ✅ Status code deve ser `200`
- ✅ Content-Type deve ser `application/json`
- ✅ Resposta deve conter array `pets`
- ✅ Array `pets` pode estar vazio
- ✅ Cada animal deve corresponder aos filtros aplicados

---

## 📥 Importar Collection no Postman

A **Find a Friend API** fornece uma collection completa do Postman com todas as rotas, testes automatizados e variáveis pré-configuradas.

### Como importar a collection:

#### Método 1: Importar arquivo JSON

1. Abra o **Postman**
2. Clique em **"Import"** no menu superior esquerdo
3. Selecione a aba **"File"**
4. Navegue até a raiz do projeto e selecione o arquivo:
   ```bash
   find_a_friend_API.postman_collection.json
   ```
5. Clique em **"Import"**
6. A collection será importada com todas as requisições, testes e variáveis

#### Método 2: Importar da URL

1. No Postman, clique em **"Import"**
2. Selecione a aba **"Link"**
3. Cole o caminho do arquivo (se estiver em um repositório Git)
4. Clique em **"Continue"** e depois **"Import"**

### O que está incluído na collection:

✅ **Requisições prontas para uso:**
- Health check
- About (informações do projeto)
- Timestamp
- Create Org (com geração automática de CNPJ e telefone)
- Authenticate (com salvamento automático do token)
- List Ongs
- Create Pet (com dados dinâmicos)
- List Pet By City
- Search Pet By City

✅ **Testes automatizados (Test Scripts):**
- Validação de status code
- Validação de tipos de dados
- Validação de estrutura de resposta
- Validação de formatos (email, telefone, CNPJ)
- Testes de tempo de resposta

✅ **Variáveis pré-configuradas:**
- `authToken`: Token JWT armazenado automaticamente após autenticação
- `randomCnpj`: CNPJ gerado aleatoriamente (validado)
- `randomContact`: Telefone brasileiro válido gerado aleatoriamente
- Variáveis de dados de animais dinâmicas

✅ **Scripts de Pré-request:**
- Geração de CNPJ válido
- Geração de telefone brasileiro válido
- Geração de dados aleatórios de animais
- Salvamento automático de tokens

### Usando a collection após importação:

```bash
# 1. Verificar saúde da API
GET /health

# 2. Autenticar (o token é salvo automaticamente)
POST /auth
Body: {
  "cnpj": "84.541.842/0001-40",
  "password": "Zx8Cv7Bnn"
}

# 3. Criar um animal (usa o token salvo automaticamente)
POST /pet/create
Headers: Authorization: Bearer {{authToken}}

# 4. Executar testes
Na aba "Test Results" você verá os resultados de todas as validações
```

### Dicas importantes:

- 🔑 **Token automático**: Após autenticar, o token é salvo em {{authToken}}
- 🔄 **Regenerar dados**: Cada requisição POST/PUT gera novos CNPJ, telefones e dados
- ✅ **Testes automáticos**: Cada requisição possui testes que serão executados automaticamente
- 📊 **Visualizar testes**: Clique na aba **"Test Results"** para ver detalhes das validações

### Arquivo da collection:

```bash
📦 Raiz do Projeto
 ┣ find_a_friend_API.postman_collection.json
 ┗ ... (outros arquivos)
```
---

## 🔐 Autenticação

### Fluxo de Autenticação

A API utiliza **Bearer Token (JWT)** para autenticação e autorização.

### Como autenticar:

1. **Chamar endpoint** `POST /auth` com CNPJ e senha
2. **Receber token JWT** na resposta
3. **Incluir token** no header `Authorization: Bearer {token}` em requisições autenticadas
4. **No Postman**, o token é automaticamente armazenado em `{{authToken}}`

### Exemplo de fluxo:

```bash
# 1. Autenticar
RESPONSE=$(curl -X POST http://localhost:3333/auth \
  -H "Content-Type: application/json" \
  -d '{
    "cnpj": "84.541.842/0001-40",
    "password": "Zx8Cv7Bnn"
  }')

# 2. Extrair token
TOKEN=$(echo $RESPONSE | jq -r '.token')

# 3. Usar token em requisição autenticada
curl -X POST http://localhost:3333/pet/create \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{...}'
```

---

## 📊 Status Codes

| Código | Significado           | Descrição                                |
| ------ | --------------------- | ---------------------------------------- |
| `200`  | OK                    | Requisição bem-sucedida                  |
| `201`  | Created               | Recurso criado com sucesso               |
| `400`  | Bad Request           | Dados inválidos ou incompletos           |
| `401`  | Unauthorized          | Autenticação necessária ou inválida      |
| `409`  | Conflict              | Recurso já existe (CNPJ/email duplicado) |
| `500`  | Internal Server Error | Erro no servidor                         |

---

## 🚀 Exemplo de Fluxo Completo

Sequência de requisições para criar uma ONG, autenticar e adicionar um animal:

```bash
# 1️⃣ Verificar saúde da API
curl -X GET http://localhost:3333/health
# Resposta: Status UP

# 2️⃣ Obter informações sobre o projeto
curl -X GET http://localhost:3333/about
# Resposta: Informações do projeto e dependências

# 3️⃣ Criar uma organização
CRIAR_ORG=$(curl -X POST http://localhost:3333/org \
  -H "Content-Type: application/json" \
  -d '{
    "cnpj": "84.541.842/0001-40",
    "password": "Zx8Cv7Bnn",
    "nome": "ONG Protetora",
    "email": "contato@ong.com.br",
    "contato": "(31) 99999-8888",
    "endereco": "Rua Principal, 123"
  }')
echo "ONG criada: $CRIAR_ORG"

# 4️⃣ Autenticar a organização
AUTH=$(curl -X POST http://localhost:3333/auth \
  -H "Content-Type: application/json" \
  -d '{
    "cnpj": "84.541.842/0001-40",
    "password": "Zx8Cv7Bnn"
  }')

TOKEN=$(echo $AUTH | jq -r '.token')
echo "Token obtido: $TOKEN"

# 5️⃣ Listar todas as ONGs cadastradas
curl -X GET http://localhost:3333/org
# Resposta: Array com todas as ONGs

# 6️⃣ Criar um animal (requer autenticação)
CRIAR_PET=$(curl -X POST http://localhost:3333/pet/create \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Mel",
    "descricao": "Gata dócil",
    "idade": 3,
    "energia": "Média",
    "porte": "Pequeno",
    "cidade": "Belo Horizonte",
    "requisitos": "Gosta de companhia"
  }')
echo "Animal criado: $CRIAR_PET"

# 7️⃣ Listar animais por cidade
curl -X POST http://localhost:3333/pet/list-by-city \
  -H "Content-Type: application/json" \
  -d '{"cidade": "Belo Horizonte"}'
# Resposta: Array com animais de Belo Horizonte

# 8️⃣ Buscar animais com filtros
curl -X POST http://localhost:3333/pet/search-by-city \
  -H "Content-Type: application/json" \
  -d '{
    "cidade": "Belo Horizonte",
    "porte": "Pequeno",
    "energia": "Média"
  }'
# Resposta: Animais pequenos com energia média

# 9️⃣ Obter timestamp atual
curl -X GET http://localhost:3333/timestamp
# Resposta: 1731754245123
```

---

## 📝 Notas Importantes

### Postman Collection

- **CNPJ gerado automaticamente**: O Postman valida e gera CNPJs únicos antes de cada requisição
- **Telefone brasileiro**: Gera números com DDD válidos
- **Token persistente**: O token JWT é salvo em `{{authToken}}` após autenticação
- **Dados dinâmicos**: Nomes, descrições e cidades são selecionadas aleatoriamente

### Validações

- Todos os campos obrigatórios são validados
- Emails devem estar em formato válido
- CNPJs devem estar formatados corretamente
- Senhas devem ter mínimo 8 caracteres
- Idades não podem ser negativas

### Segurança

- Senhas são criptografadas com `bcryptjs`
- JWT é validado em todas as rotas protegidas
- Erros não expõem informações sensíveis

---

## 🔗 Links Úteis

- [Documentação Completa](/)
- [Guia de Instalação](../installation/local.md)
- [Tecnologias Utilizadas](../guide/technologies.md)
- [Roadmap](../roadmap/roadmap.md)