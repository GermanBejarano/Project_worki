const express = require('express');
const controller = require('../controller/positionController');
const router = express.Router();

router.get('/position',  controller.getPositions);

module.exports = router;