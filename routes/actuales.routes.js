const express = require('express');
const router = express.Router();
const actualesController = require('../controllers/actuales.controller');
const isAuth = require('../util/is-auth');

router.get('/inicio', isAuth, actualesController.getInicio);
router.get('/login', actualesController.getLogin);
router.post('/login', actualesController.postLogin);
router.get('/signup', actualesController.getSignup);
router.post('/signup', actualesController.postSignup);
router.get('/logout', actualesController.getLogout);

module.exports = router;