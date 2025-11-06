const mongoose = require('mongoose');
console.log(process.env.MONGO_URI);

async function connectToMongoDB(uri) {
    return mongoose.connect(uri);  // built-in Mongoose method to connect to MongoDB.
}

module.exports = {
    connectToMongoDB,
}