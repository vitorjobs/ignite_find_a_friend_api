<!-- ### 📄 `installation/local.md`
```markdown -->


<!-- # 📄 Instalação Local

## 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/find-a-friend-api.git
cd find-a-friend-api

```

# 2. Configurar Variáveis de Ambiente
## Crie o arquivo .env na raiz do projeto com base no arquivo .env.example:

```bash
NODE_ENV=dev
PORT=3333
HOST=0.0.0.0

# Configuração do PostgreSQL
DATABASE_URL="postgresql://usuario:senha@localhost:5432/findafriend?schema=public"

# SonarQube (Opcional - para análise de código)
SONARQUBE_URL="http://localhost:9000"
SONARQUBE_PROJECT_KEY=API_SOLID_CI
SONARQUBE_TOKEN="seu_token_aqui"

# CORS - Configuração de origens permitidas
CORS_ORIGIN=http://localhost:5173
```

::: tip CONFIGURAÇÃO DO BANCO
Ajuste a variável **DATABASE_URL** conforme a instância do PostgreSQL que você está utilizando:

**Local:**  
`postgresql://usuario:senha@localhost:5432/findafriend`

**Container:**  
`postgresql://postgres:postgres@localhost:5433/findafriend`

**Remoto:**  
`postgresql://usuario:senha@servidor:5432/findafriend`
:::

# 3. Instalar Dependências

```bash
# Instalar todas as dependências do projeto
npm install

# Ou se estiver usando yarn
yarn install
```

# 4. Configurar Banco de Dados
```bash
# Gerar o cliente do Prisma
npm run prisma:generate

# Executar as migrations para criar as tabelas
npm run migrate:dev
```

## Verificar Estrutura do Banco (Opcional)
```bash
# Abrir Prisma Studio para visualizar o banco
npx prisma studio
```

# 5. Executar Aplicação
## Modo Desenvolvimento

```bash
# Executar com hot-reload
npm run start:dev
```

## Modo Produção

```bash
# Build do projeto
npm run build

# Executar versão buildada
npm start
```

# 🎯 Validação da Instalação
## Após executar a aplicação, acesse o endereço no seu navegador: (http://localhost:3333) Você deverá ver a mensagem de boas-vindas da API Find a Friend.

## Verificar Health Check:
(http://localhost:3333/health)


# 🚨 Solução de Problemas Comuns

## Erro de Conexão com Banco
- Verifique se o PostgreSQL está rodando e acessível (ex.: systemd ou container).
  - systemd: sudo systemctl status postgresql
  - Docker: docker ps / docker-compose logs
- Confirme as credenciais e a `DATABASE_URL` no arquivo `.env`.
- Certifique-se de que o banco `findafriend` existe.

## Erro de Porta Ocupada
- Altere a variável `PORT` no arquivo `.env` para outro valor (ex.: `3333`).
- Ou force o encerramento do processo que está ocupando a porta (Linux/Mac):

```bash
# encerra todos os processos node
killall node
```

- Para descobrir qual processo está usando uma porta (ex.: 3000):

```bash
sudo lsof -i :3333
```

## Dependências Corrompidas
Se suspeitar de problemas com as dependências instaladas, reinstale-as:

```bash
rm -rf node_modules package-lock.json -->

# 📄 Instalação Local

## 1. Clonar o Repositório

```bash
git clone https://github.com/vitorjobs/ignite_find_a_friend_api.git
cd find-a-friend-api
```

## 2. Configurar Variáveis de Ambiente

Crie o arquivo `.env` na raiz do projeto baseado no exemplo abaixo:

```env
NODE_ENV=dev
PORT=3333
HOST=0.0.0.0

# Configuração do PostgreSQL
DATABASE_URL="postgresql://usuario:senha@localhost:5432/findafriend?schema=public"

# SonarQube (Opcional)
SONARQUBE_URL="http://localhost:9000"
SONARQUBE_PROJECT_KEY=API_SOLID_CI
SONARQUBE_TOKEN="seu_token_aqui"

# CORS
CORS_ORIGIN=http://localhost:5173
```

::: tip Configuração da variável `DATABASE_URL` no arquivo .env
Ajuste a variável **DATABASE_URL** conforme a instância do PostgreSQL que você está utilizando:
:::

::: code-group


```bash [local]
  `postgresql://usuario:senha@localhost:5432/findafriend`

```

```bash [docker]
  `postgresql://postgres:postgres@localhost:5433/findafriend`

```

```bash [remoto]
  `postgresql://usuario:senha@servidor:5432/findafriend`

```

:::


## 3. Instalar Dependências

```bash
# npm
npm install

# ou yarn
yarn install
```

## 4. Configurar Banco de Dados

### Executar Migrations do Prisma

::: warning ⚠️ NECESSÁRIO APENAS PARA BANCO DE DADOS **LOCAL** OU **REMOTO**
Se você estiver usando o banco de dados via **Container** (ex: Docker), **pule esta etapa**. O contêiner disposto no arquivo *docker-compose.bd.yml* já contém a estrutura inicial do banco e das tabelas.
:::

Execute os seguintes comandos para gerar o cliente do Prisma e aplicar as migrations, criando as tabelas no banco de dados:

```bash
# Gerar o cliente do Prisma
npm run prisma:generate

# Executar as migrations para criar as tabelas
npm run migrate:dev
```

### Opcional: abrir o Prisma Studio para inspecionar o banco:

```bash
npx prisma studio
```

## 5. Executar a Aplicação

Modo desenvolvimento (hot-reload):

```bash
npm run start:dev
```

Modo produção:

```bash
npm run build
npm start
```

## 6. Validação da Instalação

Acesse no navegador: http://localhost:3333  
Health check: http://localhost:3333/health

## 🚨 Solução de Problemas Comuns

### Erro de Conexão com Banco
- Verifique se o PostgreSQL está rodando:
  - systemd: `sudo systemctl status postgresql`
  - Docker: `docker ps` / `docker-compose logs`
- Confirme as credenciais e a `DATABASE_URL` no `.env`.
- Verifique se o banco `findafriend` foi criado.

### Erro de Porta Ocupada
- Altere `PORT` no `.env` (ex.: `3333` ou outro).
- Identificar processo que usa a porta (ex.: 3333):

```bash
sudo lsof -i :3333
```

- Encerrar processos Node (se aplicável):

```bash
# encerra todos os processos node
killall node

# ou encerrar um PID específico
kill <PID>
```

### Dependências Corrompidas
Reinstale dependências se houver suspeita de corrupção:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Observações
- Após alterar `.env`, reinicie a aplicação.
- Consulte os logs da aplicação para mensage