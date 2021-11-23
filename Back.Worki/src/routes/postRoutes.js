const express = require('express');
const controller = require('../controller/postController');
const router = express.Router();

router.post('/post',  controller.createPost);

router.post('/post/upload/:id',  controller.createFilePost );

router.get('/post',  controller.getPosts);

router.get('/post/daily',  controller.getPostsDaily);

router.get('/post/user',  controller.getPostsByUser);

module.exports = router;