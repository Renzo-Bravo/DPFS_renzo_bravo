var express = require("express");
const productsCtrl = require("../../controllers/api/productsCtrl");
const upload = require("../../middlewares/multer.js");
const logged = require("../../middlewares/logged.js");

var router = express.Router();

router.get("/list", productsCtrl.list);

router.get("/detail/:id", productsCtrl.detail);

router.post("/create", upload.single("image"), productsCtrl.createProduct);

router.put("/edition/:id", upload.single("image"), productsCtrl.updateForm);

router.delete("/delete/:id", productsCtrl.delete);

module.exports = router;
