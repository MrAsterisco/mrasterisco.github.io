# My Portfolio
This repository contains my Portfolio website. The site is built with Next.js and Prisma.

You can view the deployed website at [mrasteris.co](https://mrasteris.co).

## Development
You are free to fork this Portfolio and use it for yourself, if you like it.

### Requirements
- NodeJS 20 or later.
- PostgreSQL 12 or higher.
- Yarn 4 ([see how to install it](https://yarnpkg.com/getting-started/install)).

### Setup
Run the following command to download the required dependencies:

```bash
yarn
```

> Note: if you're editing this website on a virtual machine that is using Parallels Desktop's shared folders, you will need to symlink the `node_modules` folder to a location that is not on the shared drive.

Configure your PostgreSQL local instance by creating a new user and a new database.

```sql
CREATE ROLE "Portfolio" LOGIN PASSWORD 'changeThisPassword!' SUPERUSER INHERIT CREATEDB CREATEROLE NOREPLICATION;
CREATE DATABASE "Portfolio";
GRANT ALL ON DATABASE "Portfolio" TO "Portfolio";
```

Then, create a `.env` file in the root folder with the following details:

```
# Prisma Database URL
DATABASE_URL="postgresql://Portfolio:changeThisPassword!@localhost:5432/Portfolio"

# API Endpoint
API_ENDPOINT="http://localhost:3000/api"
```

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

## Status
This website is **under active development**, but it is deployed to a [Production environment](https://mrasteris.co).

## Contributions
I **will not accept** contributions to this repository, but if you have ideas or suggestions for improvements, you can [open an issue](https://github.com/MrAsterisco/mrasterisco.github.io/issues/new/choose).

## License
This website is distributed under the MIT license. See LICENSE for details.
