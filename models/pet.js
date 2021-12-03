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
      pet.hasMany(models.photo);
      pet.belongsTo(models.user);

      pet.belongsToMany(models.pet, {
        through: "likes",
        as: "giverId",
      });
      pet.belongsToMany(models.pet, {
        through: "likes",
        as: "receiverId",
      });
    }
  }
  pet.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      species: DataTypes.STRING,
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pet",
    }
  );
  return pet;
};
