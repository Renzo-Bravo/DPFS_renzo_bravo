"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 2,
          brand_id: 1,
          category_id: 2,
          color_id: 1,
          description: "sssssssssssssssssssssss",
          gender_id: 2,
          model: "RS2025",
          price: "22",
          size_id: 1,
          image: "image-1759030748535.jpeg",
          sale_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
