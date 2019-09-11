import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GRAPHQL_ENDPOINT } from '../config/pointsGame';

export const graphqlClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT[process.env.NODE_ENV || 'development'].uri,
  cache: new InMemoryCache(),
});
