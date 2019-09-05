/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
export default {
  User: {
    highscores: (parent, args, context, info) => parent.getHighscores(),
  },
  Highscore: {
    user: (parent, args, context, info) => parent.getUser(),
  },
  Query: {
    highscores: (parent, args, { db }, info) => db.highscore.findAll(),
    highscore: (parent, { id }, { db }, info) => db.highscore.findByPk(id),
    users: (parent, args, { db }, info) => db.user.findAll(),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
  },
  Mutation: {
    createHighscore: (parent, { highscore, user_id }, { db }, info) =>
      db.post.create({
        highscore,
        user_id,
      }),
  },
};
