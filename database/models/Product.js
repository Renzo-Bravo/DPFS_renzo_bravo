module.exports = (sequelize, DataTypes) => {
  const alias = "Product";

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
<<<<<<< HEAD
    brand_id: {
=======
    brand: {
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
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
<<<<<<< HEAD
        model: "sizes",
=======
        model: "size",
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
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
    sale_id: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      references: {
<<<<<<< HEAD
        model: "sales",
=======
        model: "sale",
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
        key: "id",
      },
    },
  };

  const config = {
<<<<<<< HEAD
    tableName: "products",
=======
    tableName: "Products",
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

<<<<<<< HEAD
  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: "brand_id", as: "marca" });
    Product.belongsTo(models.Category, { foreignKey: "category_id", as: "categoria" });
    Product.belongsTo(models.Colors, { foreignKey: "color_id", as: "colores" });
    Product.belongsTo(models.Genders, { foreignKey: "gender_id", as: "genero" });
    Product.belongsTo(models.Sale, { foreignKey: "sale_id", as: "oferta" });
=======

  //Los alias por ahora en español 

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: "brand_id", as: "marca" });
    Product.belongsTo(models.Category, { foreignKey: "category_id", as: "categoria" });
    Product.belongsTo(models.Color, { foreignKey: "color_id", as: "colores" });
    Product.belongsTo(models.Gender, { foreignKey: "gender_id", as: "genero" });
    Product.belongsTo(models.Sale, {foreignKey: "sale_id", as: "oferta"})
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
    Product.belongsTo(models.Size, { foreignKey: "size_id", as: "talle" });
  };

  return Product;
};
