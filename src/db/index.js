const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db; // export models when I hace some
