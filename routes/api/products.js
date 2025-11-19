var express = require("express");
const productsCtrl = require("../../controllers/api/productsCtrl.js");
const upload = require("../../middlewares/multer");
const logged = require("../../middlewares/logged.js");

var router = express.Router();

/* Get Cart page. */
router.get("/cart", logged,productsCtrl.cart);

/*Get Form create*/
//router.get("/create", logged, productsCtrl.createForm);
router.post("/create", upload.single("image"), productsCtrl.createProduct);

/*Get Delete PAge */
router.delete("/delete/:id", logged, productsCtrl.delete);

/*Get Detail page.*/
router.get("/detail/:id", productsCtrl.detail);

/*Get Form edition*/
//router.get("/edition/:id",logged ,productsCtrl.editionForm);
router.put("/edition/:id", upload.single("image"), productsCtrl.updateForm);

/*Get list product*/
router.get("/list", productsCtrl.list);

module.exports = router;
