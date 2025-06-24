<!-- # 📚 Find a Friend API

API desenvolvida em **Node.js** com foco em boas práticas, validação de dados, versionamento de banco com Prisma e deploy utilizando Docker.

---

## 📌 Comandos Essenciais do Prisma

Abaixo estão os principais comandos utilizados para gerenciar o Prisma neste projeto:

| Comando                  | Descrição                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `npx prisma init`        | Inicializa os arquivos básicos de configuração do Prisma (ex.: `schema.prisma`, `.env`).              |
| `npx prisma generate`    | Gera tipagens automáticas para TypeScript (localizadas em `node_modules/@prisma/client`).             |
| `npx prisma migrate dev` | Executa as migrations com base no schema atual. Cria as tabelas no banco de dados de desenvolvimento. |
| `npx prisma studio`      | Abre o **Prisma Studio**, uma interface web para visualizar e manipular dados (porta `5555`).         |
| `npx prisma deploy`      | Aplica todas as migrations em ambiente de produção, criando a estrutura do banco de dados.            |

---

## 🧱 Modelagem de Dados: Relacionamentos no SQL

### Tipos de Relacionamentos

- **1:1 (Um para Um)**  
Cada registro de uma tabela se relaciona com apenas um registro de outra tabela.  
> Exemplo: Um usuário tem um único perfil.

- **1:N (Um para Muitos)**  
Um registro de uma tabela pode estar relacionado com vários registros de outra tabela.  
> Exemplo: Um usuário pode ter vários pets cadastrados.

- **N:N (Muitos para Muitos)**  
Múltiplos registros de uma tabela podem se relacionar com múltiplos registros de outra tabela.  
> Exemplo: Pets podem ter várias características (tags), e uma tag pode estar associada a vários pets.

---

### 📌 Conceitos Importantes: Chaves Primárias e Chaves Estrangeiras

- **Chave Primária (Primary Key):**  
Identifica de forma única cada registro de uma tabela (exemplo: `id`).

- **Chave Estrangeira (Foreign Key):**  
Cria a ligação entre tabelas, apontando para a chave primária de outra tabela.

---

## ✅ Validação de Dados com Zod

Neste projeto, utilizamos a biblioteca **Zod** para validar os dados recebidos nas requisições HTTP.

### 🎯 O que a validação faz?

1. **Captura os dados:**  
Obtém os dados do corpo da requisição via `request.body`.

2. **Valida os campos:**  
Usa Schemas definidos com o Zod para validar os campos obrigatórios e garantir formatos corretos.

3. **Desestruturação segura:**  
Após a validação, os campos são extraídos em variáveis já com tipos seguros (type-safe).

---

### 📝 Exemplo de Schema com Zod:

```typescript
import { z } from 'zod';

const registerBodySchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Formato de email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
}); -->


# Find a Friend API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

API para conexão entre tutores e pets desenvolvida em Node.js com TypeScript, Prisma ORM e Docker.

---

## 📋 Índice

- [Find a Friend API](#find-a-friend-api)
  - [📋 Índice](#-índice)
  - [📝 Pré-requisitos](#-pré-requisitos)
  - [🚀 Configuração do Projeto](#-configuração-do-projeto)
  - [🛠️ Comandos do Prisma](#️-comandos-do-prisma)
  - [🔗 Relacionamentos em Banco de Dados](#-relacionamentos-em-banco-de-dados)
    - [Exemplo de Estrutura de Tabelas (SQL)](#exemplo-de-estrutura-de-tabelas-sql)
    - [Tipos de Relacionamento Utilizados](#tipos-de-relacionamento-utilizados)
    - [Conceitos de Chave Primária e Chave Estrangeira](#conceitos-de-chave-primária-e-chave-estrangeira)
  - [✅ Validação com Zod](#-validação-com-zod)
    - [Exemplo Completo:](#exemplo-completo)
  - [🐳 Docker](#-docker)
    - [docker-compose.yml:](#docker-composeyml)
  - [📂 Estrutura do Projeto](#-estrutura-do-projeto)
  - [🔧 Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [🤝 Contribuição](#-contribuição)
  - [📄 Licença](#-licença)

---

## 📝 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- Node.js (v18 ou superior)
- Yarn ou npm
- Docker (opcional para ambiente de desenvolvimento)
- PostgreSQL (ou outro banco de dados compatível com Prisma)

---

## 🚀 Configuração do Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/find-a-friend-api.git
cd find-a-friend-api
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Configure as variáveis de ambiente (veja a seção [Variáveis de Ambiente](#variáveis-de-ambiente)).

4. Execute as migrações do banco de dados:

```bash
npx prisma migrate dev
```

5. Inicie o servidor:

```bash
yarn dev
# ou
npm run dev
```

---

## 🛠️ Comandos do Prisma

| Comando                  | Descrição                                                                    |
| ------------------------ | ---------------------------------------------------------------------------- |
| `npx prisma init`        | Inicializa a configuração do Prisma no projeto.                              |
| `npx prisma generate`    | Gera o cliente Prisma com tipagem TypeScript.                                |
| `npx prisma migrate dev` | Cria e executa migrações no ambiente de desenvolvimento.                     |
| `npx prisma studio`      | Inicia interface visual do banco na porta `5555`.                            |
| `npx prisma db push`     | Sincroniza o schema com o banco de dados sem criar migrações.                |
| `npx prisma deploy`      | Implementa a estrutura do banco em produção usando as migrations existentes. |

---

## 🔗 Relacionamentos em Banco de Dados

### Exemplo de Estrutura de Tabelas (SQL)

```sql
-- Tabela: ORG (Organização)
CREATE TABLE ORG (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Tabela: ORG_CONTATO (1:N com ORG)
CREATE TABLE ORG_CONTATO (
    id SERIAL PRIMARY KEY,
    org_id INTEGER NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    FOREIGN KEY (org_id) REFERENCES ORG(id)
);

-- Tabela: ORG_ENDERECO (1:1 com ORG)
CREATE TABLE ORG_ENDERECO (
    id SERIAL PRIMARY KEY,
    org_id INTEGER NOT NULL UNIQUE,
    cidade VARCHAR(100) NOT NULL,
    FOREIGN KEY (org_id) REFERENCES ORG(id)
);

-- Tabela: PET (1:N com ORG)
CREATE TABLE PET (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    idade VARCHAR(20),
    energia VARCHAR(20),
    porte VARCHAR(20),
    requisitos TEXT,
    cidade VARCHAR(100) NOT NULL,
    org_id INTEGER NOT NULL,
    FOREIGN KEY (org_id) REFERENCES ORG(id)
);
```

### Tipos de Relacionamento Utilizados

- **1:1 (Um para Um):** ORG ↔ ORG_ENDERECO
- **1:N (Um para Muitos):** ORG ↔ ORG_CONTATO / ORG ↔ PET

### Conceitos de Chave Primária e Chave Estrangeira

- **Chave Primária (PRIMARY KEY):** Identifica de forma única cada registro na tabela.
- **Chave Estrangeira (FOREIGN KEY):** Estabelece a relação entre tabelas.
- **UNIQUE:** Garante unicidade (exemplo: para o relacionamento 1:1).

---


## ✅ Validação com Zod

### Exemplo Completo:

```typescript
import { z } from 'zod';

const petSchema = z.object({
  name: z.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome não pode exceder 100 caracteres"),
  age: z.number()
    .int("Idade deve ser um número inteiro")
    .positive("Idade deve ser positiva"),
  species: z.enum(['DOG', 'CAT', 'BIRD', 'OTHER']),
  breed: z.string().optional(),
  vaccinated: z.boolean().default(false),
  adoptionRequirements: z.array(z.string()).optional()
});
```

---

## 🐳 Docker

### docker-compose.yml:

```yaml
version: '3'

services:
  # app:
  #   build: .
  #   container_name: findAFriendAPI
  #   restart: unless-stopped
  #   networks:
  #     findAFriendAPI_net:
  #       ipv4_address: 172.26.0.1
  #   ports:
  #     - "3003:3000"
  #   volumes:
  #     - .:/app
  #   environment:
  #     - DATABASE_URL=postgresql://postgres:postgres@pg_findAFriend:5432/findafriend?schema=public
  #   depends_on:
  #     - pg_findAFriend

  pg_findAFriend:
    image: bitnami/postgresql
    container_name: pg_findAFriend
    restart: unless-stopped
    networks:
      findAFriendAPI_net:
        ipv4_address: 172.26.0.2
    ports:
      - "5433:5432"
    environment:
      - POSTGRESQL_USERNAME=postgres
      - POSTGRESQL_PASSWORD=postgres
      - POSTGRESQL_DATABASE=findafriend
    volumes:
      - ./volumes/postgres:/bitnami/postgresql

  pg_sonar:
    image: bitnami/postgresql
    container_name: pg_sonar
    restart: unless-stopped
    networks:
      findAFriendAPI_net:
        ipv4_address: 172.26.0.3
    ports:
      - "5434:5432"
    environment:
      - POSTGRESQL_USERNAME=docker
      - POSTGRESQL_PASSWORD=docker
      - POSTGRESQL_DATABASE=sonarqube
    volumes:
      - ./volumes/sonarPostgres:/bitnami/postgresql

  sonarqube:
    image: sonarqube:9.9.0-community
    container_name: sonar_findAFriend
    restart: unless-stopped
    networks:
      findAFriendAPI_net:
        ipv4_address: 172.26.0.4
    ports:
      - "9003:9000"
    environment:
      - SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true
      - SONARQUBE_JDBC_URL=jdbc:postgresql://pg_sonar:5432/sonarqube
      - SONARQUBE_JDBC_USERNAME=docker
      - SONARQUBE_JDBC_PASSWORD=docker
    volumes:
      - ./volumes/sonarQube/data:/opt/sonarqube/data
      - ./volumes/sonarQube/extensions:/opt/sonarqube/extensions
      - ./volumes/sonarQube/logs:/opt/sonarqube/logs
    depends_on:
      - pg_sonar

  prometheus:
    image: prom/prometheus
    container_name: prom_findAFriend
    restart: unless-stopped
    networks:
      findAFriendAPI_net:
        ipv4_address: 172.26.0.5
    ports:
      - "9093:9090"
    volumes:
      - ./volumes/prometheus:/prometheus
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/usr/share/prometheus/console_libraries'
      - '--web.console.templates=/usr/share/prometheus/consoles'

  grafana:
    image: grafana/grafana
    container_name: grafana_findAFriend
    restart: unless-stopped
    networks:
      findAFriendAPI_net:
        ipv4_address: 172.26.0.6
    ports:
      - "3003:3000"
    volumes:
      - ./volumes/grafana:/var/lib/grafana

networks:
  findAFriendAPI_net:
    driver: bridge
    ipam:
      config:
        - subnet: 172.26.0.0/24

```

---

## 📂 Estrutura do Projeto

```
find-a-friend-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── .env.example
├── docker-compose.yml
├── Dockerfile
└── package.json
```

---

## 🔧 Variáveis de Ambiente

Exemplo de `.env`:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/findafriend?schema=public"
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1d
CORS_ORIGIN=http://localhost:5173
```

---

## 🤝 Contribuição

1. Faça um fork do projeto  
2. Crie uma branch para sua feature:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit suas mudanças:

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push para a branch:

```bash
git push origin feature/AmazingFeature
```

5. Abra um Pull Request

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais informações.

---

Desenvolvido com ❤️ por [Seu Nome] - [seu-email@exemplo.com]