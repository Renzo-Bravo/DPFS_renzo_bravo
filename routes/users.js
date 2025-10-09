var express = require("express");
const usersCtrl = require("../controllers/usersCtrl");
const upload = require("../middlewares/multerProfile.js");
const logged = require("../middlewares/logged.js");
const guest = require("../middlewares/guest.js");

var router = express.Router();

/* GET login page */
router.get("/login", guest,usersCtrl.login);
/*post FORM*/
router.post("/login", guest,usersCtrl. processLogin);

/* */
router.get("/logout", usersCtrl. logout);

/* GET register page */
router.get("/register", guest,usersCtrl.register);
/*post FORM*/
router.post("/register", guest,upload.single("profile"), usersCtrl. processRegister);

/* Get profile page */
router.get("/profile", logged, usersCtrl.profile);

module.exports = router;
