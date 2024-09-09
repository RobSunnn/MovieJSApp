const { createCast } = require('../service/castService')

module.exports = {
    castGet: (req, res) => {
        res.render('cast-create');
    },
    castPost: async (req, res) => {
        const castData = req.body;

        const result = await createCast(castData);

        res.redirect('/');
    }
}

