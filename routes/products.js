var express = require('express');
const productsCtrl = require('../controllers/productsCtrl');
var router = express.Router();

/* GET Cart page. */
router.get('/cart',  productsCtrl.cart);

/*Get Detail page.*/
router.get('/detail', productsCtrl.products);

/*Get Form create*/
router.get('/create', productsCtrl.create);

/*Get Form edition*/
router.get('/edition', productsCtrl.edition);

module.exports = router;