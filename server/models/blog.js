const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    image: {
        data: Buffer,
        contentType: String
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;