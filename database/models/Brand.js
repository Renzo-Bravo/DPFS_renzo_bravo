module.exports = (sequelize, DataTypes) => {
  const alias = "Brand";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    nameBrand: {
      type: DataTypes.STRING(100),
    },
    image: {
      type: DataTypes.TEXT,
    },
  };

  const config = {
    tableName: "brands",
    timestamps: false,
  };

  const Brand = sequelize.define(alias, cols, config);

  return Brand;
};
