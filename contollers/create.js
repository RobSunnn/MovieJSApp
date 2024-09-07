const { createMovie } = require("../service/movie");

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },
    createPost: async (req, res) => {

        const movieData = req.body;

        const errors = {
            title: !movieData.title,
            genre: !movieData.genre,
            director: !movieData.director,
            year: !movieData.year,
            imageUrl: !movieData.imageUrl,
            rating: !movieData.rating,
            description: !movieData.description
        }

        if (Object.values(errors).includes(true)) {

            res.render("create", { movie: movieData, errors });
            return;
        }

        const result = await createMovie(req.body);
        res.redirect('/details/' + result.id);
    }
};