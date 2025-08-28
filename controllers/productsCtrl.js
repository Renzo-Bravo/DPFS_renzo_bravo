const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, '../', 'data', 'products.json')

const productsCtrl = {
    cart:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        res.render('products/productCart', { title: 'Express' });},

    create:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        res.render('products/formCreate', { title: 'Express' });},

    detail:function(req, res, next) {
        const id = req.params.id;
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const prod = products.find((product)=> {return product.id == id});
        res.render('products/productDetail', { product: prod });},

    delete:function(req, res, next) {
        const id = req.params.id;
        const product = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

        res.redirect("/products/list")},

    editionForm:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        const prod = products.find((prod) => {return prod.id == req.params.id})
        console.log(prod)
        res.render('products/formEdition.ejs', {product :prod})},

    updateForm:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

        products.forEach(product => {
             if (product.id == req.params.id) {
                product.brand = req.body.brand;
                product.category = req.body.category;
                product.description = req.body.description;
                product.gender = req.body.gender;
                product.line = req.body.line;
                product.name = req.body.name;
                product.image = req.body.image;
                product.price = req.body.price;
                product.type = req.body.type;
            }
        });

        const productsJSON = JSON.stringify(products, "null", " ");
        fs.writeFileSync(productsPath, productsJSON);

        res.redirect('/products/detail/'+ req.params.id)},

    list:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        res.render('products/productList', { products });},
}

module.exports = productsCtrl

