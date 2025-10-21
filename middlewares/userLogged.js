const session = require("express-session");
const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../", "data", "users.json");

function userLogged(req, res, next) {
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    res.locals.isAdmin = req.session.userLogged.rol == "admin" ? true : false;
  }

  if (!req.session.userLogged && req.cookies.email) {
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    const userFound = users.find((user) => user.email == req.cookies.email);
    if (userFound) {
      res.locals.isLogged = true;
      req.session.userLogged = userFound;
      res.locals.userLogged = req.session.userLogged;
      res.locals.isAdmin = req.session.userLogged.rol == "admin" ? true : false;
    }
  }

  next();
}

module.exports = userLogged;
