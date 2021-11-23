const express = require('express');
const controller = require('../controller/eventController');
const router = express.Router();

router.get('/event',  controller.getEvents);

module.exports = router;