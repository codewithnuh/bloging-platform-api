const blog = require("./routes/blogpost.router");
const express = require("express");
const app = express();
require("./config/database");
app.use(express.json());
app.use("/api/v1/blog", blog);
app.listen(3000, () => {
  console.log("App is live");
});
