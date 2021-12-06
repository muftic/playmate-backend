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
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Toffy",
          age: 6,
          gender: "female",
          species: "Dog",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luffy",
          age: 8,
          gender: "male",
          species: "Cat",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Doggy",
          age: 15,
          gender: "female",
          species: "Dog",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tabby",
          age: 8,
          userId: 4,
          gender: "female",
          species: "Cat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Babby",
          age: 66,
          gender: "male",
          species: "Cat",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shabby",
          age: 8,
          gender: "male",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
