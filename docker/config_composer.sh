#!/bin/bash

echo "🚀 Criando estrutura de diretórios para os volumes locais..."

# Criar a árvore de diretórios de forma otimizada
mkdir -p volumes/{grafana,prometheus,postgres,sonarPostgres,sonarQube/{data,extensions,logs}}

echo "✅ Diretórios criados com sucesso."

# Ajustar permissões para que qualquer usuário possa excluir/modificar
echo "🔧 Ajustando permissões (chmod 777 -R volumes)..."
chmod -R 777 volumes

# Alterar ownership para os usuários esperados por cada serviço
echo "🔧 Ajustando ownership específico para cada serviço..."

# Prometheus (usuário nobody - UID 65534)
sudo chown -R 65534:65534 volumes/prometheus
echo "➡️ Prometheus: Owner set to UID 65534 (nobody)"

# Grafana (usuário grafana - UID 472)
sudo chown -R 472:472 volumes/grafana
echo "➡️ Grafana: Owner set to UID 472"

# PostgreSQL da API (usuário postgres - UID 1001, ou ajuste conforme sua imagem)
sudo chown -R 1001:1001 volumes/postgres
echo "➡️ PostgreSQL API: Owner set to UID 1001"

# PostgreSQL do Sonar (usuário postgres - UID 1001 também)
sudo chown -R 1001:1001 volumes/sonarPostgres
echo "➡️ PostgreSQL Sonar: Owner set to UID 1001"

# SonarQube (usuário sonar - geralmente UID 1000)
sudo chown -R 1000:1000 volumes/sonarQube
echo "➡️ SonarQube: Owner set to UID 1000"

echo "✅ Estrutura e permissões finalizadas com sucesso."

echo ""
echo "📂 Estrutura atual:"
tree volumes 2>/dev/null || ls -R volumes
