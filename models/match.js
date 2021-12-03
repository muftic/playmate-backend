"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  match.init(
    {
      likes: {
        type: DataTypes.INTEGER,
        references: {
          model: "pets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      isLiked: {
        type: DataTypes.INTEGER,
        references: {
          model: "pets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "match",
    }
  );
  return match;
};
