const express = require('express');
const plantsController = require('../controllers/plants.controller');

const router = express.Router();

router.get('/plants', plantsController.getAllPlants);
router.post('/plants', plantsController.getSearch);

module.exports = router;