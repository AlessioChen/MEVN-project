const Post = require('../models/post');
const mongoose = require("mongoose");

const GETallPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        if (!posts) {
            return res.status(400).send({ error: "No available Blogs" });
        } else {
            res.status(200).send(posts);
        }
    } catch (err) {
        res.status(400).send(error);
    }
}

const GETsinglePost = async (req, res) => {
    try {
        const id = req.params.id;
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) {
            return res.status(400).send({ error: "Not a valid ID" });
        }
        const blog = await Post.findById(id);
        if (!blog) {
            return res.status(400).send({ error: "Blog not found" });
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(400).send(error)
    }
}

const POSTsinglePost = async (req, res) => {
    try { 
        const post = new Post(req.body);
        await post.save()
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

const PUTsinglePost = async (req, res) => {
    try {
        const [ id, body ] = [ req.params.id, req.body ];
        updatedPost = await Post.findByIdAndUpdate(id, body, { new: true });
        res.status(201).send(updatedPost);
    } catch (error) {
        res.status(400).send(error);
    }
};

const DELETEsinglePost = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(id)
        res.status(200).send(deletedPost)
    } catch (error) {
        res.status(400).send(error)
    }
};

module.exports = { 
    GETallPosts,
    GETsinglePost,
    POSTsinglePost,
    PUTsinglePost,
    DELETEsinglePost
};