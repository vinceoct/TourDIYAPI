'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
 
    static associate(models) {

    }
  }
  Artist.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING,
    spotify: DataTypes.STRING,
    bandcamp: DataTypes.STRING,
    soundcloud: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists'
  });

  Artist.beforeCreate(async (band) => {
    const saltRounds = 10;
    band.password = await bcrypt.hash(band.password, saltRounds)
  })

  return Artist;
};