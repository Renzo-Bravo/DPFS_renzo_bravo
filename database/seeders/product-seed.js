"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 2,
          brand: "",
          category: "Ruta-Carretera",
          color: "Azul",
          description: "sssssssssssssssssssssss",
          gender: "Masculino",
          model: "RS2025",
          price: "22",
          size: "M",
          image: "image-1759030748535.jpeg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
