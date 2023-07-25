const { Artist } = require('../models')

const GetArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists);
  } catch (error) {
    throw error;
  }
};

const GetArtistById = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.artist_id)
        res.send(artist)
    } catch (error) {
        throw error
    }    
}

const GetArtistsByCity = async (req, res) => {
  try {
    const artists = await Artist.findAll({
      where: { cityId: req.params.city_id },
    });
    res.send(artists);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    GetArtists,
    GetArtistsByCity,
    GetArtistById
}