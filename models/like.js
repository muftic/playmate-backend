"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      like.belongsTo(models.pet, {
        foreignKey: "giverId",
        as: "giver",
      });
      this.belongsTo(models.pet, {
        foreignKey: "receiverId",
        as: "receiver",
      });
    }
  }
  like.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return like;
};
