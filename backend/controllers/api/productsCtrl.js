const db = require("../../database/models/index.js");

const productsCtrl = {
  cart: function (req, res, next) {
    res.render("products/productCart");
  },

  createProduct: async function (req, res, next) {
    try {
      const newProduct = {
        brand_id: req.body.brand,
        category_id: req.body.category,
        color_id: req.body.color,
        description: req.body.description,
        gender_id: req.body.gender,
        model: req.body.name,
        price: req.body.price,
        size_id: req.body.size,
        image: req.file && req.file.filename ? req.file.filename : "images.png",
        sale_id: req.body.sale,
      };

      await db.Product.create(newProduct);

      res.json({ msg: "Producto creado" });
    } catch (error) {
      console.log(error);
    }
  },

  detail: async function (req, res, next) {
    try {
      const prod = await db.Product.findByPk(req.params.id, {
        include: [
          "color_as",
          "brand_as",
          "category_as",
          "gender_as",
          "size_as",
        ],
      });

      if (!prod) return res.status(404).send("Producto no encontrado");

      res.json(prod);
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
      res.json({msg: 'Producto eliminado'});
    } catch (error) {
      console.log(error);
    }
  },

  updateForm: async function (req, res, next) {
    try {
      const product = await db.Product.findByPk(req.params.id);
      if (!product) return res.status(404).send("Producto no encontrado");
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

      res.json({ msg: "Producto actualizado" });
    } catch (error) {
      console.log(error);
    }
  },

  list: async function (req, res) {
    try {
      const products = await db.Product.findAll({
        include: ["color_as"],
      });
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productsCtrl;
