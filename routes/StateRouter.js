const Router = require("express").Router();
const controller = require("../controllers/StateController");

Router.get("/", controller.GetStates);
Router.get("/:state_id", controller.GetStateById);

module.exports = Router;
