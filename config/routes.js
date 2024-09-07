const { Router } = require('express');
const { homeController, details } = require('../contollers/home');
const { createGet, createPost } = require('../contollers/create');
const { aboutController } = require('../contollers/about');
const { searchContoller } = require('../contollers/search');
const { notFound } = require('../contollers/error');

const router = Router();

router.get('/', homeController);
router.get('/details/:id', details);
router.get('/create', createGet);
router.post('/create', createPost)
router.get('/about', aboutController);
router.get('/search', searchContoller);
router.get('*', notFound)

module.exports = { router };