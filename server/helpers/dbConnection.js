const mongoose = require('mongoose');
const db = require("../models");
const Role = db.role;


function dbConnection(uri) {
    let result = mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .catch(err => {
            console.error('DB Connection error:', err.stack)
            throw err
        })
        .then(() => {
            console.log("Connection to MongoDB...")
        });
    return result;
}

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

module.exports = { dbConnection, initial };