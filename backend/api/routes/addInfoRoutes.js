const express = require('express');
const addInfoController = require('../controllers/addInfoController');

const router = express.Router();

router.route('/contactUs').post(addInfoController.addContactInfo);

module.exports = router;
