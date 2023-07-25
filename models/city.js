"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.State, { foreignKey: "stateId" });
      City.hasMany(models.Venue, { foreignKey: "cityId" });
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
      stateId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "states",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "City",
      tableName: "cities",
    }
  );
  return City;
};
