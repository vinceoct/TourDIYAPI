const { State } = require("../models");

const GetStates = async (req, res) => {
  try {
    const states = await State.findAll();
    res.send(states);
  } catch (error) {
    throw error;
  }
};

const GetStateByAbbrev = async (req, res) => {
  try {
    const state = await State.findOne({where : {abbrev : req.params.abbrev}});
    res.send(state);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetStates,
  GetStateByAbbrev,
};
