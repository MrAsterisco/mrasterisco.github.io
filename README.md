# My Portfolio

This repository contains my Portfolio website. The site is built with Next.js and Prisma.

You can view the deployed website at [mrasteris.co](https://mrasteris.co).

## Development

You are free to fork this Portfolio and use it for yourself, if you like it.

### Requirements

- Docker 27 or later.

**or**

- NodeJS 22 or later.
- PostgreSQL 12 or higher.
- Yarn 4 ([see how to install it](https://yarnpkg.com/getting-started/install)).

### Setup

Create a `.env` file in the root folder with the following details:

```
# The following values are used in the Docker Compose stack.
DATABASE_USER="Portfolio"
DATABASE_PASSWORD="changeThisPassword!"
DATABASE_NAME="Portfolio"
# This value is used by Prisma to connect to the database.
# If you're using Docker, make sure to leave `postgres` as the host.
DATABASE_URL="postgresql://Portfolio:changeThisPassword!@postgres:5432/Portfolio"

# API Endpoint
API_ENDPOINT="http://localhost:3000/api"
```

#### Running in Docker

Run the following command to create a Docker Compose stack:

```bash
make run
```

Then access the website at [http://localhost:3000](http://localhost:3000).

#### Running natively

Make sure you're running the correct version of NodeJS and Yarn.
For NodeJS, you can use [N](https://github.com/mklement0/n-install):

```bash
n $(cat .node_version)
```

You need a PostgreSQL instance version 12 or later running locally.
First, connect to the database and create a new role and database:

```sql
CREATE ROLE "Portfolio" LOGIN PASSWORD 'changeThisPassword!' SUPERUSER INHERIT CREATEDB CREATEROLE NOREPLICATION;
CREATE DATABASE "Portfolio";
GRANT ALL ON DATABASE "Portfolio" TO "Portfolio";
```

> Make sure that the values that you're using for the role and database match the ones in the `.env` file.

Then, install the dependencies:

```bash
yarn install
```

> Note: if you're editing this website on a virtual machine that is using Parallels Desktop's shared folders, you will need to symlink the `node_modules` folder to a location that is not on the shared drive. This is a limitation of Parallel's shared folders.

Finally, run the first Prisma setup to configure the database:

```bash
yarn prisma migrate dev
```

Then, restore the default data from the seed:

```bash
yarn prisma migrate reset
```

You should then be able to run the website locally by typing:

```bash
yarn dev
```

You can access the website at [http://localhost:3000](http://localhost:3000).

## Status

This website is **under active development**. It is deployed to a [Production environment](https://mrasteris.co).

## Contributions

I **will not accept** contributions to this repository, but if you have ideas or suggestions for improvements, you can [open an issue](https://github.com/MrAsterisco/mrasterisco.github.io/issues/new/choose).

## License

This website is distributed under the MIT license. See LICENSE for details.
