const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/allBlogs', blogController.all_blogs_GET);
router.get('/singleBlog/:id', blogController.single_blog_GET);
router.post('/singleBlog', blogController.single_blog_POST);
router.put('/singleBlog/:id', blogController.single_blog_PUT);
router.delete('/singleBlog/:id', blogController.single_blog_DELETE)

module.exports = router;