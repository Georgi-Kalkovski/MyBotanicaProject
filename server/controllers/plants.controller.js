const Plants = require('../models/plants.model');

async function getAllPlants(req, res) {

  const page = req.query.page || 1;
  const limit = 20;
  const startIndex = (page - 1) * limit;

  const searchTerm = req.query.searchTerm;
  const searchOption = req.query.searchOption;
  const query = {};

  query[searchOption] = new RegExp(searchTerm, "i");

  let plantsQuery = Plants.find({});
  let countQuery = Plants.countDocuments({});

  if (searchTerm != '') {
    plantsQuery = Plants.find(query);
    countQuery = Plants.find(query).countDocuments();
  }

  const pagesCount = await countQuery;
  const plants = await plantsQuery.skip(startIndex).limit(20);

  res.json({
    totalPages: Math.ceil(pagesCount / limit),
    currentPage: Number(page),
    plants: plants,
  });
}

module.exports = {
  getAllPlants,
};