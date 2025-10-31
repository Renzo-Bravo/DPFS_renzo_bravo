module.exports = (sequelize, DataTypes) => {
  const alias = "Rol";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    roles: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  };

  const config = {
    tableName: "roles",
    timestamps: false,
  };

  const Rol = sequelize.define(alias, cols, config);

  return Rol;
};
