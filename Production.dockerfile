FROM node:23-alpine AS base

RUN corepack enable

FROM base as deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

FROM base as runner

ENV NODE_ENV=production
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown -R nextjs:nodejs .next

USER nextjs

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["sh", "-c", "yarn start"]