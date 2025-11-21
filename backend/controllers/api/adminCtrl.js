const db = require("../../database/models");

const adminCtrl = {
  createColor: async (req, res) => {
    try {
      const newColor = {
        color: req.body.color,
        code: req.body.code,
      };

      await db.Color.create(newColor);

      res.status(201).json({ ok: true, msg: "Color creado exitosamente" });
    } catch (error) {
      console.error("Error al crear color:", error);

      let statusCode = 500;
      let errorMessage = "Error interno del servidor al crear el color.";

      if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
      ) {
        statusCode = 400;
        errorMessage =
          "Error de validación: Asegúrate de que los datos sean válidos y el color no exista ya.";

        if (error.errors && error.errors[0]) {
          errorMessage = error.errors[0].message;
        }
      }

      res.status(statusCode).json({
        ok: false,
        msg: errorMessage,
        details: error.message,
      });
    }
  },

  createCategory: async (req, res) => {
    try {
      const newCategory = {
        typeBike: req.body.typeBike, 
      };

      await db.Category.create(newCategory);

      res.status(201).json({ ok: true, msg: "Categoría creada exitosamente" });
    } catch (error) {
      console.error("Error al crear categoría:", error);

      let statusCode = 500;
      let errorMessage = "Error interno del servidor al crear la categoría.";

      if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
      ) {
        statusCode = 400; 
        errorMessage =
          "Error de validación: Asegúrate de que el campo sea válido y la categoría no exista ya.";

        if (error.errors && error.errors[0]) {
          errorMessage = error.errors[0].message;
        }
      }

      res.status(statusCode).json({
        ok: false,
        msg: errorMessage,
        details: error.message,
      });
    }
  },
};

module.exports = adminCtrl;
