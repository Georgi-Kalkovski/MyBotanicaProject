const Plants = require('../models/plants.model');

async function getAllPlants(req, res) {
  const page = req.query.page || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const plants = await Plants.find({}).skip((page - 1) * 10).limit(10);
  console.log(plants);

  res.json({
    totalPages: Math.ceil(await Plants.countDocuments() / limit),
    currentPage: Number(page),
    plants: plants,
  });
}

module.exports = {
  getAllPlants,
};