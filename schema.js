export default `
  type User {
    id: ID!
    name: String!
    password: String!
    created_at: String,
    updated_at: String,
    highscores: [Highscore!]!
  }

  type Highscore {
    id: ID!
    user_id: ID!,
    highscore: Int!,
    created_at: String,
    updated_at: String,
    user: User!
  }

  type Query {
    highscores: [Highscore!]!
    users: [User!]!
    highscore(id: ID!): Highscore
    user(id: ID!): User
  }

  type Mutation {
    createHighscore(highscore:Int!, user_id: ID!): Highscore!
  }
`;
