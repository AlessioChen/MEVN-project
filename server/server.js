const express = require('express');
const dotenv = require('dotenv').config();

const server = express();
const port = process.env.PORT ? process.env.PORT : 3000;

server.listen(port);

server.get('/', (req, res) => {
    res.end('----- PROVA SERVER -----' );
});