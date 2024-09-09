const { Cast } = require('../domain/castModel');

async function createCast(castData) {
    const cast = new Cast({
        name: castData.name,
        age: castData.age,
        born: castData.born,
        nameInMovie: castData.nameInMovie,
        imageUrl: castData.image
    })

    await cast.save();

    return cast;
}

async function getCastById(id) {
    const cast = Cast.findById(id).lean();

    return cast;
}

async function getAllCasts() {
    const allCasts = Cast.find().lean();
    
    return allCasts;
}

async function attachMovieToCast(movieId, castId) {
    const cast = await Cast.findById(castId);
    cast.movie.push(movieId);

    await cast.save();

    return cast;
}

module.exports = { createCast, getAllCasts, getCastById, attachMovieToCast }