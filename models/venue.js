"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    static associate(models) {
      Venue.belongsTo(models.City, { foreignKey: "cityId" });
    }
  }
  Venue.init(
    {
      name: DataTypes.STRING,
      cityId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "cities",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Venue",
      tableName: "venues",
    }
  );
  return Venue;
};
