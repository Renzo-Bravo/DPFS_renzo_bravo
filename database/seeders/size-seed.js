
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "sizes",
      [
        { id: 1, size: "XS" },
        { id: 2, size: "S" },
        { id: 3, size: "M" },
        { id: 4, size: "L" },
        { id: 5, size: "XL" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sizes", null, {});
  },
};
