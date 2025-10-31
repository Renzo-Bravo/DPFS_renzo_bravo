module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "brands",
      [
        { id: 1, nameBrand: "Olmo", image: "Olmo.jpg" },
        { id: 2, nameBrand: "Venzo", image: "venzo.jpg" },
        { id: 3, nameBrand: "Raleigh", image: "raleigh.jpg" },
        { id: 4, nameBrand: "Specialized", image: "specialized.jpg" },
        { id: 5, nameBrand: "Fire Bird", image: "defaultBrand.png" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
