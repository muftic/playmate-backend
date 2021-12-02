"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "Martina",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          location: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Luis",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          location: "Amsterdam",
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
