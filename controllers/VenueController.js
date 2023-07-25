const { Venue } = require("../models");

const GetVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll();
    res.send(venues);
  } catch (error) {
    throw error;
  }
};

const GetVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.venue_id);
    res.send(venue);
  } catch (error) {
    throw error;
  }
};

const GetVenuesByLocation = async (req, res) => {
  try {
    const venues = await Venue.findAll({
      where: { 
      city: req.params.city,
      state: req.params.state },
    });
    res.send(venues);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetVenues,
  GetVenueById,
  GetVenuesByLocation
};
