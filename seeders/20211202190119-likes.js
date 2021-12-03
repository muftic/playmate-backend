"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "likes",
      [
        {
          type: "play",
          giverId: 1,
          receiverId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "play",
          giverId: 2,
          receiverId: 1,
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
