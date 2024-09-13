const express = require("express");
const {
  createBlogPost,
  getAllBlogs,
  getSingleBlogPost,
} = require("../controller/blogpost.controller");
const router = express.Router();
router.route("/").get(getAllBlogs).post(createBlogPost);
router.route("/:id").get(getSingleBlogPost);
module.exports = router;
