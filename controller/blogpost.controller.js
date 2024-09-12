const Blog = require("../models/blogpost.model");
const createBlogPost = async (req, res) => {
  const { title, content, category, tags } = req.body;
  const blogPost = new Blog({ title, content, category, tags });
  try {
    const newBlogPost = await blogPost.save();
    res.status(201).json(newBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.satus(200).json({ blogs });
  } catch (error) {
    console.log(error);
  }
};
const updateBlogPost = async (req, res) => {
  const { _id: BlogID } = req.body;
  try {
  } catch (error) {}
};
module.exports = { createBlogPost, getAllBlogs };
