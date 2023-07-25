const Router = require("express").Router();
const ArtistRouter = require("./ArtistRouter");
const StateRouter = require("./StateRouter");
const CityRouter = require("./CityRouter");
const VenueRouter = require("./VenueRouter")
const AuthRouter = require("./AuthRouter")
Router.use("/artists", ArtistRouter);
Router.use("/states", StateRouter);
Router.use("/cities", CityRouter);
Router.use("/venues", VenueRouter)
Router.use("/auth", AuthRouter)
module.exports = Router;
