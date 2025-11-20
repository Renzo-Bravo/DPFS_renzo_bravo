module.exports = (sequelize, DataTypes) => {
  const alias = "Brand";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    nameBrand: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: {
          args: [1, 50],
          msg: "EL nombre que desea ingresar no debe tener más de 20 caracteres",
        },
      },
    },
    image: {
      type: DataTypes.TEXT,
    },
  };

  const config = {
    tableName: "brands",
    timestamps: false,
  };

  const Brand = sequelize.define(alias, cols, config);

  return Brand;
};
