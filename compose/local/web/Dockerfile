FROM node:22.12-slim

WORKDIR /app

# Configuración para hot reloading en Windows
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=100

# Copiar solo package.json y yarn.lock primero para aprovechar la caché de Docker
COPY package.json yarn.lock ./
RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]
