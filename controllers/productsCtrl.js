const { name } = require("ejs");
const fs = require("fs");
const { type } = require("os");
const path = require("path");

const productsPath = path.join(__dirname, '../', 'data', 'products.json')

const productsCtrl = {
    cart:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        res.render('products/productCart', { title: 'Express' });},
        
    createForm: function(req, res, next) {
        res.render('products/formCreate', { title: 'Express' });},

    createProduct: function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            name: req.body.name,
            brand: req.body.brand,
            category: req.body.category,
            gender: req.body.gender,
            line: req.body.line,
            image: req.file && req.file.filename ? req.file.filename : "images.png",
            year: req.body.year,
            type: req.body.type,
            description: req.body.description,
            price: req.body.price,
        }

        products.push(newProduct)
        const productsJSON = JSON.stringify(products, null, ' ')
        fs.writeFileSync(productsPath, productsJSON)

        res.redirect('/')
    },    
 
    detail:function(req, res, next) {
        const id = req.params.id;
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const prod = products.find((product)=> {return product.id == id});
        res.render('products/productDetail', { product: prod });},

    delete:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

        const delProducts = products.filter(product => product.id != req.params.id)

        const productsJSON = JSON.stringify(delProducts, null, " ")

        fs.writeFileSync(productsPath, productsJSON)

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
                product.year = req.body.year;
                product.line = req.body.line;
                product.name = req.body.name;
                product.image = req.file?.filename || product.image;
                product.price = req.body.price;
                product.type = req.body.type;
            }
        });

        const productsJSON = JSON.stringify(products, null, " ");
        fs.writeFileSync(productsPath, productsJSON);

        res.redirect('/products/detail/'+ req.params.id)},

    list:function(req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        res.render('products/productList', { products });},
}

module.exports = productsCtrl

