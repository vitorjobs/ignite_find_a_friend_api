# 📊 Monitoramento e Observabilidade

Documentação completa sobre o sistema de monitoramento da **Find a Friend API** utilizando **Prometheus**, **Grafana** e **cAdvisor**.

---

<!-- ## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura de Monitoramento](#-arquitetura-de-monitoramento)
- [Prometheus](#-prometheus)
- [Grafana](#-grafana)
- [Dashboards Disponíveis](#-dashboards-disponíveis)
- [Docker Compose para Monitoramento](#-docker-compose-para-monitoramento)
- [Configuração e Setup](#-configuração-e-setup)
- [Métricas Coletadas](#-métricas-coletadas)
- [Interpretação de Gráficos](#-interpretação-de-gráficos)
- [Alertas e Thresholds](#-alertas-e-thresholds)
- [Troubleshooting](#-troubleshooting)

--- -->

## 🎯 Visão Geral

O sistema de monitoramento da **Find a Friend API** fornece observabilidade completa em tempo real da aplicação, infraestrutura e desempenho. Através de dashboards interativos e coleta automatizada de métricas, é possível identificar gargalos, anomalias e problemas antes que impactem os usuários.

### Componentes principais:

| Componente                                                            | Função                                | Porta |
| --------------------------------------------------------------------- | ------------------------------------- | ----- |
| **API Find a Friend**                                                 | Aplicação principal                   | 3333  |
| **Prometheus**                                                        | Coleta e armazena métricas            | 9090  |
| **Grafana**                                                           | Visualização de métricas e dashboards | 3000  |
| **cAdvisor**                                                          | Monitoramento de containers Docker    | 8080  |
| --------------------------------------------------------------------- |

---

## 🏗️ Arquitetura de Monitoramento

```bash
┌─────────────────────────────────────────────────────────────┐
│                      Find a Friend API                      │
│  (Expõe métricas via /metrics - Prometheus client)          │
└──────────────────────────┬──────────────────────────────────┘
                           │ 
                           ▼
                  (Scrape a cada 15s)
┌─────────────────────────────────────────────────────────────┐
│                        Prometheus                           │
│  - Coleta métricas (TSDB - Time Series Database)            │
│  - Armazena dados por 15 dias (default)                     │
└──────────────────────────┬──────────────────────────────────┘
                           │ 
                           ▼
                    (Query PromQL)

┌─────────────────────────────────────────────────────────────┐
│                     Grafana                                 │
│  - Consulta Prometheus                                      │
│  - Renderiza dashboards                                     │
└─────────────────────────────────────────────────────────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼                             ▼
          Dashboard 1                      Dashboard 2   
```

---

## 🔍 Prometheus

### O que é Prometheus?

**Prometheus** é um sistema de monitoramento e alertas de código aberto que coleta métricas de aplicações através de um modelo pull (requisições periódicas).

### Características principais:

✅ **Model Pull**: Prometheus consulta endpoints de métricas periodicamente  
✅ **TSDB**: Banco de dados otimizado para séries temporais  
✅ **PromQL**: Linguagem poderosa para queries de métricas  
✅ **Alertas**: Sistema de alertas integrado  
✅ **Retenção**: Configurable (padrão 15 dias)

### Endpoint de Métricas

A API expõe métricas via:

```bash
GET http://localhost:3333/metrics
```

As métricas são expostas em formato texto Prometheus.

### Configuração

Arquivo: `docker/config/prometheus/prometheus.yml`

```yaml
global:
  scrape_interval: 15s      # Intervalo de coleta
  evaluation_interval: 15s  # Intervalo de avaliação de alertas

scrape_configs:
  - job_name: 'findafriend-api'
    static_configs:
      - targets: ['localhost:3333']

  - job_name: 'cadvisor'
    static_configs:
      - targets: ['localhost:8080']
```

### Acessar Prometheus

```bash
http://localhost:9090
```

**Aba Graph**: Execute queries PromQL  
**Aba Status**: Veja status dos scrapes  
**Aba Alerts**: Monitore alertas

---

## 📈 Grafana

### O que é Grafana?

**Grafana** é uma plataforma de visualização e análise de dados que consome dados do Prometheus para criar dashboards interativos, gráficos customizados e alertas.

### Características principais:

✅ **Dashboards**: Customizáveis com diversos tipos de visualização  
✅ **Alertas**: Sistema de notificações integrado  
✅ **Datasources**: Suporte a múltiplas fontes (Prometheus, Elasticsearch, etc)  
✅ **Templating**: Variáveis dinâmicas nos dashboards  
✅ **Annotations**: Marcações de eventos importantes

### Acessar Grafana

```bash
http://localhost:3000
```

**Credenciais padrão:**
- Usuário: `admin`
- Senha: `admin`

### Primeiro Acesso

1. Abra `http://localhost:3000`
2. Faça login com `admin/admin`
3. Será solicitado trocar a senha (recomendado)
4. Configure o Prometheus como datasource
5. Importe os dashboards disponibilizados

---

## 📊 Dashboards Disponíveis

### 1. Performance - Aplicação Find a Friend

**Arquivo**: `docker/config/grafana/dashboards/Performance.json`

Dashboard especializado em métricas da aplicação Find a Friend API.

#### Seções:

**Performance HTTP da API**
- Código de Status HTTP (Taxa de Erros)
- Requisições por Segundo (RPS) por Rota

**Saúde do Processo Node.js**
- Uso de CPU do Processo
- Uso de Memória do Processo

**Saúde Interna (Event Loop & GC)**
- Duração do Garbage Collection
- Latência do Event Loop (P90)

#### Métricas-chave:

| Métrica                                        | Descrição            | Normal        |
| ---------------------------------------------- | -------------------- | ------------- |
| `http_request_duration_seconds_count`          | Total de requisições | Crescente     |
| `http_request_duration_seconds_bucket`         | Latência por rota    | < 200ms (p99) |
| `findAFriend_process_cpu_seconds_total`        | CPU do processo      | < 50%         |
| `findAFriend_nodejs_heap_size_used_bytes`      | Memória Heap         | Estável/Serra |
| `findAFriend_nodejs_eventloop_lag_p90_seconds` | Event Loop lag       | < 10ms        |

---

### 2. cAdvisor Docker Insights

**Arquivo**: `docker/config/grafana/dashboards/cAdvisor_Docker_Insights.json`

Dashboard para monitoramento de containers Docker com métricas do cAdvisor.

#### Seções:

**Basic**
- Running Containers (quantidade)
- CPU Usage (por container)

**Memory**
- Memory Usage (em bytes)
- Memory Cached

**I/O**
- Reads (bytes lidos do disco)
- Writes (bytes escritos no disco)

**Network**
- Received Network Traffic
- Sent Network Traffic

**Details**
- Container Restarts (heatmap)

#### Métricas-chave:

| Métrica                                  | Descrição            | Unidade    |
| ---------------------------------------- | -------------------- | ---------- |
| `container_cpu_usage_seconds_total`      | CPU do container     | percentual |
| `container_memory_usage_bytes`           | Memória do container | bytes      |
| `container_memory_cache`                 | Cache de memória     | bytes      |
| `container_fs_reads_bytes_total`         | Leitura de disco     | bytes      |
| `container_fs_writes_bytes_total`        | Escrita de disco     | bytes      |
| `container_network_receive_bytes_total`  | Tráfego recebido     | bytes      |
| `container_network_transmit_bytes_total` | Tráfego enviado      | bytes      |

---

## 🐳 Docker Compose para Monitoramento

### Arquivos de Orquestração

**Diretório**: `docker/`

```bash
docker/
├── docker-compose.app.yml      # API Find a Friend
├── docker-compose.bd.yml       # PostgreSQL
├── docker-compose.mtr.yml      # Prometheus + Grafana + cAdvisor
├── Dockerfile                  # Build da aplicação
└── config/
    ├── prometheus/
    │   └── prometheus.yml
    └── grafana/
        ├── dashboard.yaml
        ├── datasources.yaml
        └── dashboards/
            ├── Performance.json
            └── cAdvisor_Docker_Insights.json
```

### Executar Stack Completo

```bash
# Iniciar tudo
docker-compose -f docker-compose.app.yml \
               -f docker-compose.bd.yml \
               -f docker-compose.mtr.yml up -d

# Parar tudo
docker-compose -f docker-compose.app.yml \
               -f docker-compose.bd.yml \
               -f docker-compose.mtr.yml down

# Ver logs
docker-compose -f docker-compose.mtr.yml logs -f
```

---

## ⚙️ Configuração e Setup

### Passo 1: Verificar Prometheus Conectado

1. Acesse `http://localhost:9090`
2. Vá em **Status → Targets**
3. Verifique se `findafriend-api` e `cadvisor` estão **UP**

### Passo 2: Configurar Datasource no Grafana

1. Acesse `http://localhost:3000`
2. Vá em **Configuration → Data Sources**
3. Clique em **Add data source**
4. Selecione **Prometheus**
5. URL: `http://prometheus:9090`
6. Clique em **Save & Test**

### Passo 3: Importar Dashboards

1. Acesse `http://localhost:3000`
2. Vá em **Dashboards → Import**
3. Cole o JSON de um dos dashboards disponíveis
4. Selecione o Prometheus datasource
5. Clique em **Import**

### Passo 4: Configurar Alertas (Opcional)

1. Vá em **Configuration → Notification channels**
2. Crie um canal (Email, Slack, PagerDuty, etc)
3. Nos dashboards, clique no ícone de sino para configurar alertas

---

## 📊 Métricas Coletadas

### HTTP/API Metrics

```bash
http_request_duration_seconds_bucket    # Latência por rota
http_request_duration_seconds_count     # Total de requisições
http_request_duration_seconds_sum       # Soma de latências
http_requests_total                     # Total de requisições (contador)
```

### Node.js Process Metrics

```bash
findAFriend_process_cpu_seconds_total       # CPU do processo
findAFriend_process_resident_memory_bytes   # Memória residente (RAM)
findAFriend_nodejs_heap_size_used_bytes     # Heap usado
findAFriend_nodejs_heap_size_limit_bytes    # Limite do heap
findAFriend_nodejs_gc_duration_seconds      # Duração do GC
findAFriend_nodejs_eventloop_lag_*          # Lag do Event Loop (p50, p90, p99)
```

### Container Metrics (cAdvisor)

```bash
container_cpu_usage_seconds_total           # CPU do container
container_memory_usage_bytes                # Memória do container
container_memory_cache                      # Cache de memória
container_fs_reads_bytes_total              # Bytes lidos
container_fs_writes_bytes_total             # Bytes escritos
container_network_receive_bytes_total       # Bytes recebidos
container_network_transmit_bytes_total      # Bytes enviados
container_last_seen                         # Timestamp do container
```

### Database Metrics

```bash
pg_up                                   # PostgreSQL UP/DOWN
pg_stat_activity_count                  # Conexões ativas
pg_database_size_bytes                  # Tamanho do banco
pg_stat_statements_query_time_seconds   # Tempo de query
```

---

## 🔍 Interpretação de Gráficos

### Código de Status HTTP (Taxa de Erros)

**O que monitorar:**

- **Linha 200 (Verde)**: Requisições bem-sucedidas. Deve ser a dominante
- **Linhas 4xx (Laranja)**: Erros do cliente (400, 401, 404). Aumento súbito indica problemas de validação ou autorização
- **Linhas 5xx (Vermelho)**: Erros do servidor. Crítico! Investigar imediatamente

**Interpretação:**

```bash
✅ Esperado: 95%+ de 200, < 1% de 4xx, 0% de 5xx
⚠️ Alerta: Aumento em 5xx ou 4xx superior a 5%
🔴 Crítico: Taxa de erro superior a 10%
```

---

### Requisições por Segundo (RPS) por Rota

**O que monitorar:**

- **Linha estável**: Tráfego consistente
- **Linha ascendente**: Aumento no tráfego
- **Queda súbita**: Possível problema na rota

**Interpretação:**

```bash
✅ Esperado: Padrão consistente com picos esperados
⚠️ Alerta: Variação anormal ou picos inesperados
🔴 Crítico: Queda para zero (endpoint fora do ar)
```

**Correlação com latência:**
- Aumento em RPS geralmente leva a aumento em latência
- Se RPS sobe mas latência não sobe muito, boa escalabilidade
- Se latência explode com pequeno aumento de RPS, gargalo

---

### Uso de CPU do Processo Node.js

**O que monitorar:**

- **Linha < 30%**: Normal
- **Linha 30-70%**: Aceitável sob carga
- **Linha > 70%**: Alerta

**Interpretação:**

```bash
✅ Esperado: 10-40% em carga normal
⚠️ Alerta: 60-80% sob carga
🔴 Crítico: > 80% ou consistentemente máximo
```

**Causas de pico:**
- Operações pesadas
- Loop infinito ou algoritmo ineficiente
- Muitas requisições simultâneas

---

### Uso de Memória (Heap)

**Padrão normal** (formato "serra"):

```bash
Gráfico sobe e desce regularmente → GC funcionando corretamente
         ↑         ↑         ↑
    Aloca   Libera  Aloca   Libera
```

**Vazamento de memória** (crescimento contínuo):

```bash
Gráfico sempre sobe, nunca desce
         ↗ ↗ ↗ ↗ ↗ ↗ ↗ ↗
     Indicador de vazamento!
```

**Interpretação:**

```bash
✅ Esperado: Padrão serra com picos estáveis
⚠️ Alerta: Crescimento constante (possível vazamento)
🔴 Crítico: Memória próxima ao limite (OOM risk)
```

---

### Duração do Garbage Collection (GC)

**O que monitorar:**

- **Valores baixos e estáveis**: GC rápido e eficiente
- **Picos ocasionais**: Normal durante limpezas maiores
- **Valores altos e frequentes**: GC sobrecarregado

**Interpretação:**

```bash
✅ Esperado: GC < 10ms na maioria das vezes
⚠️ Alerta: GC frequente > 50ms
🔴 Crítico: GC > 100ms causando pausas de aplicação
```

**Impacto:**
- GC é operação "stop-the-world" (para tudo)
- GC longo = aplicação não responde
- Correlaciona com picos de latência

---

### Latência do Event Loop (P90)

**O que monitorar:**

- **< 10ms**: Excelente
- **10-50ms**: Aceitável
- **> 100ms**: Problema grave

**Interpretação:**

```bash
✅ Esperado: < 20ms P90
⚠️ Alerta: 50-100ms P90
🔴 Crítico: > 100ms (Event Loop bloqueado)
```

**Causas de latência alta:**
- Event Loop bloqueado por operação síncrona
- CPU esgotada
- Muitas tarefas assíncronas concorrentes
- I/O bloqueante

---

## 📌 Alertas e Thresholds

### Alertas Recomendados

#### Crítico (Investigar imediatamente)

```yaml
- Taxa de erro 5xx > 5% por 5 minutos
- Event Loop lag > 100ms por 2 minutos
- Memória > 80% do limite
- CPU > 90% por 5 minutos
- Container restartando repetidamente
```

#### Aviso (Investigar em breve)

```yaml
- Taxa de erro 4xx > 10% por 10 minutos
- Event Loop lag > 50ms por 5 minutos
- Memória > 70% do limite
- Latência P99 > 500ms por 5 minutos
- I/O disk > 80% por 5 minutos
```

#### Informação

```yaml
- Deployment bem-sucedido
- Versão atualizada
- Métricas normalizadas após pico
```

---

## 🔧 Troubleshooting

### Prometheus não coleta métricas

**Verificar:**

```bash
# 1. Prometheus está rodando?
docker ps | grep prometheus

# 2. API está respondendo?
curl http://localhost:3333/metrics

# 3. Firewall bloqueando?
telnet localhost 3333

# 4. Verificar logs
docker logs prometheus
```

**Solução:**

```bash
# Reiniciar Prometheus
docker restart prometheus

# Verificar configuração
# Editar docker/config/prometheus/prometheus.yml
# Validar YAML (sem erros de indentação)
```

---

### Grafana não conecta ao Prometheus

**Verificar:**

1. Acesse `http://localhost:3000`
2. Vá em **Configuration → Data Sources**
3. Clique no Prometheus datasource
4. Clique em **Test Connection**
5. Verifique a mensagem de erro

**Soluções comuns:**

```yaml
Erro: "Get https://prometheus:9090/api/v1/query..."
Solução: Alterar URL para http://prometheus:9090 (protocolo correto)

Erro: "Connection refused"
Solução: Prometheus não está rodando. Executar docker-compose

Erro: "Network unreachable"
Solução: Containers não estão na mesma rede. Verificar docker-compose
```

---

### Dashboards vazios (sem dados)

**Verificar:**

1. Timeframe do dashboard (canto superior direito)
2. Datasource correto selecionado
3. Métricas existem em Prometheus:
   ```bash
   http://localhost:9090
   Graph → Digite a métrica
   Execute
   ```

**Soluções:**

```bash
# Se métrica não aparece, API não está expondo
# Verificar se /metrics endpoint está implementado

# Aumentar retention do Prometheus
# docker/config/prometheus/prometheus.yml
storage:
  tsdb:
    retention:
      time: 30d
```

---

### Alto uso de memória do Prometheus

**Soluções:**

```yaml
# Reduzir retention (dados antigos deletados mais rápido)
retention:
  time: 7d  # Invés de 15d

# Aumentar scrape_interval (menos frequente)
global:
  scrape_interval: 30s  # Invés de 15s

# Limpar dados históricos
docker exec prometheus rm -rf /prometheus/wal/*
```

---

## 📚 Recursos Adicionais

- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [cAdvisor Documentation](https://github.com/google/cadvisor)
- [PromQL Guide](https://prometheus.io/docs/prometheus/latest/querying/basics/)

---

## 🔗 Links Úteis

- [Prometheus UI](http://localhost:9090)
- [Grafana Dashboard](http://localhost:3000)
- [cAdvisor Metrics](http://localhost:8080/metrics)
- [API Metrics](http://localhost:3333/metrics)

---

**Última atualização**: Novembro 2025  
**Versão**: 1.0.0