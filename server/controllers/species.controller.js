const Species = require('../models/species.model');

async function getAllSpecies(req, res) {

  const page = req.query.page || 1;
  const limit = 20;
  const startIndex = (page - 1) * limit;

  const searchTerm = req.query.searchTerm;
  const searchOption = req.query.searchOption;
  const query = {};

  query[searchOption] = new RegExp(searchTerm, "i");

  let speciesQuery = Species.find({});
  let countQuery = Species.countDocuments({});

  if (searchTerm != '') {
    speciesQuery = Species.find(query);
    countQuery = Species.find(query).countDocuments();
  }

  const pagesCount = await countQuery;
  const species = await speciesQuery.skip(startIndex).limit(20);

  res.json({
    totalPages: Math.ceil(pagesCount / limit),
    currentPage: Number(page),
    species: species,
  });
}

async function getPlantByScientificName(req, res) {
  const plantName = req.params.scientific_name.replaceAll('_', '');
  const plant = await Species.findOne({ scientific_name: plantName });
  res.json({ plant: plant });
}

module.exports = {
  getAllSpecies,
  getPlantByScientificName,
};