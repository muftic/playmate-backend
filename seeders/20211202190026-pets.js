"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "Fluffy",
          age: 2,
          gender: "male",
          species: "Dog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buffy",
          age: 4,
          gender: "female",
          species: "Dog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
