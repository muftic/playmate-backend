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
          password: "test1234",
          location: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Luis",
          email: "a@a.com",
          password: "a",
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
