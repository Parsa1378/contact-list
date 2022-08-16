const mongo = require('mongoose');

const connectDB = (url) => {
    return mongo.connect(url);
}

module.exports = connectDB;