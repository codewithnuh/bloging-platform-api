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
    // Extract filter parameters from query
    const { category, tags } = req.query;

    // Initialize query object
    const query = {};

    // Apply category filter if provided
    if (category) {
      query.category = category;
    }

    // Apply tags filter if provided
    if (tags) {
      // Ensure tags is an array
      const tagsArray = tags.split(",").map((tag) => tag.trim()); // Convert comma-separated string to array and trim whitespace
      query.tags = { $in: tagsArray };
    }

    // Fetch filtered blogs from the database
    const blogs = await Blog.find(query);

    // Respond with the filtered blogs
    res.status(200).json({ blogs });
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching blogs:", error);

    // Respond with an error status and message
    res.status(500).json({ message: "Server Error: Unable to fetch blogs" });
  }
};

const getSingleBlogPost = async (req, res) => {
  try {
    const { id: blogID } = req.params;
    const blogPost = await Blog.findOne({ _id: blogID });

    res.status(200).json({ blogPost });
  } catch (error) {}
};
const updateBlogPost = async (req, res) => {
  const { _id: BlogID } = req.body;
  try {
  } catch (error) {}
};
module.exports = { createBlogPost, getAllBlogs, getSingleBlogPost };
