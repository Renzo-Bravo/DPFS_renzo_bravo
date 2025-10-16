
module.exports = (sequelize, DataTypes) => {
  const alias = "Size";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    size: {
      type: DataTypes.STRING(50),
    },
  };

  const config = {
    tableName: "size",
    timestamps: false,
  };

  const Size = sequelize.define(alias, cols, config);

  return Size;
};
