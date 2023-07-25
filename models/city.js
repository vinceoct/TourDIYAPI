"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
    
    }
  }
  City.init({
      name: DataTypes.STRING,
      state: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "City",
      tableName: "cities",
    }
  );
  return City;
};
