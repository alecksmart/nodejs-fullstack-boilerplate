import ApolloClient from 'apollo-boost';
import { GRAPHQL_ENDPOINT } from '../config/pointsGame';

export const graphqlClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT[process.env.NODE_ENV || 'development'].uri,
});
