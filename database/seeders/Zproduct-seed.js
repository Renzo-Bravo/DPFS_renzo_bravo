module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Zproducts",
      [
        {
          id: 1,
          brand_id: 1,
          description: "sssssssssssssssssssssss",
          model: "RS2025",
          price: "22",
          image: "image-1759030748535.jpeg",
          sale_id: 1,
          color_id: 1,
          category_id: 2,
          gender_id: 2,
          size_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Zproducts", null, {});
  },
};
