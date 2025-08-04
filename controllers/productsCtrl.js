const productsCtrl = {
    cart:function(req, res, next) {
        res.render('products/productCart', { title: 'Express' });},
        
        products:function(req, res, next) {
        res.render('products/productDetail', { title: 'Express' });}
}

module.exports = productsCtrl