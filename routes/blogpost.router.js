const express = require("express");
const {
  createBlogPost,
  getAllBlogs,
} = require("../controller/blogpost.controller");
const router = express.Router();
router.route("/").get(getAllBlogs).post(createBlogPost);
module.exports = router;
