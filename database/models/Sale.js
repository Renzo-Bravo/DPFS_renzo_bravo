module.exports = (sequelize, DataTypes) => {
  const alias = "Sale";

  const cols = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    sale: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  };

  const config = {
    tableName: "sales",
    timestamps: false,
  };

  const Sale = sequelize.define(alias, cols, config);

  return Sale;
};
