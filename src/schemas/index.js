import { importSchema } from 'graphql-import';

const typeDefs = importSchema('./src/schemas/schema.graphql');
export default typeDefs;
