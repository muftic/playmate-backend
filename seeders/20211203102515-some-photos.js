"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "photos",
      [
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/sub-buzz-17379-1555623266-1_sugeuc.png",
          petId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/5a9ba7a3c479180755ad996b-large_nryik6.jpg",
          petId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/5c005d9bac00e20fe169f725_rvcjnv.png",
          petId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/creative-1-Pair-Pet-Stockings-Black-Sexy-Dog-Net-Socks-Funny-dogs-Clothing-for-halloween-party.jpg_q50_jeccks.jpg",
          petId: 2,
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
