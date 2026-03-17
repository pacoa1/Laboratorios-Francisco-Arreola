const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');

router.get('/inicio/jugadores/actuales', isAuth, canView, usersController.getInicio);
router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);
router.get('/signup', usersController.getSignup);
router.post('/signup', usersController.postSignup);
router.get('/logout', usersController.getLogout);

module.exports = router;