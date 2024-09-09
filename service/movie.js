const { Movie } = require('../domain/movieModel');
const { title } = require('process');


async function getAllMovies() {
    const movies = await Movie.find().lean();
    return movies;
}

async function getMovieById(id) {
    const movie = await Movie.findById(id).lean();

    return movie;
}

async function findMovieBySearchTerm(data) {
     const allMovies = Object.values(await getAllMovies());
 
     for (const movie of allMovies) {
         if (movie.title === data) {
             return movie;
         }
     }

}

async function attachCastToMovie(movieId, castId) {
    const movie = await Movie.findById(movieId);
    movie.cast.push(castId);

    await movie.save();

    return movie;
}

async function createMovie(movieData) {

    const movie = new Movie({
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        rating: Number(movieData.rating),
        description: movieData.description,
        imageUrl: movieData.imageUrl,
        cast: []
    });

    await movie.save();

    return movie;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    findMovieBySearchTerm,
    attachCastToMovie
};