module.exports = (sequelize, DataTypes) => {
  const alias = "Size";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    size: {
      type: DataTypes.STRING(3),
      allowNull: false,
      validate: {
        len : {
          args : [1, 3],
          msg: "el talle puede contener hasta 3 caracteres"
        }
      }
    },
  };

  const config = {
    tableName: "sizes",
    timestamps: false,
  };

  const Size = sequelize.define(alias, cols, config);

  return Size;
};
