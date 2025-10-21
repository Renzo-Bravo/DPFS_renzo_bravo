module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "sales",
      [
        { id: 1, saleOn: true },
        { id: 2, saleOn: false },
      ],
      {}
    );
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
