const productsCtrl = {
    cart:function(req, res, next) {
        res.render('products/productCart', { title: 'Express' });},
        
    products:function(req, res, next) {
        res.render('products/productDetail', { title: 'Express' });},

    create:function(req, res, next) {
        res.render('products/formCreate', { title: 'Express' });},

    edition:function(req, res, next) {
        res.render('products/formEdition', { title: 'Express' });},
}

module.exports = productsCtrl