const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/allBlogs', blogController.all_blogs_GET);

module.exports = router;