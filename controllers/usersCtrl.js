const bcrypt = require("bcryptjs");
const db = require("../database/models/index");

const usersCtrl = {
  login: function (req, res, next) {
    res.render("users/login");
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("email");
    res.redirect("/");
  },

  register: function (req, res, next) {
    res.render("users/register");
  },
  profile: function (req, res, next) {
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    res.render("users/profile", { user: req.session.userLogged });
  },
  processLogin: async (req, res) => {
    try {
      const userFound = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userFound) {
        const passOk = bcrypt.compareSync(
          req.body.password,
          userFound.password
        );
        if (passOk) {
          req.session.userLogged = userFound;
          if (req.body.rememberMe == "on") {
            res.cookie("email", userFound.email, { maxAge: 60 * 1000 * 60 });
          }
          return res.redirect("/users/profile");
        } else {
          return res.render("NO ENCONTRADO");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  processRegister: async (req, res) => {
    try {
      const newUser = {
        checkbox: req.body.checkbox,
        date: req.body.date,
        email: req.body.email,
        gender: req.body.gender,
        name: req.body.name,
        rol: req.body.rol,
        surname: req.body.surname,
        password: bcrypt.hashSync(req.body.password, 10),
        image:
          req.file && req.file.filename ? req.file.filename : "profile.jpg",
      };
      await db.User.create(newUser);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = usersCtrl;
