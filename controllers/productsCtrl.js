const db = require("../database/models/index.js");

const productsCtrl = {
  accesories: function (req, res, next) {
    res.render("products/accesories");
  },

  cart: function (req, res, next) {
    res.render("products/productCart");
  },

  createForm: async (req, res) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },

  createProduct: async function (req, res, next) {
    try {
      const newProduct = {
        brand_id: req.body.brand,
        category_id: req.body.category,
        color_id: req.body.color,
        description: req.body.description,
        gender_id: req.body.gender,
        name: req.body.name,
        price: req.body.price,
        size_id: req.body.size,
        image: req.file && req.file.filename ? req.file.filename : "images.png",
      };

      await db.Product.create(newProduct);

      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
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
      console.log(req.params.id);
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
        gender_id: req.body.gender,
        description: req.body.description,
        image: req.file?.filename || product.image,
        category_id: req.body.category,
        color_id: req.body.color,
        price: req.body.price,
        size_id: req.body.size,
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
