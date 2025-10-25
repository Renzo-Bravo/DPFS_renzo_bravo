const db = require("../database/models/index");

const adminCtrl = {
  utils: (req, res) => {
    res.render("admin/utils");
  },

  createCategory: async (req, res) => {
    try {
      const newCategory = {
        typeBike: req.body.typeBike,
      };

      await db.Category.create(newCategory);

      res.redirect("/");
    } catch (error) {
      console.log("No se pudo crear la nueva categoria", error);
    }
  },

  createColor: async (req, res) => {
    try {
      const newColor = {
        color: req.body.color,
      };

      await db.Colors.create(newColor);

      res.redirect("/");
    } catch (error) {
      console.log("No se pudo crear el color", error);
    }
  },
};

module.exports = adminCtrl;
