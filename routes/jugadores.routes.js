const express = require('express');
const router = express.Router();
const jugadoresController = require('../controllers/jugadores.controller');
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canCreate = require('../util/can-create');
const canEdit = require('../util/can-edit');

router.get('/historicos', isAuth, canView, jugadoresController.getHistoricos);
router.get('/nuevo', isAuth, canCreate, jugadoresController.getNuevo);
router.post('/nuevo', isAuth, canCreate, jugadoresController.postNuevo);
router.get('/:jugador_id/editar', isAuth, canEdit, jugadoresController.getEditar);
router.post('/editar', isAuth, canEdit, jugadoresController.postEditar);
router.get('/:jugador_id', isAuth, canView, jugadoresController.getJugador);

module.exports = router;