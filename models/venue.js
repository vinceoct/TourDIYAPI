"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    static associate(models) {
    }
  }
  Venue.init({
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Venue",
      tableName: "venues",
    }
  );
  return Venue;
};
