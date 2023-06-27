FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY apps/api/package.json ./pnpm-lock.yaml ./
RUN pnpm --filter api install

FROM base AS build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm --filter api build
RUN pnpm prune --prod

FROM base AS deploy

WORKDIR /app
COPY --from=build /app/apps/api/dist/ ./dist/
COPY --from=build /app/node_modules ./node_modules

ENV PORT 8080
EXPOSE 8080

CMD [ "node", "dist/src/index.js" ]