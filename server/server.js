const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors'); 
const blogRoutes = require('./routes/blog.routes');
const {dbConnection, initial} = require('./helpers/dbConnection');

const server = express();

const corsOptions = {
  origin: "http://localhost:5000"
};


const port = process.env.PORT;
const dbURI = process.env.DB_URI;

server.listen(port || 3000);



// ----- Connection to DB -----
dbConnection(dbURI)
  .then(() => console.log('Connected to MongoDB successfully on port: ' + port))
  .catch(error => console.log('Connection to MongoDB failed. Error: ' + error));

initial(); 

// ----- Middlewares -----
server.use(express.json())
server.use(express.urlencoded({extended: true}));
server.use(cors(corsOptions)); 

// ----- Routes -----
server.get('/', (req, res) => res.end('----- SERVER CHECK -----' ));

require("./routes/auth.routes")(server); 
require("./routes/user.routes")(server); 

server.use('/blog', blogRoutes);

server.use((req, res) => res.end('err 404 page not found' ));

