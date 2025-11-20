module.exports = (sequelize, DataTypes) => {
  const alias = "Rol";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    rol: {
      type: DataTypes.STRING(10),
      allowNull: false,
      valdate: {
        isAlpha: true,
        len: {
          args: [1, 10],
          msg: "El campo de roles tiene un maximo de 10 caracteres",
        },
      },
    },
  };

  const config = {
    tableName: "roles",
    timestamps: false,
  };

  const Rol = sequelize.define(alias, cols, config);

  return Rol;
};
