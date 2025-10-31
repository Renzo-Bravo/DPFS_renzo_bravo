var express = require("express");
const indexCtrl = require("../controllers/indexCtrl");
var router = express.Router();

/* GET home page. */
router.get("/", indexCtrl.index);
router.get("/test", indexCtrl.products);
router.get("/brands", indexCtrl.brands)
module.exports = router;
