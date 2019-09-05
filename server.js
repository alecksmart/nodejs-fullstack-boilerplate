import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import faker from 'faker';
import times from 'lodash/times';
import random from 'lodash/random';
import typeDefs from './schema';
import resolvers from './resolvers';
import db from './models';

const color = {
  log: txt => console.log('\x1b[1m\x1b[36m%s\x1b[0m', txt, '\x1b[0m'),
};

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db },
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static('app/public'));

db.sequelize.sync().then(() => {
  // populate
  db.user.bulkCreate(
    times(10, () => ({
      name: faker.name.firstName(),
      password: faker.name.lastName(),
    })),
  );

  db.highscore.bulkCreate(
    times(20, () => ({
      highscore: random(200, 500),
      userId: random(1, 10),
    })),
  );

  app.listen({ port: 4000 }, () =>
    color.log(`Server ready at http://localhost:4000${server.graphqlPath} 🚀`),
  );
});
