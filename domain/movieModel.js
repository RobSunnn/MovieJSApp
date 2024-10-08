const { Schema, SchemaTypes: Types, model } = require('mongoose');

const movieSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1878,
        max: 2100
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }, description: {
        type: String,
        required: true,
        maxLength: 1000
    },
    imageUrl: {
        type: String,
        required: true
    },
    cast: {
        type: [Types.ObjectId],
        ref: 'Cast',
        default: []
    }
});

const Movie = model('Movie', movieSchema);


module.exports = { Movie }