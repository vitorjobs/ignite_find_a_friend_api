# # Usar uma imagem oficial do Node.js como base
# FROM node:20-alpine

# # Definir o diretório de trabalho dentro do container
# WORKDIR /usr/src/app

# # Copiar arquivos de configuração do package
# COPY package*.json ./

# # Instalar dependências
# RUN npm install

# # Copiar o restante do código da aplicação
# COPY . .

# # Expor a porta que a aplicação usa
# EXPOSE 3333

# # Comando para executar a aplicação
# CMD ["npm", "run","start:dev"]



# FROM node:20-slim

# WORKDIR /usr/src/app

# COPY package.json package-lock.json ./

# RUN npm i

# COPY . .

# RUN npm run build

# EXPOSE  3333

# CMD ["npm", "run", "start:dev"]




FROM node:20-bullseye

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm i

RUN npm run build

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start"]