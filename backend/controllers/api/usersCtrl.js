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

      return res.json({
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
      console.error(error);
    }
  },

  register: async (req, res) => {
    try {
      const newUser = await db.User.create({
        checkbox: req.body.checkbox,
        date: req.body.date,
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        password: bcrypt.hashSync(req.body.password, 10),
        created_at: new Date(),
        rol_id: req.body.rol_id,
        gender_id: req.body.gender_id,
        image: req.file?.filename || "profile.jpg",
      });

      return res.status(201).json({
        ok: true,
        message: "Usuario registrado",
        user: newUser,
      });
    } catch (error) {
      console.error(error);
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

      return res.json({
        ok: true,
        user,
      });
    } catch (error) {
      console.error(error);
    }
  },

  logout: (req, res) => {
    return res.json({
      ok: true,
      message: "es una API sin sesiones no se guarda estados",
    });
  },
};

module.exports = apiUsersCtrl;
