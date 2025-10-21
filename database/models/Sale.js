module.exports = (sequelize, DataTypes) => {
  const alias = "Sale";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue : true,
    },
  };

  const config = {
    tableName: "sales",
    timestamps: false,
  };

  const Sale = sequelize.define(alias, cols, config);

  return Sale;
};
