const express = require('express');
const controller = require('../controller/userController');
const router = express.Router();

router.post('/user',  controller.createUser);

router.put('/user/:id',  controller.updateUser);

router.get('/user',  controller.getUsers);

router.get('/user/:id',  controller.getUserById);

module.exports = router;