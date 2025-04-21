FROM node:23

WORKDIR /app

RUN corepack enable

ENTRYPOINT [ "sh", "-c", "yarn && yarn dev" ]