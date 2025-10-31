const fs = require("fs");
const path = require("path");

const brandPath = path.join(__dirname, "../", "data", "brand.json");
const db = require("../database/models/index");

const indexCtrl = {
  index: function (req, res, next) {
    const brands = JSON.parse(fs.readFileSync(brandPath, "utf-8"));
    res.render("index", { brands });
  },
  brands: async function (req, res) {
    try {
      const brands = await db.Brand.findAll();
      res.json(brands);
    } catch (error) {
      console.log(error);
    }
  },

  products: async function (req, res) {
    try {
      const products = await db.Product.findAll();
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = indexCtrl;
