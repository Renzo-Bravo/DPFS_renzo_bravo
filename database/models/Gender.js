module.exports = (sequelize, DataTypes) => {
  const alias = "Genders";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    gender: {
      type: DataTypes.STRING(100),
    },
  };

  const config = {
    tableName: "gender",
    timestamps: false,
  };

  const Genders = sequelize.define(alias, cols, config);

  return Genders;
};
