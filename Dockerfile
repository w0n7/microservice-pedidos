# Imagem base
FROM node:20-slim

# Diretório da aplicação
WORKDIR /app

# Copia os arquivos de config primeiro (para melhor cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Compila o TypeScript
RUN npm run build

# Expõe a porta da API
EXPOSE 3000

# Comando inicial
CMD ["node", "dist/server.js"]