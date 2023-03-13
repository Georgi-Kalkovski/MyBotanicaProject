const express = require('express');
const plantsController = require('../controllers/plants.controller');

const router = express.Router();

router.get('/plants', plantsController.getAllPlants);
router.get('/plants/:scientific_name'.replace(' ', '_'), plantsController.getPlantByScientificName);

module.exports = router;