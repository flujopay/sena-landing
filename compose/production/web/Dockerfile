FROM node:22.12-slim AS builder

WORKDIR /app

COPY /.envs/.production/.web .env.production
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn run build

FROM node:22.12-slim AS production

WORKDIR /app

COPY package.json yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000

CMD ["yarn", "run", "start"]
