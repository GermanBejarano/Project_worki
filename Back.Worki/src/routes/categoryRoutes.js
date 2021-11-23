const express = require('express');
const controller = require('../controller/categoryController');
const router = express.Router();

router.get('/category',  controller.getCategories);

module.exports = router;