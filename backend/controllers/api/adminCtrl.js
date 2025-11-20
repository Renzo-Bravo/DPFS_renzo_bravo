const db = require("../../database/models");

const adminCtrl = {
  createColor: async (req, res) => {
    try {
      const newColor = {
        color: req.body.color,
        code: req.body.code,
      };

      await db.Color.create(newColor);

      res.json({ ok: true, msg: "Color creado" });
    } catch (error) {
      console.log(error);
    }
  },

  createCategory: async (req, res) => {
    try {
      const newCategory = {
        typeBike: req.body.typeBike,
      };

      await db.Category.create(newCategory);

      res.json({ ok: true, msg: "Categoría creada" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = adminCtrl;
