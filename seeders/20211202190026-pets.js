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
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buffy",
          age: 4,
          gender: "female",
          species: "Dog",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pets", null, {});
  },
};
