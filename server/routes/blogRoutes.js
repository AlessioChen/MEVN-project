const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/allPosts', blogController.GETallPosts);
router.get('/singlePost/:id', blogController.GETsinglePost);
router.post('/singlePost', blogController.POSTsinglePost);
router.put('/singlePost/:id', blogController.PUTsinglePost);
router.delete('/singlePost/:id', blogController.DELETEsinglePost)

module.exports = router;