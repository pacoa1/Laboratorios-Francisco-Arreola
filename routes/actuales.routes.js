const express = require('express');
const router = express.Router();
const actualesController = require('../controllers/actuales.controller');

router.get('/', actualesController.getInicio);

module.exports = router;