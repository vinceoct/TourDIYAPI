const { City } = require("../models");

const GetCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    res.send(cities);
  } catch (error) {
    throw error;
  }
};

const GetCityById = async (req, res) => {
  try {
    const city = await City.findByPk(req.params.city_id);
    res.send(city);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetCities,
  GetCityById,
};
