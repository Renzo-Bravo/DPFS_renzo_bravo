module.exports = (sequelize, DataTypes) => {
  const alias = "Gender";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  };

  const config = {
    tableName: "genders",
    timestamps: false,
  };

  const Gender = sequelize.define(alias, cols, config);

  return Gender;
};
