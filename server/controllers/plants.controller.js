const Plants = require('../models/plants.model');

async function getAllPlants(req, res) {

  const page = req.query.page || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;

  const searchTerm = req.query.searchTerm;
  const searchOption = req.query.searchOption;
  const query = {};

  query[searchOption] = new RegExp(searchTerm, "i");
  const pagesCount = await Plants.find(query).count();
  let plants;

  if (searchTerm != '') {
    plants = await Plants.find(query).skip(startIndex).limit(10);
  } else if (plants == undefined) {
    plants = await Plants.find({}).skip(startIndex).limit(10);
  }

  res.json({
    totalPages: searchTerm === '' ? Math.ceil(await Plants.countDocuments() / limit) : pagesCount,
    currentPage: Number(page),
    plants: plants,
  });
}

module.exports = {
  getAllPlants,
};