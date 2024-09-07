const fs = require('fs/promises');
const { Movie } = require('../domain/movieModel');
const { title } = require('process');
const filePath = './config/database.json'

async function readFile() {
    const data = await fs.readFile(filePath);
    return JSON.parse(data.toString());
}

async function writeFile(data) {
    await fs.writeFile(filePath, JSON.stringify(data));
}

async function getAllMovies() {
    const movies = await readFile();
    return movies.map(toMovieModel)
}

async function getMovieById(id) {
    const movies = await readFile();
    const movie = movies.find(movie => movie.id == id);

    return movie ? toMovieModel(movie) : movie;
}

async function createMovie(movieData) {
    const moviesDatabase = await readFile();
    const id = moviesDatabase.length + 1;

    const movie = {
        id,
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        imageUrl: movieData.imageUrl,
        rating: Number(movieData.rating),
        description: movieData.description

    }

    moviesDatabase.push(movie);
    await writeFile(moviesDatabase);

    return toMovieModel(movie);
}


function toMovieModel(data) {
    const movie = new Movie;

    movie.id = data.id;
    movie.title = data.title;
    movie.genre = data.genre;
    movie.director = data.director;
    movie.year = data.year;
    movie.imageUrl = data.imageUrl;
    movie.rating = data.rating;
    movie.description = data.description;

    return movie;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie
};