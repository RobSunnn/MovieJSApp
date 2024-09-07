const { findMovieBySearchTerm, getAllMovies } = require('../service/movie');

module.exports = {
    searchGet: async (req, res) => {
        const allMovies = await getAllMovies();
        res.render('search', { allMovies });
    },
    searchPost: async (req, res) => {
        const allMovies = await getAllMovies();
        const data = req.body;

        if (data.search === "") {
            res.render('search', { allMovies });
            return;
        }

        const movie = await findMovieBySearchTerm(data.search);

        res.render('search', { movie })

    }
};