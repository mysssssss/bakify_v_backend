const Passage = require('../models/passage');

const createPassage = async (req, res) => {
  const passage = await Passage.create(req.body);
  res.status(201).json({ passage });
};
const getAllPassages = async (req, res) => {
  const passage = await Passage.find({});
  res.status(200).json({ passage });
};

module.exports = {
  createPassage,
  getAllPassages,
};
