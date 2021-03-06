# Fullstack Boilerplate Proof-of-Concept

This is a project that connects MySQL database with React client via GraphQL-powered endpoint under one hood.

Please note, this project is not suitable for production for many features are still to be improved. However, at the time of writing this document, all features checked below are fully workable.

## Initial Setup

Examine _.sql_ to see if this is compliant with your development possibilities. Add _.my_ file to the root of the project containing the admin settings for your development database.

```text
[client]
user=admin
password=YOUR_PASSWORD
```

Start MySQL server.

## Install

```bash
yarn install && cd client && yarn install && cd ..
yarn run init-db
```

## Start development

```bash
yarn run dev
```

Check http://localhost:4000/ if you can see the list of high scores. Finally, check the React client part at http://localhost:8080/.

## Features

### Milestone 1

- [x] Designs a simple game
- [x] Run back-end and front-end as one application

### Milestone 2

- [x] Pull high scores by other players from server

### Milestone 3

- [ ] Auth for player
- [ ] Save high scores on server in a database

### Milestone 4

- [ ] Implement realtime high score polling from multiple players
- [ ] Implement dynamic rules for bonuses

### Milestone 5

- [ ] Boost security
- [ ] Dockerize

## Under the Hood

- [x] Vanilla ES6
- [x] git flow
- [x] nodejs
- [x] Webpack
- [x] concurrently
- [x] MySQL
- [x] GraphQL
- [x] Apollo
- [x] Less
- [x] React
- [x] Redux
- [x] Redux Saga
- [x] Reselect
- [x] Material UI
- [x] Router
- [ ] RabbitMQ
- [ ] Web Workers + Web Sockets + GraphQL
- [ ] Redis
- [ ] Unit tests, integration tests and end-to-end tests
- [ ] UI testing using puppeteer
- [ ] Docker
