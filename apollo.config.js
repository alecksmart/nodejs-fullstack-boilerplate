module.exports = {
  client: {
    service: {
      name: 'nodejs-fullstack-boilerplate',
      url: 'http://localhost:4000/graphql',
      skipSSLValidation: true,
    },
  },
};

// module.exports = {
//   client: {
//     service: {
//       name: 'local file',
//       localSchemaFile: './src/schemas/schema.graphql',
//     },
//   },
// };
