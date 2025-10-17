"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "Renzo",
          surname: "Bravo Gomez",
          date: "2025-10-28",
          rol: "2",
          email: "admin@gmail.com",
          password: "567",
          checkbox: "on",
          image: "profileprofileImg-1759375138231.webp",
        },
        {
          id: 2,
          name: "Renzo",
          surname: "Bravo Gomez",
          date: "2025-10-04",
          rol: "admin",
          email: "admin1@gmail.com",
          password:
            "$2b$10$4NniHGCHUL/u8cFec6oGaecvXnI6Z3JJeOx3mp5T02gKcTGMQzHvC",
          checkbox: "on",
          gender: "male",
          image: "profileprofileImg-1759434931146.jpg",
        },
        {
          id: 3,
          name: "Test",
          surname: "Test",
          date: "2002-12-10",
          rol: "test",
          email: "admin2@gmail.com",
          password:
            "$2b$10$fL/mMtNp/TPGFLnYHc5QSuzzYDi4ma0jYTq/vZ/Oyq7WNZziTxF3W",
          checkbox: "on",
          gender: "male",
          image: "profile.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
