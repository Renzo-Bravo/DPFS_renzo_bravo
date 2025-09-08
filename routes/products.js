var express = require('express');
const productsCtrl = require('../controllers/productsCtrl');
var router = express.Router();

/* Gey Cart page. */
router.get('/cart',  productsCtrl.cart);

/*Get Delete PAge */
router.delete('/delete/:id', productsCtrl.delete)

/*Get Detail page.*/
router.get('/detail/:id', productsCtrl.detail);

/*Get list product*/
router.get('/list', productsCtrl.list);

/*Get Form create*/
router.get('/create', productsCtrl.createForm);
router.post('/create', productsCtrl.createProduct)

/*Get Form edition*/
router.get('/edition/:id', productsCtrl.editionForm);
router.put('/edition/:id', productsCtrl.updateForm);

module.exports = router;