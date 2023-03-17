const express = require('express');
const speciesController = require('../controllers/species.controller');

const router = express.Router();

router.get('/', speciesController.getAllSpecies);
router.get('/species/:scientific_name'.replace(' ', '_'), speciesController.getPlantByScientificName);

module.exports = router;