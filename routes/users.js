var express = require("express");
const usersCtrl = require("../controllers/usersCtrl");
const upload = require("../middlewares/multerProfile.js");
var router = express.Router();

/* GET login page */
router.get("/login", usersCtrl.login);
/*post FORM*/
router.post("/login", usersCtrl. processLogin);

/* GET register page */
router.get("/register", usersCtrl.register);
/*post FORM*/
router.post("/register",upload.single("profile") ,usersCtrl. processRegister);

/* Get profile page */
router.get("/profile", usersCtrl.profile);

module.exports = router;
