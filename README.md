# [@rootsher/boilerplate-backend](https://github.com/rootsher/boilerplate-backend)

[![GitHub issues](https://img.shields.io/github/issues/rootsher/boilerplate-backend.svg)](https://github.com/rootsher/boilerplate-backend/issues)
[![GitHub PRs](https://img.shields.io/github/issues-pr/rootsher/boilerplate-backend.svg)](https://github.com/rootsher/boilerplate-backend:wq/pulls)

## Running

### Installation

```shell
$ npm install
```

### Development mode

```shell
$ npm start
```

### Production build

```shell
$ npm build
```

## Database

* generate migrations:

```shell
$ npm run migration:generate
```

* run migrations:

```shell
$ npm run migration:run
```

## Working with CI (GitHub Actions)

Before working with CI - make sure you have a production environment ready.
In addition to the production infrastructure itself, you should have several secret
variables set up in this repository to communicate with the artifact registry.

For more details, see [boilerplate-infrastructure](https://github.com/rootsher/boilerplate-infrastructure).

## This is a series of related projects

* [https://github.com/rootsher/boilerplate-dev](https://github.com/rootsher/boilerplate-dev)
* [https://github.com/rootsher/boilerplate-frontend](https://github.com/rootsher/boilerplate-frontend)
* [https://github.com/rootsher/boilerplate-backend](https://github.com/rootsher/boilerplate-backend)
* [https://github.com/rootsher/boilerplate-infrastructure](https://github.com/rootsher/boilerplate-infrastructure)
