export default function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(191),
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
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.highscore);
  };

  return User;
}
