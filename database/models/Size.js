module.exports = (sequelize, DataTypes) => {
  const alias = "Size";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    size: {
      type: DataTypes.STRING(50),
    },
  };

  const config = {
<<<<<<< HEAD
    tableName: "sizes",
=======
    tableName: "size",
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
    timestamps: false,
  };

  const Size = sequelize.define(alias, cols, config);

  return Size;
};
