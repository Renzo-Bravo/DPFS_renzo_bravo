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

      res.status(201).json({ msg: "Producto creado exitosamente" });
    } catch (error) {
      console.error(error);
      const statusCode = error.name === 'SequelizeValidationError' ? 400 : 500;
      res.status(statusCode).json({
        error: "No se pudo crear el producto.",
        details: error.message,
      });
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

      if (!prod) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      res.status(200).json(prod);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error al obtener el detalle del producto.",
        details: error.message,
      });
    }
  },

  delete: async function (req, res, next) {
    try {
      const result = await db.Product.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (result === 0) {
        return res.status(404).json({ error: "No se encontró el producto a eliminar" });
      }

      res.status(200).json({ msg: "Producto eliminado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error al intentar eliminar el producto.",
        details: error.message,
      });
    }
  },

  updateForm: async function (req, res, next) {
    try {
      const product = await db.Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado para actualizar" });
      }

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

      res.status(200).json({ msg: "Producto actualizado exitosamente" });
    } catch (error) {
      console.error(error);
      const statusCode = error.name === 'SequelizeValidationError' ? 400 : 500;
      res.status(statusCode).json({
        error: "No se pudo actualizar el producto.",
        details: error.message,
      });
    }
  },

  list: async function (req, res) {
    try {
      const products = await db.Product.findAll({
        include: ["color_as"],
      });
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error al obtener la lista de productos.",
        details: error.message,
      });
    }
  },
};

module.exports = productsCtrl;