const { Artist } = require('../models')

const GetArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists);
  } catch (error) {
    throw error;
  }
};

const GetArtistByEmail = async (req, res) => {
    try {
        const artist = await Artist.findOne({ where : { email: req.params.email } })
        res.send(artist)
    } catch (error) {
        throw error
    }    
}

const GetArtistsByLocation = async (req, res) => {
  try {
    const artists = await Artist.findAll({
      where: {
        city: req.params.city,
        state: req.params.state,
      },
    });
    res.send(artists);
  } catch (error) {
    throw error;
  }
};

const DeleteArtistByEmail = async (req, res) => {
  try {
    const artist = await Artist.findOne({ where: { email: req.params.email } });

    if (!artist) {
      return res.status(404).send({ message: "Artist not found" });
    }

    await artist.destroy();
    res.send({ message: "Artist deleted successfully" });
  } catch (error) {
    throw error;
  }
};

const UpdateArtistByEmail = async (req, res) => {
  try {
    const artist = await Artist.findOne({ where: { email: req.params.email } });

    if (!artist) {
      return res.status(404).send({ message: "Artist not found" });
    }

    await artist.update(req.body);
    res.send({ message: "Artist updated successfully" });
  } catch (error) {
    throw error;
  }
};


module.exports = {
    GetArtists,
    GetArtistsByLocation,
    GetArtistByEmail,
    UpdateArtistByEmail,
    DeleteArtistByEmail
}