module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "Renzo",
          surname: "Bravo Gomez",
          created_at: '2002-12-10',
          rol_id: 1,
          email: "admin@gmail.com",
          password: "567",
          gender_id: 2,
          image: "profileprofileImg-1759375138231.webp",
        },
        {
          id: 2,
          name: "Renzo",
          surname: "Bravo Gomez",
          created_at: "2025-10-04",
          rol_id: 2,
          email: "admin1@gmail.com",
          password:
            "$2b$10$4NniHGCHUL/u8cFec6oGaecvXnI6Z3JJeOx3mp5T02gKcTGMQzHvC",
          gender_id: 2,
          image: "profileprofileImg-1759434931146.jpg",
        },
        {
          id: 3,
          name: "Test",
          surname: "Test",
          created_at: "2002-12-10",
          rol_id: 3,
          email: "admin2@gmail.com",
          password:
            "$2b$10$fL/mMtNp/TPGFLnYHc5QSuzzYDi4ma0jYTq/vZ/Oyq7WNZziTxF3W",
          gender_id: 2,
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
