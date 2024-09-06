const { Router } = require('express');
const { homeController } = require('../contollers/home');
const { createController } = require('../contollers/createController');
const { aboutController } = require('../contollers/about');
const { searchContoller } = require('../contollers/search');

const router = Router();

router.get('/', homeController);
router.get('/create', createController);
router.get('/about', aboutController);
router.get('/search', searchContoller);

module.exports = { router };