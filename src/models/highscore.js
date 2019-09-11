export default function (sequelize, DataTypes) {
  const Highscore = sequelize.define('highscore', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    highscore: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'highscores',
  });

  Highscore.associate = (models) => {
    Highscore.belongsTo(models.user);
  };

  return Highscore;
}
