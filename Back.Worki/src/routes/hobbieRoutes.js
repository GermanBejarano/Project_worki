const express = require('express');
const controller = require('../controller/hobbieController');
const router = express.Router();

router.get('/hobbie',  controller.getHobbies);

module.exports = router;