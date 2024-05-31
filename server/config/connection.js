require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/booksdb');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/googlebooks');

module.exports = mongoose.connection;
