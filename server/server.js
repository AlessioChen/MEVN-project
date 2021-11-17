const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const blogRoutes = require('./routes/blogRoutes')

const server = express();
const port = process.env.PORT ? process.env.PORT : 3000;
const dbURI = process.env.DB_URI;

server.use(express.json())
server.use(express.urlencoded({extended: true}));

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    server.listen(port);
    console.log("----- DATABASE CHECK -----");
  })
  .catch(err => console.log(err));

server.get('/', (req, res) => {
  res.end('----- SERVER CHECK -----' );
});

server.use('/blogs', blogRoutes);

server.use((req, res) => {
  res.end('err 404 page not found' );
});
