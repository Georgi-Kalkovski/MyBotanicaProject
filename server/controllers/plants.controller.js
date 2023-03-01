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
  } else {
    plants = await Plants.find({}).skip(startIndex).limit(10);
  }

  res.json({
    totalPages: searchTerm === '' ? Math.ceil(await Plants.countDocuments() / limit) : pagesCount,
    currentPage: Number(page),
    plants: plants,
  });
}

async function getSearch(req, res) {
  const searchTerm = req.body.searchTerm;
  const searchOption = req.body.searchOption;
  console.log(searchTerm)
  console.log(searchOption)

  // Filter the plants based on the search term and option
  const filteredPlants = plants.filter((plant) =>
    plant[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPlants.length / PAGE_SIZE);

  // Return the filtered plants and total number of pages
  res.json({
    plants: filteredPlants.slice(0, PAGE_SIZE),
    totalPages
  });
};

module.exports = {
  getAllPlants,
  getSearch,
};