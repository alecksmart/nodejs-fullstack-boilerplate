import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import faker from 'faker';
import times from 'lodash/times';
import random from 'lodash/random';
import typeDefs from './schemas';
import resolvers from './resolvers/resolvers';
import db from './models';

const color = { log: txt => console.log('\x1b[1m\x1b[36m%s\x1b[0m', txt, '\x1b[0m') };

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db },
});

const app = express();
server.applyMiddleware({ app });
app.use(express.static('app/public'));

db.sequelize.transaction(async transaction => {
  const options = { raw: true, transaction };

  await db.sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0', options)
    .then(() => db.sequelize.query('truncate table highscores', options))
    .then(() => db.sequelize.query('truncate table users', options))
    .then(() => db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options));

  await db.user.bulkCreate(
    times(10, () => ({
      name: faker.name.firstName(),
      password: faker.name.lastName(),
    })));

  await db.highscore.bulkCreate(
    times(20, () => ({
      highscore: random(200, 500),
      userId: random(1, 10),
    })));
})
  .then(() => {
    app.listen({ port: 4000 }, () =>
      color.log(`Server at http://localhost:4000${server.graphqlPath} 🚀  Client at http://localhost:8080`));
  })
  .catch((e) => console.log(e));
