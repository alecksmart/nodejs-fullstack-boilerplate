# Fullstack Boilerplate Proof-of-Concept

This is a project that connects MySQL database with React client via GraphQL-powered endpoint under one hood.

Please note, this project is not suitable for production for many features are still to be improved. However, at the time of writing this document, all features checked below are fully workable.

## Initial Setup

Add _.my_ file to the root of the project containing the admin password to your development database.

```text
[client]
user=admin
password=YOUR_PASSWORD
```

Start server application:

```bash
yarn run dev
```

Check http://localhost:4000/ if you can see the list of high scores.

Check GraphQL playground at http://localhost:4000/graphql

```graphql
query {
  highscores {
    highscore
    user {
      name
    }
  }
}
```

Finally, check the React client part at http://localhost:8080/

## Features

### Milestone 1

- [x] Designs a simple game
- [x] Run back-end and front-end as one application

### Milestone 2

- [ ] Auth for player
- [ ] Save high scores on server in a database

### Milestone 3

- [ ] Implement realtime high score polling from multiple players
- [ ] Implement dynamic rules for bonuses

### Milestone 4

- [ ] Use player geolocation

### Milestone 5

- [ ] Turn this fun project into a template application with test and production builds
- [ ] Boost security
- [ ] Dockerize

## Technologies

- [x] vanilla ES6
- [x] git flow
- [x] nodejs
- [x] Webpack
- [x] concurrently
- [x] MySQL
- [x] GraphQL
- [x] Apollo
- [x] Less
- [x] React
- [x] React unit testing with jest and enzyme
- [x] Redux
- [x] Redux Saga
- [x] Reselect
- [ ] Web workers API
- [ ] RabbitMQ
- [ ] Redis
- [ ] Docker
