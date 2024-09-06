const {urlencoded, static} = require('express');

function expressConfiguration(app) {
    app.use(urlencoded({ extended: true }))
    app.use('/static', static('static'));
}

module.exports = { expressConfiguration };