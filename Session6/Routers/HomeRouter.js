const express = require('express');
const { HomeResponse, AboutResponse } = require('../Controller/HomeController');
const router = express.Router();

router.get('/', HomeResponse);

router.get('/home', HomeResponse);

router.get('/about', AboutResponse);



module.exports = router;