"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "genders",
      [
        { id: 1, gender: "Femenino" },
        { id: 2, gender: "Masculino" },
        { id: 3, gender: "Otro" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("genders", null, {});
  },
};
