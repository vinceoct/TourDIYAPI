const Router = require("express").Router();
const controller = require("../controllers/CityController");

Router.get("/", controller.GetCities);
Router.get("/state/:state_id", controller.GetCitiesByState);
Router.get("/:city_id", controller.GetCityById);

module.exports = Router;
