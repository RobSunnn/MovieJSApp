const { getAllCasts, attachMovieToCast: attachMovieToCast, getCastById } = require("../service/castService");
const { getAllMovies, getMovieById, attachCastToMovie } = require("../service/movie");

module.exports = {
    homeController: async (req, res) => {
        const movies = await getAllMovies();
        res.render('home', { movies });
    },
    details: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);

        if (!movie) {
            return res.render('404');
        }

        const allCastIdInMovie = movie.cast;
        const allCast = [];
        
        for (const cast of allCastIdInMovie) {
            allCast.push(await getCastById(cast));
        }
  
        movie.starRating = '&#x2605;'.repeat(movie.rating);
    
        res.render('details', { movie, allCast });
    },
    attachActorToMovieGet: async (req, res) => {
        const movieId = req.params.id;
        const movie = await getMovieById(movieId);
        const allCasts = await getAllCasts();

        res.render('cast-attach', { allCasts, movie });
    },
    attachActorToMoviePost: async (req, res) => {
        const movieId = req.params.id;
        const castId = req.body.cast;

        await attachMovieToCast(movieId, castId);
        await attachCastToMovie(movieId, castId);
        res.redirect('/details/' + movieId);
    }
};