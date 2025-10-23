module.exports = (sequelize, DataTypes) => {
  const alias = "Brand";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    nameBrand: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  };

  const config = {
    tableName: "brands",
    timestamps: false,
  };

  const Brand = sequelize.define(alias, cols, config);

  return Brand;
};
