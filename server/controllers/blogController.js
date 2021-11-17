const Blog = require('../models/blog');
const mongoose = require("mongoose");

const all_blogs_GET = async (req, res) => {
    try {
        blogs = await Blog.find().sort({ createdAt: -1 });
        if (!blogs) {
            return res.status(200).send("No available Blogs");
        }
        res.status(200).send(blogs);
    } catch (err) {
        res.status(400).send(error);
    }
}

const single_blog_GET = async (req, res) => {
    try {
        const id = req.params.id;
        const valid = mongoose.Types.ObjectId.isValid(id);
        if (!valid) {
            return res.status(400).send({error: 'Not a valid ID'});
        }
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(400).send({error: "Blog not found"});
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(400).send("zio fa")
    }
}

const single_blog_POST = async (req, res) => {
    try { 
        const blog = new Blog(req.body);
        await blog.save()
        res.status(200).send(blog);
    } catch (error) {
        res.status(400).send(error);
    }
};

const single_blog_PUT = async (req, res) => {
    try {
        const id = req.params.id;
        updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(updatedBlog);
    } catch (error) {
        res.status(400).send(error);
    }
};

const single_blog_DELETE = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedBlog = await Blog.findByIdAndDelete(id)
        res.status(200).send(deletedBlog)
    } catch (error) {
        res.status(400).send(error)
    }
};

module.exports = { 
    all_blogs_GET,
    single_blog_GET,
    single_blog_POST,
    single_blog_PUT,
    single_blog_DELETE
};