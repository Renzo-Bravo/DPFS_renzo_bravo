const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../", "data", "users.json");

const usersCtrl = {
  login: function (req, res, next) {
    res.render("users/login", { title: "Express" });
  },
  register: function (req, res, next) {
    res.render("users/register", { title: "Express" });
  },
  profile: function (req, res, next) {
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    console.log(users[0].name, "holaaaa")
    res.render("users/profile", { users });
  },
  processLogin: (req, res) => {
    res.redirect("/")
  },
  processRegister: (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.redirect("/products/list")
  }
};

module.exports = usersCtrl;
