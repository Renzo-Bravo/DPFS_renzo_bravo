module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "colors",
      [
        { id: 1, color: "Amarillo", code: "#ffff00" },
        { id: 2, color: "Gris", code: "#808080" },
        { id: 3, color: "Celeste", code: "#add8e6" },
        { id: 4, color: "Naranja", code: "#ffa500" },
        { id: 5, color: "Rojo", code: "#ff0000" },
        { id: 6, color: "Azul", code: "#0000ff" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
