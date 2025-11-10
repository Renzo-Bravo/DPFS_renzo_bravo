module.exports = (sequelize, DataTypes) => {
  const alias = "Category";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    typeBike: {
      type: DataTypes.STRING(20),
      alllowNull: false,
      validate: {
        isAlpha: true,
        len: {
          args: [1, 20],
          msg: "El tipo de bicicleta pueder tener 20 caracteres",
        },
      },
    },
  };

  const config = {
    tableName: "categories",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);

  return Category;
};
