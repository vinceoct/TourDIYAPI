const Router = require("express").Router();
const controller = require("../controllers/StateController");

Router.get("/", controller.GetStates);
Router.get("/:abbrev", controller.GetStateByAbbrev);

module.exports = Router;
