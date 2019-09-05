# Fullstack Boilerplate Proof-of-Concept

## Initial Setup

Use Linux. Tune scripts in package.json. Optional tools:

```bash
sudo npm install -g sequelize-auto
npm install -g mysql
# Migrate example
sequelize-auto -o "./models" -d coding-demo -h localhost -u coding-demo -p 3306 -x coding-demo -e mysql
# Start MySQL server
yarn run sequelize-skeleton
```

## Start development

Add _.my_ file to the root of the project containing the admin password to your development database.

```text
[client]
user=admin
password=YOUR_PASSWORD
```

Start application:

```bash
yarn start
```

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

- [ ] Turn this fun project into a template application

## Technologies Implemented

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
- [ ] fetch API
- [ ] Redux Saga
- [ ] Reselect
- [ ] Web workers API
- [ ] RabbitMQ
- [ ] Redis
