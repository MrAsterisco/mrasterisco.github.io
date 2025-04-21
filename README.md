# My Portfolio

This repository contains my Portfolio website. The site is built with Next.js.

You can view the deployed website at [mrasteris.co](https://mrasteris.co).

## Development

### Requirements

- Docker 27 or later.

**or**

- NodeJS 23 or later.
- Yarn 4 ([see how to install it](https://yarnpkg.com/getting-started/install)).

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

```bash
yarn install
```

> Note: if you're editing this website on a virtual machine that is using Parallels Desktop's shared folders, you will need to symlink the `node_modules` folder to a location that is not on the shared drive. This is a limitation of Parallel's shared folders.

Then run the website locally by typing:

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