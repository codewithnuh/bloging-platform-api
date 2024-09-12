const mongoose = require("mongoose");
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title must be provided"],
  },
  content: {
    type: String,
    required: [true, "Content must be provided"],
  },
  category: {
    type: String,
    required: [true, "Category must be provided"],
  },
  tags: {
    type: [String],
    required: [true, "Tags must be provided"],
  },
});
module.exports = mongoose.model("Blog", blogPostSchema);
