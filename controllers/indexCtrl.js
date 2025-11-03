const db = require("../database/models/index");

const indexCtrl = {
  index: async function (req, res, next) {
    const brands = await db.Brand.findAll();
    const products = await db.Product.findAll({
      include: ["sale_as"],
    });
    console.log(JSON.stringify(products, null, 2));

    res.render("index", { brands, products });
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
