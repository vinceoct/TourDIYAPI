'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    
    static associate(models) {
    }
  }
  State.init({
    name: DataTypes.STRING,
    abbrev: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
    tableName: 'states'
  });
  return State;
};