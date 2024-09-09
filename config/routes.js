const { Router } = require('express');
const { homeController, details, attachActorToMovieGet, attachActorToMoviePost } = require('../contollers/home');
const { createGet, createPost } = require('../contollers/create');
const { aboutController } = require('../contollers/about');
const { searchGet, searchPost } = require('../contollers/search');
const { notFound } = require('../contollers/error');
const { castGet, castPost } = require('../contollers/castContoller');

const router = Router();

router.get('/', homeController);
router.get('/details/:id', details);
router.get('/create/movie', createGet);
router.post('/create/movie', createPost)
router.get('/create/cast', castGet);
router.post('/create/cast', castPost);
router.get('/attachActor/:id', attachActorToMovieGet);
router.post('/attachActor/:id', attachActorToMoviePost);
router.get('/about', aboutController);
router.get('/search', searchGet);
router.post('/search', searchPost)
router.get('*', notFound)

module.exports = { router };