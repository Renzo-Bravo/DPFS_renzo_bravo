const bcrypt = require("bcryptjs");

const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../", "data", "users.json");

const usersCtrl = {
  login: function (req, res, next) {
    res.render("users/login");
  },

  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("email")
    res.redirect("/")
  },

  register: function (req, res, next) {
    res.render("users/register");
  },
  profile: function (req, res, next) {
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    res.render("users/profile", { user: req.session.userLogged });
  },
  processLogin: (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    const userFound = users.find((user) => user.email == req.body.email);
    if (userFound) {
      const passOk = bcrypt.compareSync(req.body.password, userFound.password);
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
  },
  processRegister: (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      checkbox: req.body.checkbox,
      date: req.body.date,
      email: req.body.email,
      gender: req.body.gender,
      name: req.body.name,
      rol: req.body.rol,
      surname: req.body.surname,
      password: bcrypt.hashSync(req.body.password, 10),
      image: req.file && req.file.filename ? req.file.filename : "profile.jpg",
    };
    users.push(newUser);
    const usersJSON = JSON.stringify(users, null, " ");
    fs.writeFileSync(usersPath, usersJSON);
    res.redirect("/");
  },
};

module.exports = usersCtrl;
