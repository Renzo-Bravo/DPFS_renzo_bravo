module.exports = (sequelize, DataTypes) => {
  const alias = "Gender";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    gender: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        isAlpha: true,
        len: {
          args: [1, 15],
          msg: "el genero que desea ingresar no debe tener más de 15 caracteres",
        },
      },
    },
  };

  const config = {
    tableName: "genders",
    timestamps: false,
  };

  const Gender = sequelize.define(alias, cols, config);

  return Gender;
};
