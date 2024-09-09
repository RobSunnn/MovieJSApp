const { createCast } = require('../service/castService')

module.exports = {
    castGet: (req, res) => {
        res.render('cast-create');
    },
    castPost: async (req, res) => {
        const castData = req.body;
        console.log(castData)

        const result = await createCast(castData);

        res.redirect('/');
    }
}

