import ApolloClient from 'apollo-boost';
import { GRAPHQL_ENDPOINT } from '../config/pointsGame';

/**
 * @see https://stackoverflow.com/questions/54072546/apollo-client-imported-to-redux-saga
 */
export const graphqlClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT[process.env.NODE_ENV || 'development'].uri,
});
