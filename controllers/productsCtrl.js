const { name } = require("ejs");
const fs = require("fs");
const { type } = require("os");
const path = require("path");

const categoriesPath = path.join(__dirname, "../", "data", "category.json");
const colorsPath = path.join(__dirname, "../", "data", "colors.json");
const productsPath = path.join(__dirname, "../", "data", "products.json");
const sizePath = path.join(__dirname, "../", "data", "size.json");
const genderPath = path.join(__dirname, "../", "data", "gender.json")

const productsCtrl = {
  accesories: function (req, res, next) {
    res.render("products/accesories");
  },

  cart: function (req, res, next) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    res.render("products/productCart");
  },

  createForm: function (req, res, next) {
    const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));
    const colors = JSON.parse(fs.readFileSync(colorsPath, "utf-8"));
    const size = JSON.parse(fs.readFileSync(sizePath, "utf-8"));
    const gender = JSON.parse(fs.readFileSync(genderPath, "utf-8"))
    res.render("products/formCreate", { categories, colors, gender, size });
  },

  createProduct: function (req, res, next) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      brand: req.body.brand,
      category: req.body.category,
      color: req.body.color,
      description: req.body.description,
      gender: req.body.gender,
      model: req.body.model,
      price: req.body.price,
      size: req.body.size,
      image: req.file && req.file.filename ? req.file.filename : "images.png",
    };

    products.push(newProduct);
    const productsJSON = JSON.stringify(products, null, " ");
    fs.writeFileSync(productsPath, productsJSON);

    res.redirect("/");
  },

  detail: function (req, res, next) {
    const id = req.params.id;
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    const prod = products.find((product) => {
      return product.id == id;
    });
    res.render("products/productDetail", { product: prod });
  },

  delete: function (req, res, next) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

    const delProducts = products.filter(
      (product) => product.id != req.params.id
    );

    const productsJSON = JSON.stringify(delProducts, null, " ");

    fs.writeFileSync(productsPath, productsJSON);

    res.redirect("/products/list");
  },

  editionForm: function (req, res, next) {
    const category = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));
    const colors = JSON.parse(fs.readFileSync(colorsPath, "utf-8"));
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    const size = JSON.parse(fs.readFileSync(sizePath, "utf-8"));
    const gender = JSON.parse(fs.readFileSync(genderPath, "utf-8"))
    const prod = products.find((prod) => {
      return prod.id == req.params.id;
    });
    res.render("products/formEdition.ejs", { 
      product: prod,
      gender,
      size,
      category,
      colors,
    });
  },

  updateForm: function (req, res, next) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

    products.forEach((product) => {
      if (product.id == req.params.id) {
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.color = req.body.color;
        product.description = req.body.description;
        product.gender = req.body.gender;
        product.model = req.body.model;
        product.price = req.body.price;
        product.size = req.body.size;
        product.image = req.file?.filename || product.image;
      }
    });

    const productsJSON = JSON.stringify(products, null, " ");
    fs.writeFileSync(productsPath, productsJSON);

    res.redirect("/products/detail/" + req.params.id);
  },

  list: function (req, res, next) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    res.render("products/productList", { products });
  },
};

module.exports = productsCtrl;
