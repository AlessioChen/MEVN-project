
const db = require("../models");
const Role = db.role;


const initial = () => {
    Role.estimateDocumentCount((err, count) => {
        if (!err & count === 0) {
            new Role({
                name: 'user'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log("added 'user' ro roles collection ");
            });

            new Role({
                name: 'admin'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log("added 'admin' ro roles collection ");
            });

        }
    });
}

module.exports = initial; 