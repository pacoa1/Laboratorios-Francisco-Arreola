const express = require('express');
const router = express.Router();
const historicosController = require('../controllers/historicos.controller');
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canCreate = require('../util/can-create');
const canEdit = require('../util/can-edit');

router.get('/historicos', isAuth, canView, historicosController.getHistoricos);
router.get('/nuevo', isAuth, canCreate, historicosController.getNuevo);
router.post('/nuevo', isAuth, canCreate, historicosController.postNuevo);
router.get('/:jugador_id/editar', isAuth, canEdit, historicosController.getEditar);
router.post('/editar', isAuth, canEdit, historicosController.postEditar);
router.get('/:jugador_id', isAuth, canView, historicosController.getJugador);

module.exports = router;