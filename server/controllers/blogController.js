const Blog = require('../models/blog');

const all_blogs_GET = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then(result => {
        res.end(JSON.stringify(result));
    })
    .catch(err => console.log(err));
}

module.exports = { all_blogs_GET };