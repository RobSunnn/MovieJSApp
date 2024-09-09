const mongoose = require('mongoose');
require('../domain/movieModel');
require('../domain/castModel');

const connectionString = 'mongodb://localhost:27017/movie-magic';

async function configDatabase(params) {
    await mongoose.connect(connectionString);

    console.log('Database connected.')
}

module.exports = { configDatabase };