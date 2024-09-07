const { createMovie } = require("../service/movie");

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },
    createPost: async (req, res) => {
        const result = await createMovie(req.body);
        res.redirect('/details/' + result.id);
    }
};