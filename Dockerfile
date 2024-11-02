FROM node:22-alpine AS base

WORKDIR /app

RUN corepack enable
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install

COPY ./prisma ./prisma
RUN yarn prisma generate

CMD ["sh", "-c", "yarn prisma migrate reset --force && yarn dev"]
