module.exports = (sequelize, DataTypes) => {
  const alias = "Product";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    brand: {
      type: DataTypes.STRING(100),
    },
    category_id: {
      type: DataTypes.STRING(100),
    },
    color_id: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.TEXT,
    },
    gender_id: {
      type: DataTypes.STRING(100),
    },
    model: {
      type: DataTypes.STRING(100),
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    size_id: {
      type: DataTypes.STRING(10),
    },
    image: {
      type: DataTypes.TEXT,
    },
  };

  const config = {
    tableName: "Products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  return Product;
};
