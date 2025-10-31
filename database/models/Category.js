module.exports = (sequelize, DataTypes) => {
  const alias = "Category";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    typeBike: {
      type: DataTypes.STRING(50),
      alllowNull: false,
    },
  };

  const config = {
    tableName: "categories",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);

  return Category;
};
