var express = require("express");
const adminCtrl = require("../controllers/adminCtrl");
const logged = require("../middlewares/logged.js");

var router = express.Router();

router.get("/utils", logged,adminCtrl.utils);

router.post("/new-color", logged,adminCtrl.createColor);
router.post("/new-category", adminCtrl.createCategory);

module.exports = router;
