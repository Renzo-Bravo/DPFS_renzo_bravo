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
      type: DataTypes.TINYINT,
      references: {
        model: "sales",
        key: "id",
      },
    },
  };

  const config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: "brand_id", as: "marca" });
    Product.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "categoria",
    });
    Product.belongsTo(models.Color, { foreignKey: "color_id", as: "colores" });
    Product.belongsTo(models.Gender, { foreignKey: "gender_id", as: "genero" });
    Product.belongsTo(models.Size, { foreignKey: "size_id", as: "talle" });
    Product.belongsTo(models.Sale, { foreignKey: "sale_id", as: "oferta" });
  };

  return Product;
};
