const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/posts', blogController.GETallPosts);
router.get('/post/:id', blogController.GETsinglePost);
router.post('/post', blogController.POSTsinglePost);
router.put('/post/:id', blogController.PUTsinglePost);
router.delete('/post/:id', blogController.DELETEsinglePost)

module.exports = router;