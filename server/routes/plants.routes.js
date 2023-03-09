const express = require('express');
const plantsController = require('../controllers/plants.controller');

const router = express.Router();

router.get('/plants', plantsController.getAllPlants);
router.get('/plants/:id', plantsController.getPlantById);

module.exports = router;