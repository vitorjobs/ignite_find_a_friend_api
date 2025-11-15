# 🐳 Instalação Completa com Docker

Passos para configurar e executar a aplicação **Find a Friend API** juntamente com seus serviços de infraestrutura (Banco de Dados e Monitoramento) utilizando o **Docker Compose**.
---
## 1. Clonar e Configurar o Projeto

Primeiro, clone o repositório e navegue até o diretório do projeto:

```bash
git clone https://github.com/vitorjobs/ignite_find_a_friend_api.git
cd ignite_find_a_friend_api
```
---
## 2. Configurar Variáveis de Ambiente

::: tip Configuração do arquivo .env
Crie o arquivo `.env` na raiz do projeto baseado no exemplo abaixo adaptado para o ambiente Docker.

Mantenha a variável **DATABASE_URL** apontando para o container do PostgreSQL.
:::

```bash
# .env
NODE_ENV=dev
PORT=3333
HOST=0.0.0.0

# Configuração do PostgreSQL
DATABASE_URL="postgresql://usuario_dump:senha_dump@172.27.0.30:5432/banco_dump?schema=public

```

---
## 3. Subir a Infraestrutura Docker
Você pode subir os serviços separadamente ou todos de uma vez.

### a. Criar a Rede Docker (Obrigatório)

A rede é necessária para que os containers possam se comunicar usando IPs estáticos.

```bash
docker network create FAF_API
```
### b. Subir Serviços 
Use esta abordagem para iniciar os serviços docker.

::: code-group
```bash [Todos os Serviços]
# Inicia todos os serviços de uma vez
docker compose -f docker/docker-compose.bd.yml -f docker/docker-compose.app.yml -f docker/docker-compose.mtr.yml up -d
``` 

```bash [Banco de Dados]
# Inicia os serviços separadamente
docker compose -f docker/docker-compose.bd.yml up -d
``` 

```bash [Aplicação]
# Inicia a aplicação
docker compose -f docker/docker-compose.app.yml up -d
``` 

```bash [Monitoramento]
# Inicia o monitoramento
docker compose -f docker/docker-compose.mtr.yml up -d
```
:::
## 4. Verificar Containers

### a. Listar containers em execução
Use o comando abaixo para verificar o status dos containers:
```bash
docker ps -a 
```
::: danger ATENÇÃO
Todos os containers devem estar rodando sem erros e possuir o status **"Up"**.
:::

### b. Ver logs específicos de um container (não obrigatório)
::: code-group
```bash [FAF_APP]
docker logs FAF_APP -f
```

```bash [FAF_BD]
docker logs FAF_BD -f
```

```bash [FAF_GRAF]
docker logs FAF_GRAF -f
```

```bash [FAF_PROM]
docker logs FAF_PROM -f
```
:::
## 5. Acessos

| Serviço    |                      URL (host) | Porta (host) | IP (host)      | IP (container:port) | Descrição                   |
| ---------- | ------------------------------: | -----------: | :------------- | :-----------------: | --------------------------- |
| Aplicação  |           http://localhost:3333 |         3333 | localhost      |   172.27.0.3:3333   | API Find a Friend           |
| Grafana    |           http://localhost:3004 |         3004 | localhost      |  172.27.0.10:3000   | Dashboards de monitoramento |
| Prometheus |           http://localhost:9094 |         9094 | localhost      |  172.27.0.20:9090   | Coleta de métricas          |
| PostgreSQL | http://localhost:5433 (host UI) |  5433 / 5432 | localhost:5433 |  172.27.0.30:5432   | Banco de dados              |
---

## 6. Credenciais (detalhado)

| Serviço    | Usuário        | Senha        | Banco        | Comentários / Ação necessária                       |
| ---------- | :------------- | :----------- | :----------- | :-------------------------------------------------- |
| PostgreSQL | `usuario_dump` | `senha_dump` | `banco_dump` | Conta usada pela aplicação; evite expor em produção |
| Grafana    | `admin`        | `admin`      | —            | Trocar senha no primeiro acesso (obrigatório)       |
| (opcional) | —              | —            | —            | Se tiver outros usuários, registre aqui             |

> **Observações rápidas (IMPORTANTE)**  
> - Ao acessar a area de login do Grafana pela primeira vez, altere a senha do usuário `admin` por segurança.  
> - A aplicação em nodejs está configurada para se conectar ao banco de dados usando as credenciais acima.
---

## 7. Validação da Instalação via Docker

### a. Validar Acesso aos Serviços

Acesse os endereços da tabela acima para verificar se os serviços estão funcionando corretamente:

- **Aplicação**: http://localhost:3333
- **Grafana**: http://localhost:3004
- **Prometheus**: http://localhost:9094

### b. Testar Endpoints da API

Importe o arquivo `endpoints.json` no Postman, disponível no diretório `docs/postman/`, para testar os endpoints da API.
---

## 8. Gerenciamento de Containers

### a. Parar todos os serviços criados pelo Docker Compose

```bash
docker-compose -f docker/docker-compose.bd.yml down
docker-compose -f docker/docker-compose.mtr.yml down
docker-compose -f docker/docker-compose.app.yml down
```

### b. Rebuild da Aplicação

```bash
docker-compose -f docker/docker-compose.app.yml build --no-cache
```

### c. Limpar Volumes (⚠️ CUIDADO!)

```bash
docker-compose down -v
```

::: danger AVISO
Este comando remove todos os volumes associados aos containers, resultando em **perda permanente de dados persistentes**.
:::
