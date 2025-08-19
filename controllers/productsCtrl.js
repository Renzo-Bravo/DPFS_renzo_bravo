const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, '../', 'data', 'products.json')

const productsCtrl = {
    cart:function(req, res, next) {
        res.render('products/productCart', { title: 'Express' });},
        
    detail:function(req, res, next) {
        const id = req.params.id;

        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        
        const prod = products.find((product)=> {return product.id == id});

        res.render('products/productDetail', { product: prod });},

    list:function(req, res, next) {
        res.render('products/productList', { title: 'Express'});},

    create:function(req, res, next) {
        res.render('products/formCreate', { title: 'Express' });},

    edition:function(req, res, next) {
        res.render('products/formEdition', { title: 'Express'});},
}

module.exports = productsCtrl

