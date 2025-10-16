module.exports = (sequelize, DataTypes) => {
  const alias = "Colors";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    color: {
      type: DataTypes.STRING(100),
    },
  };

  const config = {
    tableName: "colors",
    timestamps: false,
  };

  const Colors = sequelize.define(alias, cols, config);

  return Colors;
};
