module.exports = (sequelize, DataTypes) => {
  const alias = "Users";

  const cols = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      isUnique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "gender",
        key: "id",
      },
    },
    image: {
      type: DataTypes.TEXT,
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };

  const Users = sequelize.define(alias, cols, config);

  Users.associate = (models) => {
    Users.belongsTo(models.Genders, { foreignKey: "gender_id", as: "gender" });
  };

  return Users;
};
