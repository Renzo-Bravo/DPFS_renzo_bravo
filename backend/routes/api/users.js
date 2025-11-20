var express = require("express");
const apiUsersCtrl = require("../../controllers/api/usersCtrl.js");
const upload = require("../../middlewares/multerProfile.js");

var router = express.Router();

router.post("/login", apiUsersCtrl.login);

router.post("/register", upload.single("profile"), apiUsersCtrl.register);

router.get("/profile/:id", apiUsersCtrl.profile);

router.post("/logout", apiUsersCtrl.logout);

module.exports = router;
