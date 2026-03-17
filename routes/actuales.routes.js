const express = require('express');
const router = express.Router();
const actualesController = require('../controllers/actuales.controller');

router.get('/inicio', actualesController.getInicio);
router.get('/login', actualesController.getLogin);
router.post('/login', actualesController.postLogin);
router.get('/logout', actualesController.getLogout);

module.exports = router;