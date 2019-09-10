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
    highscores: async (parent, { offset = 0, limit = 5, order = [['highscore', 'DESC']] }, { db }, info) =>
      db.highscore.findAll({ offset, limit, order }),
    highscore: (parent, { id }, { db }, info) => db.highscore.findByPk(id),
    users: (parent, args, { db }, info) => db.user.findAll(),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
  },
  Mutation: {
    addUser: (parent, { name, password }, { db }, info) =>
      db.user.create({
        name,
        password,
      }),
    addHighscore: (parent, { highscore, user_id }, { db }, info) =>
      db.highscore.create({
        highscore,
        user_id,
      }),
  },
};
