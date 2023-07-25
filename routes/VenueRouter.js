const Router = require("express").Router();
const controller = require("../controllers/VenueController");

Router.get("/", controller.GetVenues);
Router.get("/location/:city/:state", controller.GetVenuesByLocation);
Router.get("/:venue_id", controller.GetVenueById);

module.exports = Router;
