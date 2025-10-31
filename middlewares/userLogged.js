const db = require("../database/models/index.js");

async function userLogged(req, res, next) {
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    res.locals.isAdmin = req.session.userLogged.rol == "admin" ? true : false;
  }

  if (!req.session.userLogged && req.cookies.email) {
    const userFound = await db.User.findOne({
      where: { email: req.cookies.email },
    });
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
