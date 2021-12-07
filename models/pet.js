"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pet.belongsTo(models.user);

      pet.belongsToMany(models.pet, {
        through: "likes",
        foreignKey: "giverId",
        as: "giver",
      });
      pet.belongsToMany(models.pet, {
        through: "likes",
        foreignKey: "receiverId",
        as: "receiver",
      });
    }
  }
  pet.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      species: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pet",
    }
  );
  return pet;
};
