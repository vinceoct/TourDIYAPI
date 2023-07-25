const { City } = require("../models");

const GetCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    res.send(cities);
  } catch (error) {
    throw error;
  }
};

const GetCitiesByState = async (req, res) => {
  try {
    const cities = await City.findAll({where: {state : req.params.state} });
    res.send(cities);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetCities,
  GetCitiesByState,
};