# holds-nodejs

A new Holds Service POC written in Node.js

## Table of Contents

- [holds-nodejs](#holds-nodejs)
  - [Table of Contents](#table-of-contents)
  - [Intro](#intro)
  - [Setup](#setup)
    - [Database](#database)
      - [Global Install](#global-install)
      - [With npx](#with-npx)
  - [Running the Server](#running-the-server)
  - [Sending GraphQL requests](#sending-graphql-requests)

## Intro

This is a POC application for a new Holds WebService. It is part of an experiment to see which technological stack fits our needs the most
We have chosen two different stacks to test. This was done via a democratic poll in the `#stl-holds-language` slack channel whereby three teams voted for their top two preferred languages
from a pool of four: `NodeJS, Kotlin, Elixir, Go`.
The top two voted were `NodeJS` and `Elixir`. You can see the `Elixir` repository [here](https://github.com/WeConnect/holds_service_elixir/)

## Setup

1) Install `nvm` if you don't have it yet. Follow the instructions [here](https://github.com/nvm-sh/nvm)
2) `nvm install 12.6.0`
3) `nvm use 12.6.0`
4) `npm install`

### Database

You must have a postgres database server up and running in order to use the service.
This project uses [sequelize](https://github.com/sequelize/s2equelize) as an ORM and migration manager.
In order to run migrations and db operations you need to install `sequelize-cli` as a global module OR if you don't want to install anything you can run it via `npx`:

#### Global Install

1) `npm instal --global sequelize-cli`
2) `sequelize db:create`
3) `sequelize db:migrate`
4) If you want to undo a migration, run: `sequelzie db:migrate:undo`

#### With npx

1) `npx sequelize-cli db:create`
2) `npx sequelize-cli db:migrate`

## Running the Server

The `package.json` file has several scripts:

- To run the server in "development" mode (uses [nodemon](https://nodemon.io/)) run `npm run-script dev`
- To run the server in "production" mode (uses [pm2](http://pm2.keymetrics.io/)) run `npm start`
- To run the tests, run `npm test`
- The server runs on `localhost:4000/graphql`

## Sending GraphQL requests

[Postman](https://blog.getpostman.com/2019/06/18/postman-v7-2-supports-graphql/) now supports Graphql queries. So you can use that as a standalone application to test the server
The server utilizes [apollo-server](https://www.apollographql.com/docs/apollo-server/) which has a built-in graphql playgorund for you to use with the server.
Note that the playground DOES not work when `NODE_ENV=production`
