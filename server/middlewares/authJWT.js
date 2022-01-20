const jwt = require('jsonwebtoken');
const { user } = require('../models');
const db = require('../models');
const User = db.user;
const Role = db.role;
const secret = process.env.PORT;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided" });
    }

    jwt.verify(token, secret, (err, decodec) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        res.userId = decodec.id;
        next();
    });
}

isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find({
            _id: { $in: user.roles }
        }, (err, roles) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name == "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({ message: "Require Admin Role!" });
            return;
        });
    });
}

const authJwt = {
    verifyToken,
    isAdmin
}

module.export = authJwt;

