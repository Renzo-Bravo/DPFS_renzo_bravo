module.exports = (sequelize, DataTypes) => {
  const alias = "Color";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    color: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        isAlpha: true,
        len: {
          args: [1, 15],
          msg: "El color que desea ingresar no debe sobrepasar los 15 caracteres",
        },
      },
    },
    code: {
      type: DataTypes.STRING(15),
      validate: {
        isAlphanumeric: true,
        len: {
          args: [1, 20],
          msg: "El codigo que desea ingresar no debe tener más de 15 caracteres",
        },
      },
    },
  };

  const config = {
    tableName: "colors",
    timestamps: false,
  };

  const Color = sequelize.define(alias, cols, config);

  return Color;
};
