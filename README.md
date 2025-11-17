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

✅ **Observabilidade e Monitoramento em Produção**
- **Prometheus**: Coleta de métricas em tempo real
- **Grafana**: Dashboard interativo para visualização de métricas
- **Docker**: Containerização completa da aplicação e infraestrutura

### 📊 Importância do Monitoramento

O monitoramento é crítico para garantir a confiabilidade e performance da API em produção:

- **Prometheus** coleta e armazena métricas de performance, requisições e saúde da aplicação
- **Grafana** fornece visualizações em tempo real permitindo identificar gargalos e anomalias
- **Docker** garante consistência entre ambientes de desenvolvimento, teste e produção

<!-- Acesse o **[Dashboard de Monitoramento](https://vitorjobs.github.io/ignite_find_a_friend_api/)** para visualizar métricas em tempo real e acompanhar a saúde da aplicação. -->

---

## 🛠️ Tecnologias

| Tecnologia         | Versão           | Propósito                             |
| ------------------ | ---------------- | ------------------------------------- |
| **Node.js**        | 20+              | Runtime JavaScript                    |
| **TypeScript**     | 5.8.3            | Tipagem estática                      |
| **Fastify**        | 5.2.2            | Framework web rápido                  |
| **Prisma**         | 6.14.0           | ORM para banco de dados               |
| **PostgreSQL**     | 15+              | Banco de dados relacional             |
| **JWT**            | via @fastify/jwt | Autenticação                          |
| **bcryptjs**       | 3.0.2            | Hash de senhas                        |
| **Vitest**         | 3.1.1            | Framework de testes                   |
| **VitePress**      | 2.0.0-alpha.12   | Documentação estática                 |
| **Docker**         | Latest           | Containerização e orquestração        |
| **Docker Compose** | Latest           | Gerenciamento de múltiplos containers |
| **Prometheus**     | Latest           | Coleta e armazenamento de métricas    |
| **Grafana**        | Latest           | Visualização de métricas e dashboards |

### 🐳 Stack de Observabilidade

- **Docker**: Containeriza a aplicação, PostgreSQL, Prometheus e Grafana
- **Prometheus**: Scrape de métricas da API a cada intervalo configurado
- **Grafana**: Dashboards customizados para monitoramento em tempo real
- **Métricas coletadas**: Requisições HTTP, tempo de resposta, erros, uso de CPU/memória

---

## 🚀 Quick Start

Para instruções detalhadas de instalação e configuração, consulte a documentação completa:

📖 **[Guia de Instalação](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/local.html)**

Lá você encontrará:
- Pré-requisitos do sistema
- Variáveis de ambiente
- Instalação local passo a passo
- Configuração com Docker
- Configuração do banco de dados

### 🐳 Com Docker Compose (Recomendado)

Para executar a stack completa (API + PostgreSQL + Prometheus + Grafana):

📖 **[Guia de Setup com Docker](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/docker.html)**

---

## 📚 Documentação Completa

A documentação interativa e completa do projeto está disponível em:

### 🌐 **[GitHub Pages - Find a Friend API](https://vitorjobs.github.io/ignite_find_a_friend_api/)**

### 📖 Seções Disponíveis:

**API & Endpoints**
- [Documentação de Rotas](https://vitorjobs.github.io/ignite_find_a_friend_api/api/flow.html) - Todas as rotas com exemplos detalhados

**Instalação & Setup**
- [Pré-requisitos](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/requirements.html)
- [Instalação Local](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/local.html)
- [Setup com Docker](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/docker.html)
- [Configuração do Banco de Dados](https://vitorjobs.github.io/ignite_find_a_friend_api/installation/database.html)

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

📖 **[Guia de Importação - Postman Collection](https://vitorjobs.github.io/ignite_find_a_friend_api/api/flow#importar-collection-no-postman)**

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

## 📈 Monitoramento e Observabilidade

### Prometheus

Prometheus coleta métricas da API em tempo real:

- Requisições HTTP (taxa, latência, status codes)
- Tempo de resposta por endpoint
- Erros e exceções
- Saúde do banco de dados
- Uso de recursos do container


### Grafana

Grafana fornece dashboards visuais para acompanhar a saúde da aplicação:

- **Dashboard de Performance**: Taxa de requisições, status codes, latência
- **Dashboard cAdvisor**: Métricas de containers Docker
- **Alertas em tempo real**: Notificações automáticas
- **Latência percentil**: Visualização de P50, P95, P99
- **Recursos do sistema**: CPU e memória em tempo real


### 📊 Dashboards Disponíveis

#### 1. Performance - Aplicação Find a Friend
Monitora métricas específicas da aplicação:
- Taxa de requisições por segundo
- Distribuição de status codes HTTP
- Latência por rota
- Uso de CPU e memória do processo Node.js
- Duração do Garbage Collection
- Event Loop lag

#### 2. cAdvisor Docker Insights
Acompanha a saúde dos containers:
- CPU usage por container
- Memória utilizada
- I/O de disco (reads/writes)
- Tráfego de rede
- Restarts de containers

### 📖 Documentação Completa

Para entender como a configuração do Prometheus e Grafana funciona, além de como interpretar as métricas coletadas e configurar alertas:

📖 **[Documentação Completa de Monitoramento](https://vitorjobs.github.io/ignite_find_a_friend_api/api/monitor.html)**

Lá você encontrará:
- Visão geral da arquitetura de monitoramento
- Como acessar e configurar Prometheus e Grafana
- Explicação detalhada de cada dashboard
- Interpretação de gráficos e métricas
- Guia de alertas e thresholds recomendados
- Troubleshooting e soluções de problemas comuns

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
- Workflow configurado em: `.github/workflows/run-unit-tests.yml` e `.github/workflows/run-e2e-tests.yml`

- CI e CD da documentação via GitHub Pages configurados em: `.github/workflows/deploy.yml`
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

- 📧 Email: vittorbassdev@guedes.com
- 🐙 GitHub: [@vitorjobs](https://github.com/vitorjobs)
- 📚 Documentação: [GitHub Pages](https://vitorjobs.github.io/ignite_find_a_friend_api/)

---

## 🙏 Agradecimentos

- [RocketSeat](https://www.rocketseat.com.br/) pelo excelente formação NODEJS e DEVOPS do Ignite
- Comunidade de desenvolvimento Node.js e TypeScript

---

**Desenvolvido com ❤️ e 💦 durante o Desafio SOLID - Ignite RocketSeat**