"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "photos",
      [
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/sub-buzz-17379-1555623266-1_sugeuc.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/5a9ba7a3c479180755ad996b-large_nryik6.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527256/TinPet/5c005d9bac00e20fe169f725_rvcjnv.png",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://res.cloudinary.com/muftic/image/upload/v1638527257/TinPet/grumpy_cat_ynk8pm.jpg",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("photos", null, {});
  },
};
