const mongoose = require('mongoose');
 
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
     
module.exports = dbConnection;