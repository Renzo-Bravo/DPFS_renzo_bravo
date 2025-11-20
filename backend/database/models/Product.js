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
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Debe ingresar una descripción del producto",
        },
        len: {
          args: [10, 500],
          msg: "La descripción debe tener entre 10 y 500 caracteres",
        },
      },
    },
    model: {
      type: DataTypes.STRING(50),
      validate: {
        isAlphanumeric: true,
        len: {
          args: [1, 50],
          msg: "El modelo que desea ingrear no debe sobrepasar los 50 caracteres",
        },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El precio no puede estar vacío",
        },
        isNumeric: {
          msg: "El precio debe ser un número válido",
        },
        min: {
          args: [1],
          msg: "El precio debe ser mayor a 0",
        },
        max: {
          args: [999999],
          msg: "El precio no puede superar los 999.999",
        },
      },
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
    Product.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender_as",
    });
    Product.belongsTo(models.Size, { foreignKey: "size_id", as: "size_as" });
    Product.belongsTo(models.Sale, { foreignKey: "sale_id", as: "sale_as" });
  };

  return Product;
};
