const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;
const categories = require('./Data/categories.json');
app.use(cors());
app.get("/", (req, res) => {
  res.send("Dragon news running!");
});
app.get("/categories",(req,res) => {
    res.send(categories);
})
app.listen(port, () => {
  console.log(`Dragon news is running on port ${port}`);
});
