const Router = require("express").Router();
const controller = require("../controllers/CityController");

Router.get("/", controller.GetCities);
Router.get("/state/:state", controller.GetCitiesByState);

module.exports = Router;
