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
<<<<<<< HEAD
      type: DataTypes.DATE,
=======
      type: DataTypes.INTEGER.UNSIGNED,
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
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
<<<<<<< HEAD
    Users.belongsTo(models.Genders, { foreignKey: "gender_id", as: "gender" });
=======
    Users.belongsTo(models.Gender, { foreignKey: "gender_id", as: "gender" });
>>>>>>> 44c6d4c46823914186f0cf1c3b9888ea326ee203
  };

  return Users;
};
