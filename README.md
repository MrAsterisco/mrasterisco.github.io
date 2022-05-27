# My Portfolio
This repository contains my Portfolio website. The site is built with Next.js and Prisma.

You can view the deployed website at [mrasteris.co](https://mrasteris.co).

## Development
You are free to fork this Portfolio and use it for yourself, if you like it.

### Requirements
- NodeJS 16 or later.
- PostgreSQL 12 or higher.
- Yarn

### Setup
Run the following command to download the required dependencies:

```bash
yarn install
```

Configure your PostgreSQL local instance by creating a new user and a new database.
Then, create a `.env` file in the root folder with the following details:

```
# Prisma Database URL
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<databaseName>"

# API Endpoint
API_ENDPOINT="http://localhost:3000/api"
```

Finally, run the first Prisma setup to configure the database:

```bash
npx prisma migrate dev
```

You should then be able to run the website locally by typing:

```bash
yarn dev
```

## Status
This website is **under active development**, but it is deployed to a Production environment.

## Contributions
I **will not accept** contributions to this repository, but if you have ideas or suggestions for improvements, you can [open an issue](https://github.com/MrAsterisco/mrasterisco.github.io/issues/new/choose).

## License
This website is distributed under the MIT license. See LICENSE for details.
