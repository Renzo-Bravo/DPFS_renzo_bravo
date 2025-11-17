module.exports = (sequelize, DataTypes) => {
  const alias = "User";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Debe ingresar su nombre",
        },
        len: {
          args: [2, 10],
          msg: "El nombre debe tener entre 2 y 10 caracteres",
        },
      },
    },
    surname: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Debe ingresar su apellido",
        },
        len: {
          args: [2, 10],
          msg: "El apellido debe tener entre 2 y 10 caracteres",
        },
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Debe ingresar la fecha de creación de la cuenta",
        },
      },
    },
    rol_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Debe ingresar el email",
        },
        isEmail: {
          msg: "Debe ingresar un formato de email válido",
        },
        len: {
          args: [5, 20],
          msg: "El correo debe tener entre 5 y 20 caracteres",
        },
      },
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La contraseña no puede estar vacía",
        },
        len: {
          args: [8, 250],
          msg: "La contraseña debe tener entre 8 y 32 caracteres",
        },
        is: {
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
          msg: "La contraseña debe tener al menos una mayúscula, una minúscula y un número",
        },
      },
    },
    gender_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "genders",
        key: "id",
      },
    },
    image: {
      type: DataTypes.STRING(255),
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.belongsTo(models.Gender, { foreignKey: "gender_id", as: "genero" });
    User.belongsTo(models.Rol, { foreignKey: "rol_id", as: "rango" });
  };

  return User;
};
