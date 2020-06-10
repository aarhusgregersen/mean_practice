const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next(); // Always call next on middleware you want to continue the request after
});

app.use('/api/posts', (req, res, next) => {
  posts = [
    { id: 'abc8172', title: 'First server side post', content: 'This text is coming from the server' },
    { id: 'def12321', title: 'Second server side post!', content: 'This text is also coming from the server' }
  ];
  res.status(200).json({
    message: "Posts fetched succesfully!",
    posts: posts
  });
});

// Exports the express server and all attached middlewares to use in another file
module.exports = app;
