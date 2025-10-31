module.exports = (sequelize, DataTypes) => {
  const alias = "Size";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    size: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  };

  const config = {
    tableName: "sizes",
    timestamps: false,
  };

  const Size = sequelize.define(alias, cols, config);

  return Size;
};
