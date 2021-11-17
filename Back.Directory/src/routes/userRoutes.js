const express = require('express');
const controller = require('../controller/userController');
const router = express.Router();

router.get('/user',  controller.getUsers);

router.get('/user/:id',  controller.getUserById);

router.get('/users',  controller.getUserByCredentials);

router.get('/company',  controller.getCompanies);

module.exports = router;