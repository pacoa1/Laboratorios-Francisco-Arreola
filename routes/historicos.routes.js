const express = require('express');
const router = express.Router();
const historicosController = require('../controllers/historicos.controller');
const isAuth = require('../util/is-auth');

router.get('/historicos', isAuth, historicosController.getHistoricos);
router.get('/nuevo', isAuth, historicosController.getNuevo);
router.post('/nuevo', isAuth, historicosController.postNuevo);
router.get('/:jugador_id/editar', isAuth, historicosController.getEditar);
router.post('/editar', isAuth, historicosController.postEditar);

module.exports = router;