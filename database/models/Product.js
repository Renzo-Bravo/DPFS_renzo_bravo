module.exports = (sequelize, DataTypes) => {
  const alias = "Product";

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    brand: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "brands",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
    color_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "colors",
        key: "id",
      },
    },
    gender_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "gender",
        key: "id",
      },
    },
    size_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "size",
        key: "id",
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    model: {
      type: DataTypes.STRING(100),
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  };

  const config = {
    tableName: "Products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: "brand_id", as: "marca" });
    Product.belongsTo(models.Category, { foreignKey: "category_id", as: "categoria" });
    Product.belongsTo(models.Color, { foreignKey: "color_id", as: "colores" });
    Product.belongsTo(models.Gender, { foreignKey: "gender_id", as: "genero" });
    Product.belongsTo(models.Size, { foreignKey: "size_id", as: "talle" });
  };

  return Product;
};
