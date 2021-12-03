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
        {
          name: "Toffy",
          age: 6,
          gender: "female",
          species: "Dog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luffy",
          age: 8,
          gender: "male",
          species: "Cat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Doggy",
          age: 15,
          gender: "female",
          species: "Dog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tabby",
          age: 8,
          gender: "female",
          species: "Cat",
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
