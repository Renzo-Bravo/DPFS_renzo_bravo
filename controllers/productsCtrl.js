const { name } = require("ejs");
const fs = require("fs");
const { type } = require("os");
const path = require("path");

const categoriesPath = path.join(__dirname, "../", "data", "category.json");
const colorsPath = path.join(__dirname, "../", "data", "colors.json");
const productsPath = path.join(__dirname, "../", "data", "products.json");
const sizePath = path.join(__dirname, "../", "data", "size.json");
const genderPath = path.join(__dirname, "../", "data", "gender.json");
const db = require("../database/models/index.js");

const productsCtrl = {
  accesories: function (req, res, next) {
    res.render("products/accesories");
  },

  cart: function (req, res, next) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    res.render("products/productCart");
  },

  createForm: async (req, res) => {
    const categories = await db.Category.findAll();
    const brands = await db.Brand.findAll();
    const colors = await db.Colors.findAll();
    const size = await db.Size.findAll();
    const gender = await db.Genders.findAll();
    res.render("products/formCreate", {
      brands,
      categories,
      colors,
      gender,
      size,
    });
  },

  createProduct: async function (req, res, next) {
    const newProduct = {
      brand_id: req.body.brand,
      category_id: req.body.category,
      color_id: req.body.color,
      description: req.body.description,
      gender_id: req.body.gender,
      model: req.body.model,
      price: req.body.price,
      size_id: req.body.size,
      image: req.file && req.file.filename ? req.file.filename : "images.png",
    };

    await db.Product.create(newProduct);

    res.redirect("/");
  },

  detail: async function (req, res, next) {
    try {
      const prod = await db.Product.findByPk(req.params.id);
      res.render("products/productDetail", { prod });
    } catch (error) {
      console.log(error);
    }
  },

  delete: async function (req, res, next) {
    try {
      await db.Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      console.log("Se elimino el producto con id", req.params.id);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  editionForm: async function (req, res) {
    try {
      const prod = await db.Product.findByPk(req.params.id);
      const categories = await db.Category.findAll();
      const colors = await db.Colors.findAll();
      const genders = await db.Genders.findAll();
      const size = await db.Size.findAll();
      const brand = await db.Brand.findAll();
      res.render("products/formEdition", {
        prod,
        categories,
        colors,
        size,
        genders,
        brand,
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateForm: async function (req, res, next) {
    try {
      const product = await db.Product.findByPk(req.params.id);

      const productUpdated = {
        brand_id: req.body.brand,
        name: req.body.name,
        description: req.body.description,
        image: req.file?.filename || product.image,
        category_id: req.body.category,
        color_id: req.body.colors,
        price: req.body.price,
        size: req.body.size,
      };

      await db.Product.update(productUpdated, {
        where: { id: req.params.id },
      });

      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  list: async function (req, res) {
    try {
      const products = await db.Product.findAll();
      res.render("products/productList", { products });
    } catch (error) {
      console.log((error) => console.log(error));
    }
  },
};

module.exports = productsCtrl;
