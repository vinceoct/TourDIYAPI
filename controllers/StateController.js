const { State } = require("../models");

const GetStates = async (req, res) => {
  try {
    const states = await State.findAll();
    res.send(states);
  } catch (error) {
    throw error;
  }
};

const GetStateById = async (req, res) => {
  try {
    const state = await State.findByPk(req.params.state_id);
    res.send(state);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetStates,
  GetStateById,
};
