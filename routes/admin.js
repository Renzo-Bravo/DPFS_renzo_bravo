var express = require("express");
const adminCtrl = require("../controllers/adminCtrl");
var router = express.Router();

router.get("/utils", adminCtrl.utils);

router.post("/new-color", adminCtrl.createColor);
router.post("/new-category", adminCtrl.createCategory);

module.exports = router;
