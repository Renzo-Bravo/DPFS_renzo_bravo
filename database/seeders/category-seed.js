module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        { id: 1, typeBike: "BMX" },
        { id: 2, typeBike: "E-Bikes" },
        { id: 3, typeBike: "Gravel" },
        { id: 4, typeBike: "Hibridas" },
        { id: 5, typeBike: "MTB" },
        { id: 6, typeBike: "Paseo" },
        { id: 7, typeBike: "Plegables" },
        { id: 8, typeBike: "Ruta-Carretera" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
