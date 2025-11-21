const bcrypt = require("bcryptjs");
const db = require("../../database/models/index");

const apiUsersCtrl = {
  login: async (req, res) => {
    try {
      const user = await db.User.findOne({
        where: { email: req.body.email },
      });

      if (!user) {
        return res.status(404).json({
          ok: false,
          message: "Usuario no encontrado",
        });
      }

      const passOk = bcrypt.compareSync(req.body.password, user.password);

      if (!passOk) {
        return res.status(400).json({
          ok: false,
          message: "Contraseña incorrecta",
        });
      }

      return res.status(200).json({
        ok: true,
        message: "Login correcto",
        user: {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          image: user.image,
          gender_id: user.gender_id,
          rol_id: user.rol_id,
        },
      });
    } catch (error) {
      console.error("Error en el login:", error);
      return res.status(500).json({
        ok: false,
        message: "Error interno del servidor durante el inicio de sesión.",
      });
    }
  },

  register: async (req, res) => {
    try {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);

      const newUser = await db.User.create({
        checkbox: req.body.checkbox,
        date: req.body.date,
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        password: hashedPassword,
        created_at: new Date(),
        rol_id: req.body.rol_id,
        gender_id: req.body.gender_id,
        image: req.file?.filename || "profile.jpg",
      });

      const userResponse = newUser.toJSON();
      delete userResponse.password;

      return res.status(201).json({
        ok: true,
        message: "Usuario registrado exitosamente",
        user: userResponse,
      });
    } catch (error) {
      console.error("Error en el registro:", error);

      let statusCode = 500;
      let errorMessage = "Error interno del servidor durante el registro.";

      if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
      ) {
        statusCode = 400;
        errorMessage =
          "Error de validación: Por favor, revisa los datos proporcionados.";
        if (error.fields && error.fields.email) {
          errorMessage = "El correo electrónico ya está registrado.";
        }
      }

      return res.status(statusCode).json({
        ok: false,
        message: errorMessage,
        details: error.message,
      });
    }
  },

  profile: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          ok: false,
          message: "Usuario no encontrado",
        });
      }

      return res.status(200).json({
        ok: true,
        user,
      });
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      return res.status(500).json({
        message: "Error interno del servidor al obtener el perfil.",
      });
    }
  },

  logout: (req, res) => {
    return res.status(200).json({
      ok: true,
      message: "Sesión cerrada.",
    });
  },
  allUsers: async function (req, res) {
    try {
      const users = await db.User.findAll({
        attributes: {
          exclude: ["password"],
          include: [
            [
              db.sequelize.literal(
                `CONCAT('${process.env.URL_API_HOST}:${process.env.PORT}${process.env.PATH_USERS_IMAGES}/', User.image)`
              ),
              "urlImage",
            ],
            [
              db.sequelize.literal(
                `CONCAT('${process.env.URL_API_HOST}:${process.env.PORT}/api/users/', User.id)`
              ),
              "url",
            ],
          ],
        },
      });
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error interno" });
    }
  },
  lastUser: async function (req, res) {
    try {
      const lastUser = await db.User.findOne({
        order: [["id", "DESC"]],
      });

      return res.status(200).json(lastUser); 
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Error obteniendo el último usuario" });
    }
  },
};

module.exports = apiUsersCtrl;
