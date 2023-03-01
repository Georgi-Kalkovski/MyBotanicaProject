const Plants = require('../models/plants.model');

async function getAllPlants(req, res) {

  const page = req.query.page || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const url = req.url;
  const searchTermRegex = /searchTerm=([^&]*)/;
  const match = searchTermRegex.exec(url);
  const searchTerm = match ? match[1] : "";
  const pagesCount = await Plants.find({ genus: new RegExp('^' + searchTerm + '$', "i") }).count();
  let plants;

  if (searchTerm != '') {
    plants = await Plants.find({ genus: new RegExp('^' + searchTerm + '$', "i") }).skip(startIndex).limit(10);
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