const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;
const categories = require('./Data/categories.json');
const news = require('./Data/news.json');
app.use(cors());
app.get("/", (req, res) => {
  res.send("Dragon news running!");
});
app.get("/categories",(req,res) => {
    res.send(categories);
})
app.get("/categories/:id",(req,res) => {
    const id = req.params.id;
    const selectedNews = categories.find(n => n.id === id);
    res.send(selectedNews);
})
app.get("/news",(req,res) =>{
  res.send(news);
})
app.get("/news/:id",(req,res) =>{
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews);
})
app.listen(port, () => {
  console.log(`Dragon news is running on port ${port}`);
});
