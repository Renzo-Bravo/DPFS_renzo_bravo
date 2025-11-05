module.exports = (sequelize, DataTypes) => {
  const alias = "Product";

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    brand_id: {
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
        model: "genders",
        key: "id",
      },
    },
    size_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "sizes",
        key: "id",
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    model: {
      type: DataTypes.STRING(250),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    sale_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "sales",
        key: "id",
      },
    },
  };

  const config = {
    tableName: "zproducts",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: "brand_id", as: "brand_as" });
    Product.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category_as",
    });
    Product.belongsTo(models.Color, { foreignKey: "color_id", as: "color_as" });
    Product.belongsTo(models.Gender, { foreignKey: "gender_id", as: "gender_as" });
    Product.belongsTo(models.Size, { foreignKey: "size_id", as: "size_as" });
    Product.belongsTo(models.Sale, { foreignKey: "sale_id", as: "sale_as" });
  };

  return Product;
};
