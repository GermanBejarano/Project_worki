const express = require('express');
const controller = require('../controller/relationUserController');
const router = express.Router();

router.get('/relation',  controller.getRelationUsers);

module.exports = router;