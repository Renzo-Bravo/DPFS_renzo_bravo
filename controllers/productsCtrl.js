const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, '../', 'data', 'products.json')

const productsCtrl = {
    cart:function(req, res, next) {
        res.render('products/productCart', { title: 'Express' });},
        
    products:function(req, res, next) {
        const id = req.params.id;

        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        console.log(products)
        
        const prod = products.find((product)=> {return product.id == id});
        console.log(prod)

        res.render('products/productDetail', { title: 'Express' });},

    list:function(req, res, next) {
        res.render('products/productList', { title: 'Express', products: products  });},

    create:function(req, res, next) {
        res.render('products/formCreate', { title: 'Express' });},

    edition:function(req, res, next) {
        res.render('products/formEdition', { title: 'Express', id: id });},
}

module.exports = productsCtrl

