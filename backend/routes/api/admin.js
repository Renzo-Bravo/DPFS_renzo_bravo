var express = require("express");
const adminCtrl = require("../../controllers/api/adminCtrl");

var router = express.Router();

router.post("/new-color", adminCtrl.createColor);

router.post("/new-category", adminCtrl.createCategory);

module.exports = router;
