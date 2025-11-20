module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("sales", [
      { id: 1, sale: 0 },
      { id: 2, sale: 1 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
