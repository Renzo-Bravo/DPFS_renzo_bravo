"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "colors",
      [
        { id: 1, color: "Amarillo" },
        { id: 2, color: "Gris" },
        { id: 3, color: "Celeste" },
        { id: 4, color: "Naranja" },
        { id: 5, color: "Rojo" },
        { id: 6, color: "Azul" },
        { id: 8, color: "prueba" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
