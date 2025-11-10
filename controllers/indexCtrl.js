const db = require("../database/models/index");

const indexCtrl = {
  index: async function (req, res, next) {
    const brands = await db.Brand.findAll();
    const products = await db.Product.findAll({
      include: ["sale_as"],
    });

    res.render("index", { brands, products });
  }
};

module.exports = indexCtrl;
