module.exports = (sequelize, DataTypes) => {
  const alias = "Users";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    surname: {
      type: DataTypes.STRING(100),
    },
    date: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    rol: {
      type: DataTypes.STRING(10),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(200),
    },
    checkbox: {
      type: DataTypes.STRING(100),
    },
    image: {
      type: DataTypes.TEXT,
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };

  const Users = sequelize.define(alias, cols, config);

  return Users;
};
