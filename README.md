# Fullstack Boilerplate Proof-of-concept Project

## Initial Setup

Tune scripts in package.json.
Optional tools:

```bash
sudo npm install -g sequelize-auto
npm install -g mysql
# Migrate example
sequelize-auto -o "./models" -d coding-demo -h localhost -u coding-demo -p 3306 -x coding-demo -e mysql
# Start MySQL server
yarn run sequelize-skeleton
```

## Start development

Add _.password_ file to the root of the project containing the admin password to your development database.

```bash
yarn start
```

## Features

### Milestone 1

- [x] Designs a simple game

### Milestone 2

- [ ] Auth for player
- [ ] Save high scores on server in a database

### Milestone 3

- [ ] Implement realtime high score polling from multiple players
- [ ] Implement dynamic rules for bonuses

### Milestone 4

- [ ] Use player geolocation

### Milestone 5

- [ ] Turn this fun project into a template application

## Technologies Implemented

- [x] nodejs
- [x] Webpack
- [x] concurrently
- [x] MySQL
- [x] GraphQL
- [x] Apollo
- [x] Less
- [x] React
- [x] React unit testing, jest, enzyme
- [x] Redux
- [ ] fetch API
- [ ] Redux Saga
- [ ] Reselect
- [ ] Web workers API
- [ ] RabbitMQ
- [ ] Redis
