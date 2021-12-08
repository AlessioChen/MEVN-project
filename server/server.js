const express = require('express');
const dotenv = require('dotenv').config();
const blogRoutes = require('./routes/blogRoutes');
const dbConnection = require('./helpers/dbConnection');

const server = express();
const port = process.env.PORT;
const dbURI = process.env.DB_URI;


server.listen(port || 3000);

// ----- Connection to DB -----
dbConnection(dbURI)
  .then(() => console.log('Connected to MongoDB successfully on port: ' + port))
  .catch(error => console.log('Connection to MongoDB failed. Error: ' + error));

// ----- Middlewares -----
server.use(express.json())
server.use(express.urlencoded({extended: true}));

// ----- Routes -----
server.get('/', (req, res) => res.end('----- SERVER CHECK -----' ));

server.use('/blog', blogRoutes);

server.use((req, res) => res.end('err 404 page not found' ));
