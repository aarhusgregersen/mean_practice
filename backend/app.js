const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

const app = express();


mongoose.connect("mongodb+srv://gregersen:45xMPTNCK8wEwEDo@angulartutorial-0xffa.mongodb.net/node-angular?retryWrites=true&w=majority",
{
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => {
  console.log("Connected to database!")
})
.catch((err) => {
  console.log("Connection failed!", err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next(); // Always call next on middleware you want to continue the request after
});

app.use("/api/posts", postsRoutes);

// Exports the express server and all attached middlewares to use in another file
module.exports = app;
