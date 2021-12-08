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
    }, thumbnail: {
        type: String
    }, timeToRead: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Post = mongoose.model('Post', blogSchema);
module.exports = Post;