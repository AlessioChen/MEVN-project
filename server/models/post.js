const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tail: {
        type: Number
    },
    content: {
        type: String,
        required: true
    }, thumbnail: {
        type: String
    }, timeToRead: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Post = mongoose.model('Post', blogSchema);
module.exports = Post;