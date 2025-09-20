var express = require("express");
const productsCtrl = require("../controllers/productsCtrl");
const upload = require("../middlewares/multer");
var router = express.Router();

/* Gey accesories page. */
router.get("/accesories", productsCtrl.accesories);

/* Gey Cart page. */
router.get("/cart", productsCtrl.cart);

/*Get Form create*/
router.get("/create", productsCtrl.createForm);
router.post("/create", upload.single("image"), productsCtrl.createProduct);

/*Get Delete PAge */
router.delete("/delete/:id", productsCtrl.delete);

/*Get Detail page.*/
router.get("/detail/:id", productsCtrl.detail);

/*Get Form edition*/
router.get("/edition/:id", productsCtrl.editionForm);
router.put("/edition/:id", upload.single("image"), productsCtrl.updateForm);

/*Get list product*/
router.get("/list", productsCtrl.list);

module.exports = router;
