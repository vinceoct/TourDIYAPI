const Router = require("express").Router();
const controller = require("../controllers/ArtistController");

Router.get("/", controller.GetArtists);
Router.get("/location/:city/:state", controller.GetArtistsByLocation)
Router.get("/:email", controller.GetArtistByEmail);
Router.delete("/:email", controller.DeleteArtistByEmail)
Router.put("/:email", controller.UpdateArtistByEmail)

module.exports = Router;
