const express = require('express');
const router = express.Router();
const dataController = require('../controllers/filesDataController');

router.route('/saveToFile').get(dataController.saveToFile);

module.exports = router;